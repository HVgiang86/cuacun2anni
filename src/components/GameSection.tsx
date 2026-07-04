'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './GameSection.module.css';

interface GameSectionProps {
  onOpenTulipGame: () => void;
}

export default function GameSection({ onOpenTulipGame }: GameSectionProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.gameSection} ref={sectionRef}>
      {/* Decorative background */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>🎮</div>
          <h2 className={styles.title}>Little Games for You</h2>
          <p className={styles.subtitle}>
            Play these mini-games to collect secret codes and unlock a special surprise!
          </p>
        </div>

        <div className={`${styles.gameCards} ${visible ? styles.visible : ''}`}>
          {/* Tulip Catch Card */}
          <div className={styles.gameCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <div className={styles.gameEmoji}>🌷</div>
              <h3 className={styles.gameName}>Tulip Catch</h3>
              <p className={styles.gameDescription}>
                Catch falling tulips before they disappear! 
                Collect 10 tulips to earn your first secret code.
              </p>
              <div className={styles.gameDifficulty}>
                <span className={styles.difficultyLabel}>Difficulty:</span>
                <span className={styles.difficultyStars}>⭐⭐</span>
              </div>
              <button 
                className={`btn-primary ${styles.playButton}`}
                onClick={onOpenTulipGame}
              >
                🌷 Play Now
              </button>
            </div>
          </div>

          {/* Image Pairing Card */}
          <div className={styles.gameCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <div className={styles.gameEmoji}>🃏</div>
              <h3 className={styles.gameName}>Image Pairing</h3>
              <p className={styles.gameDescription}>
                Match all the photo pairs arranged in a heart shape! 
                Find every match to reveal your second secret code.
              </p>
              <div className={styles.gameDifficulty}>
                <span className={styles.difficultyLabel}>Difficulty:</span>
                <span className={styles.difficultyStars}>⭐⭐⭐</span>
              </div>
              <Link href="/image-game" className={`btn-primary ${styles.playButton}`}>
                🃏 Play Now
              </Link>
            </div>
          </div>
        </div>

        {/* Collection progress hint */}
        <div className={`${styles.progressHint} ${visible ? styles.visible : ''}`}>
          <span>🔑</span>
          <span>Collect codes from both games to unlock the ultimate prize!</span>
          <span>🎁</span>
        </div>
      </div>
    </section>
  );
}
