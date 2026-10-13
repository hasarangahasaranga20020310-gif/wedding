import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

import weddingMusic from "../assets/wedding-music.mp3";

function MusicPlayer({ isPlaying }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Music playback was blocked:", error);
      });
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

      {isPlaying && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={toggleMute}
          aria-label={muted ? "Turn music on" : "Mute music"}
          className="
            fixed
            bottom-5
            right-5
            z-[60]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#EADBBE]
            bg-white/85
            text-[#5B184E]
            shadow-[0_10px_30px_rgba(91,24,78,0.15)]
            backdrop-blur-xl
            transition
            duration-300
            hover:scale-105
            hover:bg-[#F3E8F4]
            sm:bottom-7
            sm:right-7
          "
        >
          {muted ? (
            <VolumeX size={18} strokeWidth={1.5} />
          ) : (
            <Volume2 size={18} strokeWidth={1.5} />
          )}

          {/* Music pulse */}

          {!muted && (
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#C59B27]/50
              "
            />
          )}
        </motion.button>
      )}
    </>
  );
}

export default MusicPlayer;
