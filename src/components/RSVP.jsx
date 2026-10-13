import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

import RSVPModal from "./RSVPModal";

function RSVP() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-[#F5EDF6]
          px-4
          py-24
          sm:px-6
          sm:py-32
          lg:py-40
        "
      >
        {/* =========================================
            DECORATION
        ========================================== */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/60
            blur-3xl
          "
        />

        {/* =========================================
            MAIN CARD
        ========================================== */}

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-[2.5rem]
              border
              border-white/80
              bg-white/70
              p-3
              shadow-[0_25px_80px_rgba(91,24,78,0.08)]
              backdrop-blur-xl
              sm:p-5
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/80
                bg-[#FFFDF9]/90
                px-6
                py-16
                text-center
                backdrop-blur-xl
                sm:px-10
                sm:py-24
              "
            >
              {/* Decorative Heart */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F3E8F4]
                  text-[#5B184E]
                "
              >
                <Heart
                  size={26}
                  strokeWidth={1.2}
                  fill="currentColor"
                  fillOpacity={0.15}
                />
              </motion.div>

              {/* Label */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="
                  mt-7
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-[#5B184E]
                "
              >
                Kindly Reply
              </motion.p>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  font-serif
                  text-4xl
                  font-light
                  leading-tight
                  text-[#281625]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                We'd love to
                <br />
                celebrate with you.
              </motion.h2>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-[#6E586C]
                  sm:text-base
                "
              >
                Your presence would mean the world to us. Please let us know if
                you can join us as we celebrate the beginning of our forever.
              </motion.p>

              {/* RSVP Button */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="
                  mt-9
                  rounded-full
                  bg-[#5B184E]
                  px-9
                  py-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white
                  shadow-[0_15px_35px_rgba(91,24,78,0.25)]
                  transition-all
                  hover:bg-[#46113C]
                  sm:px-12
                "
              >
                RSVP Now
              </motion.button>

              {/* Small Decoration */}

              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span className="h-px w-10 bg-[#EADBBE]" />

                <span className="text-xs text-[#D4AF37]">✦</span>

                <span className="h-px w-10 bg-[#EADBBE]" />
              </div>

              <p
                className="
                  mt-5
                  font-serif
                  text-sm
                  italic
                  text-[#5B184E]
                "
              >
                Sanjeewa & Vihangana
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          RSVP MODAL
      ========================================== */}

      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default RSVP;
