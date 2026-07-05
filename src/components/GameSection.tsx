'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { uiText } from '@/config/uiText';
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
          <h2 className={styles.title}>{uiText.games.sectionTitle}</h2>
          <p className={styles.subtitle}>
            {uiText.games.subtitle}
          </p>
        </div>

        <div className={`${styles.gameCards} ${visible ? styles.visible : ''}`}>
          {/* Tulip Catch Card */}
          <div className={styles.gameCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <div className={styles.gameEmoji}>🌷</div>
              <h3 className={styles.gameName}>{uiText.games.tulipGame.title}</h3>
              <p className={styles.gameDescription}>
                {uiText.games.tulipGame.description}
              </p>
              <div className={styles.gameDifficulty}>
                <span className={styles.difficultyLabel}>{uiText.games.difficultyLabel}</span>
                <span className={styles.difficultyStars}>⭐⭐</span>
              </div>
              <button 
                className={`btn-primary ${styles.playButton}`}
                onClick={onOpenTulipGame}
              >
                {uiText.games.tulipGame.playButton}
              </button>
            </div>
          </div>

          {/* Image Pairing Card */}
          <div className={styles.gameCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <div className={styles.gameEmoji}>🃏</div>
              <h3 className={styles.gameName}>{uiText.games.pairingGame.title}</h3>
              <p className={styles.gameDescription}>
                {uiText.games.pairingGame.description}
              </p>
              <div className={styles.gameDifficulty}>
                <span className={styles.difficultyLabel}>{uiText.games.difficultyLabel}</span>
                <span className={styles.difficultyStars}>⭐⭐⭐</span>
              </div>
              <Link href="/image-game" className={`btn-primary ${styles.playButton}`}>
                {uiText.games.pairingGame.playButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Final Gift Card */}
        <div className={`${styles.finalGiftCard} ${visible ? styles.visible : ''}`}>
          <div className={styles.cardGlow}></div>
          <div className={styles.finalGiftContent}>
            <div className={styles.finalGiftEmoji}>🎁</div>
            <h3 className={styles.gameName}>{uiText.games.finalGiftCard.title}</h3>
            <p className={styles.gameDescription}>
              {uiText.games.finalGiftCard.description}
            </p>
            <Link href="/final-gift" className={`btn-primary ${styles.playButton} ${styles.finalGiftBtn}`}>
              {uiText.games.finalGiftCard.button}
            </Link>
          </div>
        </div>

        {/* Collection progress hint */}
        <div className={`${styles.progressHint} ${visible ? styles.visible : ''}`}>
          <span>🔑</span>
          <span>{uiText.games.progressHint}</span>
          <span>🎁</span>
        </div>
      </div>
    </section>
  );
}
