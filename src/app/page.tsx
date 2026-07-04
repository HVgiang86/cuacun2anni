'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ParallaxTimeline from '@/components/ParallaxTimeline';
import TimeCounter from '@/components/TimeCounter';
import InviteCard from '@/components/InviteCard';
import GameSection from '@/components/GameSection';
import TulipCatcher from '@/components/TulipCatcher';

/**
 * Main landing page — Anniversary Website
 * 
 * Flow:
 * 1. Hero section with romantic landing
 * 2. Time counter showing relationship duration
 * 3. Parallax timeline of photos and milestones
 * 4. Invitation card (shown immediately)
 * 5. "Little Games for You" section with game cards
 * 6. Tulip Catcher game (opens in modal dialog)
 */
export default function Home() {
  const [isTulipGameOpen, setIsTulipGameOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <TimeCounter />
        <ParallaxTimeline />
        <InviteCard />
        <GameSection onOpenTulipGame={() => setIsTulipGameOpen(true)} />
      </main>

      {/* Tulip Catcher Modal — renders outside main flow */}
      <TulipCatcher
        isOpen={isTulipGameOpen}
        onClose={() => setIsTulipGameOpen(false)}
      />
    </>
  );
}
