'use client';

import { useEffect, useState } from 'react';
import loveConfig from '@/config/loveConfig';
import styles from './TimeCounter.module.css';

interface TimeLeft {
  days: number;
}

export default function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // Parse the relationship start date (Singapore timezone)
      const startDate = new Date(loveConfig.relationshipStart);
      const now = new Date();
      
      // Calculate difference in milliseconds
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        return { days };
      }

      return { days: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className={styles.counterSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>⏰</div>
          <h2 className={styles.title}>Time We've Shared</h2>
          <p className={styles.subtitle}>
            Every day with you is a treasure
          </p>

          <div className={styles.counterGrid}>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{timeLeft.days}</div>
              <div className={styles.timeLabel}>Days</div>
              <div className={styles.timeIcon}>📅</div>
            </div>
          </div>

          <p className={styles.message}>
            ...and counting! Here's to infinity more moments together💕
          </p>
        </div>
      </div>
    </section>
  );
}
