'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import RewardCard from './RewardCard';
import { rewardCodes } from '@/config/rewardCodes';
import { uiText } from '@/config/uiText';
import styles from './TulipCatcher.module.css';

interface Tulip {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface TulipCatcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TulipCatcher({ isOpen, onClose }: TulipCatcherProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [tulips, setTulips] = useState<Tulip[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nextIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const TARGET_SCORE = 10;

  // Handle dialog open/close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // Handle dialog close event (e.g., Escape key)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  // Game loop
  useEffect(() => {
    if (gameStarted && score < TARGET_SCORE) {
      const spawnTulip = () => {
        const newTulip: Tulip = {
          id: nextIdRef.current++,
          x: Math.random() * 85 + 5,
          y: -10,
          speed: 0.3 + Math.random() * 1,
        };
        setTulips(prev => [...prev, newTulip]);
      };

      const spawnInterval = setInterval(spawnTulip, 400);

      let lastTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const delta = now - lastTime;
        
        if (delta > 16) {
          setTulips(prev => {
            return prev
              .map(tulip => ({ ...tulip, y: tulip.y + tulip.speed }))
              .filter(tulip => tulip.y < 110);
          });
          lastTime = now;
        }
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        clearInterval(spawnInterval);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [gameStarted, score]);

  useEffect(() => {
    if (score >= TARGET_SCORE && !showVictory) {
      setShowVictory(true);
    }
  }, [score, showVictory]);

  const handleTulipClick = (tulipId: number, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTulips(prev => prev.filter(t => t.id !== tulipId));
    setScore(prev => prev + 1);
    
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
  };

  const resetGame = useCallback(() => {
    setGameStarted(false);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
  }, []);

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialogContent}>
        {/* Close button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={uiText.games.tulipCatcher.ariaClose}
        >
          ✕
        </button>

        {showVictory ? (
          <RewardCard
            code={rewardCodes.tulipCatch}
            onPlayAgain={resetGame}
          />
        ) : (
          <div className={styles.gameWrapper}>
            <div className={styles.gameHeader}>
              <h2>{uiText.games.tulipCatcher.title}</h2>
              <p>{uiText.games.tulipCatcher.subtitle(TARGET_SCORE)}</p>
            </div>

            {!gameStarted ? (
              <div className={styles.startScreen}>
                <div className={styles.startCard}>
                  <div className={styles.gameIcon}>🎮</div>
                  <h3>{uiText.games.tulipCatcher.howToPlay}</h3>
                  <ul className={styles.instructions}>
                    <li>{uiText.games.tulipCatcher.rule1}</li>
                    <li>{uiText.games.tulipCatcher.rule2(TARGET_SCORE)}</li>
                    <li>{uiText.games.tulipCatcher.rule3}</li>
                  </ul>
                  <button className="btn-primary" onClick={startGame}>
                    {uiText.games.tulipCatcher.startButton}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.scoreBoard}>
                  <div className={styles.scoreBadge}>
                    <span className={styles.scoreLabel}>{uiText.games.tulipCatcher.scoreLabel}</span>
                    <span className={styles.scoreValue}>{score} / {TARGET_SCORE}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${(score / TARGET_SCORE) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className={styles.gameArea} ref={gameAreaRef}>
                  {tulips.map(tulip => (
                    <button
                      key={tulip.id}
                      className={styles.tulip}
                      style={{
                        left: `${tulip.x}%`,
                        top: `${tulip.y}%`,
                      }}
                      onClick={(e) => handleTulipClick(tulip.id, e)}
                      onTouchStart={(e) => handleTulipClick(tulip.id, e)}
                      aria-label={uiText.games.tulipCatcher.ariaCatch}
                    >
                      🌷
                    </button>
                  ))}
                  
                  {tulips.length === 0 && (
                    <div className={styles.waitingMessage}>
                      {uiText.games.tulipCatcher.waitingMessage}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </dialog>
  );
}
