'use client';

import { useEffect, useState } from 'react';
import { getPath } from '@/utils/basePath';
import { loveConfig } from '@/config/loveConfig';
import styles from './FinalGift.module.css';

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  // Convert standard youtube link to embed format
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&controls=1&rel=0`;
  }
  return url;
};

export default function VideoPlayer() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; emoji: string; delay: number }>>([]);
  const videoUrl = loveConfig.finalVideoUrl || '';
  const isExternal = videoUrl.startsWith('http');
  const embedUrl = isExternal ? getEmbedUrl(videoUrl) : getPath(videoUrl || '/videos/final.mp4');

  useEffect(() => {
    // Generate confetti upon unlock
    const particles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: ['💕', '❤️', '🎉', '✨', '🎊', '🎁', '🎀'][Math.floor(Math.random() * 7)],
      delay: Math.random() * 2,
    }));
    setConfetti(particles);
  }, []);

  return (
    <>
      {/* Confetti overlay */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
        {confetti.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              top: '-40px',
              left: `${p.x}%`,
              fontSize: '2rem',
              animation: `confettiDrop 4s ease-out ${p.delay}s forwards`,
              opacity: 0,
            }}
          >
            {p.emoji}
          </div>
        ))}
        <style jsx>{`
          @keyframes confettiDrop {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>

      {/* Video Container */}
      <div className={styles.videoContainer}>
        {isExternal ? (
          <iframe
            className={styles.videoElement}
            src={embedUrl}
            title="Final Gift Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video 
            className={styles.videoElement}
            controls 
            autoPlay 
            playsInline
            src={embedUrl}
          >
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        )}
      </div>
    </>
  );
}
