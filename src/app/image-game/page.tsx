"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PhotoPairGame from "@/components/PhotoPairGame";
import RewardCard from "@/components/RewardCard";
import OrientationGuard from "@/components/OrientationGuard";
import { rewardCodes } from "@/config/rewardCodes";
import { uiText } from "@/config/uiText";

const ANIM_DURATION = 2;

export default function ImageGamePage() {
  const [showReward, setShowReward] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const handleGameWon = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowReward(true);
    }, ANIM_DURATION * 1000);
  };

  const handlePlayAgain = () => {
    setShowReward(false);
    setIsTransitioning(false);
    setGameKey((prev) => prev + 1); // Force remount of game component
  };

  return (
    <OrientationGuard>
      <main className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative">
        {/* Back to home link */}
        <Link
          href="/"
          className="fixed top-4 left-4 z-50 px-4 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
        >
          {uiText.games.pairingGame.backToHome}
        </Link>

        {!showReward ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: ANIM_DURATION }}
            className="flex flex-col items-center"
          >
            <PhotoPairGame key={gameKey} onGameWon={handleGameWon} />

            {/* Footer text */}
            <div className="mt-4 flex justify-between w-full px-4 absolute bottom-4 left-0 right-0">
              <p className="text-white/30 text-sm">
                {uiText.games.pairingGame.hint}
              </p>
              <p className="text-white/30 text-sm">{uiText.games.pairingGame.footer}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIM_DURATION }}
            className="w-full"
          >
            <RewardCard
              code={rewardCodes.imagePairing}
              onPlayAgain={handlePlayAgain}
              showBackLink={true}
            />
          </motion.div>
        )}
      </main>
    </OrientationGuard>
  );
}
