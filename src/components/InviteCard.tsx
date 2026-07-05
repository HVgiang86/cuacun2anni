'use client';

import Image from 'next/image';
import loveConfig from '@/config/loveConfig';
import inviteConfig from '@/config/invite.json';
import { uiText } from '@/config/uiText';
import { getPath } from '@/utils/basePath';
import styles from './InviteCard.module.css';

export default function InviteCard() {
  const handleYesClick = () => {
    alert(uiText.invite.yesAlert);
  };

  return (
    <div className={styles.inviteContainer}>
      <div className={styles.inviteCard}>
        <h2 className={styles.inviteTitle}>{loveConfig.inviteTitle}</h2>
        
        <div className={styles.catRoseContainer}>
          <Image 
            src={getPath("/cat-rose.gif")} 
            alt="Cat with rose"
            width={200}
            height={200}
            className={styles.catRoseGif}
            unoptimized
          />
        </div>
        
        <div className={styles.inviteDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📅</span>
            <div>
              <div className={styles.detailLabel}>{uiText.invite.labels.date}</div>
              <div className={styles.detailValue}>{inviteConfig.date}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🕐</span>
            <div>
              <div className={styles.detailLabel}>{uiText.invite.labels.time}</div>
              <div className={styles.detailValue}>{inviteConfig.time}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📍</span>
            <div>
              <div className={styles.detailLabel}>{uiText.invite.labels.location}</div>
              <div className={styles.detailValue}>{inviteConfig.location}</div>
            </div>
          </div>
        </div>


        <div className={styles.actionButtons}>
          <button 
            className={`btn-primary ${styles.yesButton}`}
            onClick={handleYesClick}
          >
            {uiText.invite.buttons.yes}
          </button>
        </div>
      </div>
    </div>
  );
}
