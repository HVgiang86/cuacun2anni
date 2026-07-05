'use client';

import { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import Link from 'next/link';
import { uiText } from '@/config/uiText';
import { rewardCodes } from '@/config/rewardCodes';
import styles from './FinalGift.module.css';

interface CodeVaultProps {
  onUnlock: () => void;
}

export default function CodeVault({ onUnlock }: CodeVaultProps) {
  const [code, setCode] = useState<string[]>(Array(12).fill(''));
  const [isError, setIsError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    setIsError(false);
    
    const newCode = [...code];
    // Take the last character if they typed multiple somehow
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Move to next input automatically
    if (value && index < 11) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        // If current is empty, delete previous and focus it
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);
        inputRefs.current[index - 1]?.focus();
      } else {
        // Delete current
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
      }
      setIsError(false);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 12);
    
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);
      setIsError(false);
      
      // Focus the next empty input or the last one
      const focusIndex = Math.min(pastedData.length, 11);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleUnlock = () => {
    const enteredCode = code.join('');
    if (enteredCode === rewardCodes.finalMasterCode) {
      onUnlock();
    } else {
      setIsError(true);
      // Small vibration if supported
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(200);
      }
    }
  };

  return (
    <div className={`${styles.vaultCard} ${isError ? styles.shake : ''}`}>
      <h1 className={styles.title}>{uiText.finalGift.title}</h1>
      <p className={styles.subtitle}>{uiText.finalGift.subtitle}</p>
      
      <div className={styles.inputsContainer}>
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`${styles.digitInput} ${isError ? styles.error : ''}`}
            placeholder={uiText.finalGift.placeholder}
          />
        ))}
      </div>
      
      <div className={styles.errorMessage}>
        {isError ? uiText.finalGift.errorMsg : ''}
      </div>

      <button 
        className={`btn-primary ${styles.unlockButton}`}
        onClick={handleUnlock}
        disabled={code.join('').length < 12}
      >
        {uiText.finalGift.unlockButton}
      </button>

      <div>
        <Link href="/" className={styles.backLink}>
          {uiText.finalGift.backToHome}
        </Link>
      </div>
    </div>
  );
}
