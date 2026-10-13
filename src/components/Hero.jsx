import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import heroKissImage from "../assets/hero-kiss.jpg";

function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#FBF8F2]
        px-4
        py-4
        sm:px-6
        sm:py-6
      "
    >
      {/* =========================================
          HERO IMAGE CARD
      ========================================== */}

      <div
        className="
          relative
          flex
          min-h-[calc(100svh-2rem)]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[2rem]
          sm:min-h-[calc(100svh-3rem)]
          sm:rounded-[2.5rem]
        "
      >
        {/* =========================================
            LIVING BACKGROUND IMAGES (ANIMATED CUDDLE & FOREHEAD KISS)
        ========================================== */}

        <div className="absolute inset-0 overflow-hidden">
          {/* Base Layer: Loving gaze */}
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{
              scale: [1.06, 1.02, 1.06],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <img
              src={heroImage}
              alt="Sanjeewa and Vihangana gazing lovingly"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* Animated Layer: Forehead kiss & lovely cuddle */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              scale: [1.06, 1.02, 1.06],
            }}
            transition={{
              opacity: {
                duration: 9,
                repeat: Infinity,
                times: [0, 0.35, 0.48, 0.82, 0.95, 1],
                ease: "easeInOut",
              },
              scale: {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={heroKissImage}
              alt="Sanjeewa kissing Vihangana forehead"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </motion.div>
        </div>

        {/* =========================================
            IMAGE OVERLAY
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/40
            via-black/25
            to-black/80
          "
        />

        {/* =========================================
            SOFT PINK TINT
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[#4a1540]/15
            mix-blend-multiply
          "
        />

        {/* =========================================
            TOP DECORATION
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            absolute
            left-1/2
            top-8
            flex
            -translate-x-1/2
            items-center
            gap-3
            text-white/90
            sm:top-10
          "
        >
          <span className="h-px w-10 bg-white/60 sm:w-16" />

          <span className="text-sm">✦</span>

          <span className="h-px w-10 bg-white/60 sm:w-16" />
        </motion.div>

        {/* =========================================
            MAIN HERO CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
            px-6
            pb-12
            pt-20
            text-center
            text-white
            sm:px-10
            sm:pb-16
          "
        >
          {/* Together with their families */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.6,
            }}
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/95
              sm:text-xs
            "
            style={{
              textShadow:
                "0 4px 18px rgba(0,0,0,0.8), 0 0 18px rgba(0,0,0,0.35)",
            }}
          >
            Together with their families
          </motion.p>

          {/* Names */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-7"
          >
            <h1
              className="
                font-serif
                text-6xl
                font-light
                tracking-wide
                text-[#FFFDF9]
                sm:text-7xl
                md:text-8xl
              "
              style={{
                textShadow:
                  "0 6px 26px rgba(0,0,0,0.8), 0 0 22px rgba(0,0,0,0.4)",
              }}
            >
              Sanjeewa
            </h1>

            <div
              className="
                my-1
                font-serif
                text-4xl
                font-light
                italic
                text-[#D4AF37]
                sm:text-5xl
              "
              style={{
                textShadow:
                  "0 6px 20px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.3)",
              }}
            >
              &
            </div>

            <h1
              className="
                font-serif
                text-6xl
                font-light
                tracking-wide
                text-[#FFFDF9]
                sm:text-7xl
                md:text-8xl
              "
              style={{
                textShadow:
                  "0 6px 26px rgba(0,0,0,0.8), 0 0 22px rgba(0,0,0,0.4)",
              }}
            >
              Vihangana
            </h1>
          </motion.div>

          {/* Decorative symbol */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1.2,
            }}
            className="
              mt-7
              text-lg
              text-[#D4AF37]
            "
          >
            ✦
          </motion.div>

          {/* Wedding Date */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.4,
            }}
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/95
              sm:text-sm
            "
            style={{
              textShadow:
                "0 4px 18px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.3)",
            }}
          >
            <span>12 November 2026</span>

            <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

            <span>10.00 AM</span>
          </motion.div>

          {/* Venue */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.6,
            }}
            className="
              mt-3
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/80
              sm:text-sm
            "
            style={{
              textShadow:
                "0 4px 18px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.25)",
            }}
          >
            <span>Royal Rich Banquets</span>

            <span className="h-1 w-1 rounded-full bg-white/60" />

            <span>Dompe</span>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM SCROLL INDICATOR
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.4,
          }}
          className="
            absolute
            bottom-7
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-white/80
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll to explore
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
