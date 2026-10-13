import { motion } from "framer-motion";
import { Gem } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#FBF8F2]
        px-4
        py-20
        sm:px-6
        sm:py-28
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-[#F3E8F4]
          blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#EBD5EC]
          blur-3xl
        "
      />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-4xl
        "
      >
        {/* =========================================
            KANDYAN FOOTER CARD
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            rounded-[2.5rem]
            border
            border-[#EADBBE]
            bg-[#F3E8F4]
            p-3
            shadow-[0_25px_80px_rgba(91,24,78,0.08)]
            sm:p-5
          "
        >
          {/* =========================================
              INNER WHITE CARD
          ========================================== */}

          <div
            className="
              rounded-[2rem]
              border
              border-white/80
              bg-white/80
              px-6
              py-14
              text-center
              backdrop-blur-xl
              sm:px-10
              sm:py-20
            "
          >
            {/* =========================================
                GEM ICON
            ========================================== */}

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
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                y: [0, -3, 0],
              }}
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#EADBBE]
                bg-[#F3E8F4]
                text-[#5B184E]
              "
            >
              <Gem
                size={23}
                strokeWidth={1.2}
                fill="currentColor"
                fillOpacity={0.15}
              />
            </motion.div>

            {/* =========================================
                SMALL LABEL
            ========================================== */}

            <p
              className="
                mt-7
                text-[9px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-[#5B184E]
              "
            >
              With Love
            </p>

            {/* =========================================
                MAIN MESSAGE
            ========================================== */}

            <h2
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
              Thank you for being
              <br />
              <span className="text-[#5B184E]">part of our story.</span>
            </h2>

            {/* =========================================
                DIVIDER
            ========================================== */}

            <div
              className="
                mx-auto
                mt-10
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-[#C59B27]/60
                "
              />

              <span
                className="
                  text-xs
                  text-[#D4AF37]
                "
              >
                ✦
              </span>

              <span
                className="
                  h-px
                  w-12
                  bg-[#C59B27]/60
                "
              />
            </div>

            {/* =========================================
                NAMES
            ========================================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                mt-9
                font-serif
                text-3xl
                font-light
                text-[#5B184E]
                sm:text-4xl
              "
            >
              Sanjeewa
              <span
                className="
                  mx-3
                  text-xl
                  text-[#D4AF37]
                "
              >
                &
              </span>
              Vihangana
            </motion.p>

            {/* =========================================
                CLOSING LINE
            ========================================== */}

            <p
              className="
                mt-8
                font-serif
                text-sm
                italic
                text-[#6E586C]
              "
            >
              With love, forever & always.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM COPYRIGHT
        ========================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
            sm:gap-5
          "
        ></div>
      </div>
    </footer>
  );
}

export default Footer;
