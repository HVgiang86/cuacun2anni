'use client';

import { useState } from 'react';
import CodeVault from './CodeVault';
import VideoPlayer from './VideoPlayer';
import styles from './FinalGift.module.css';

export default function FinalGiftPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className={styles.container}>
      {!isUnlocked ? (
        <CodeVault onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <VideoPlayer />
      )}
    </main>
  );
}
