import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Opening({ onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="
        fixed
        inset-0
        z-50
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#FBF8F2]
        px-5
        py-8
      "
    >
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          absolute
          -left-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-[#F3E8F4]
          blur-3xl
        "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="
          absolute
          -bottom-24
          -right-24
          h-80
          w-80
          rounded-full
          bg-[#EBD5EC]
          blur-3xl
        "
      />

      {/* Small decorative circles */}

      <div
        className="
          absolute
          left-[10%]
          top-[18%]
          h-2
          w-2
          rounded-full
          bg-[#762566]
          opacity-50
        "
      />

      <div
        className="
          absolute
          right-[12%]
          top-[25%]
          h-3
          w-3
          rounded-full
          bg-[#D4AF37]
          opacity-60
        "
      />

      <div
        className="
          absolute
          bottom-[20%]
          left-[15%]
          h-3
          w-3
          rounded-full
          bg-[#C59B27]
          opacity-50
        "
      />

      {/* =========================================
          INVITATION CARD
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          w-full
          max-w-xl
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/80
            bg-white/80
            px-7
            py-14
            shadow-[0_25px_80px_rgba(91,24,78,0.12)]
            backdrop-blur-xl
            sm:px-12
            sm:py-16
          "
        >
          {/* Inner border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-3
              rounded-[2rem]
              border
              border-[#EADBBE]/80
            "
          />

          {/* Top decoration */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              relative
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-12 bg-[#C59B27]/60" />

            <Sparkles size={16} strokeWidth={1.5} className="text-[#D4AF37]" />

            <span className="h-px w-12 bg-[#C59B27]/60" />
          </motion.div>

          {/* Invitation label */}

          <motion.p
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
              delay: 0.9,
            }}
            className="
              relative
              mt-8
              text-center
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#5B184E]
            "
          >
            You are invited
          </motion.p>

          {/* Names */}

          <motion.div
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
              delay: 1.1,
            }}
            className="relative mt-6 text-center"
          >
            <h1
              className="
                font-serif
                text-5xl
                font-light
                tracking-wide
                text-[#281625]
                sm:text-6xl
              "
            >
              Sanjeewa
            </h1>

            <div
              className="
                my-2
                font-serif
                text-3xl
                font-light
                italic
                text-[#D4AF37]
              "
            >
              &
            </div>

            <h1
              className="
                font-serif
                text-5xl
                font-light
                tracking-wide
                text-[#281625]
                sm:text-6xl
              "
            >
              Vihangana
            </h1>
          </motion.div>

          {/* Wedding Invitation */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
            className="
              relative
              mt-7
              text-center
              font-serif
              text-lg
              italic
              text-[#6E586C]
            "
          >
            Wedding Invitation
          </motion.p>

          {/* Date */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.7,
            }}
            className="
              relative
              mt-8
              flex
              items-center
              justify-center
              gap-4
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#6E586C]
            "
          >
            <span>12</span>

            <span className="h-1 w-1 rounded-full bg-[#C59B27]" />

            <span>11</span>

            <span className="h-1 w-1 rounded-full bg-[#C59B27]" />

            <span>2026</span>
          </motion.div>

          {/* Open Button */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 2,
            }}
            className="
              relative
              mt-10
              flex
              justify-center
            "
          >
            <motion.button
              onClick={onOpen}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
    group
    flex
    items-center
    gap-3
    rounded-full
    bg-[#5B184E]
    px-7
    py-3.5
    text-sm
    font-medium
    text-white
    shadow-[0_12px_30px_rgba(91,24,78,0.28)]
    transition-all
    duration-300
    hover:bg-[#46113C]
    hover:shadow-[0_16px_35px_rgba(91,24,78,0.38)]
  "
            >
              <span>Open Invitation</span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Bottom decoration */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 2.2,
            }}
            className="
              relative
              mt-10
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span className="h-px w-8 bg-[#EADBBE]" />

            <span className="text-sm text-[#D4AF37]">✦</span>

            <span className="h-px w-8 bg-[#EADBBE]" />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Opening;
