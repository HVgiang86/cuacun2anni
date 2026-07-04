'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './RewardCard.module.css';

interface RewardCardProps {
  code: string;
  onPlayAgain: () => void;
  showBackLink?: boolean;
}

export default function RewardCard({ code, onPlayAgain, showBackLink = false }: RewardCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; emoji: string; delay: number }>>([]);

  useEffect(() => {
    // Create confetti particles
    const particles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: ['💕', '❤️', '🌷', '✨', '🎉', '💐', '🎀', '💝'][Math.floor(Math.random() * 8)],
      delay: Math.random() * 2,
    }));
    setConfetti(particles);

    // Auto-reveal the code after a short celebration delay
    const timer = setTimeout(() => setRevealed(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.rewardContainer}>
      {/* Confetti background */}
      <div className={styles.confettiLayer}>
        {confetti.map((p) => (
          <div
            key={p.id}
            className={styles.confettiPiece}
            style={{
              left: `${p.x}%`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {p.emoji}
          </div>
        ))}
      </div>

      <div className={styles.rewardCard}>
        <div className={styles.celebrationIcon}>🎉</div>
        <h2 className={styles.congratsTitle}>Congratulations!</h2>
        <p className={styles.congratsSubtitle}>
          You completed the challenge! Here&apos;s your reward:
        </p>

        {/* Code reveal box */}
        <div className={`${styles.codeBox} ${revealed ? styles.codeRevealed : ''}`}>
          <div className={styles.codeOverlay}>
            <span>✨ Tap to reveal ✨</span>
          </div>
          <div className={styles.codeDigits}>
            {code.split('').map((digit, i) => (
              <span
                key={i}
                className={styles.digit}
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>

        {/* Collection hint */}
        <div className={styles.hintBox}>
          <span className={styles.hintIcon}>🔑</span>
          <p className={styles.hintText}>
            Collect 4 more digits to claim the final prize!
          </p>
        </div>

        {/* Action buttons */}
        <div className={styles.actions}>
          <button className="btn-primary" onClick={onPlayAgain}>
            🎮 Play Again
          </button>
          {showBackLink && (
            <Link href="/" className={styles.backLink}>
              ← Back to Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
