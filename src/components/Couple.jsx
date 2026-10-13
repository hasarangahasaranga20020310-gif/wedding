import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import coupleImage from "../assets/couple.jpg";

function Couple() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FCECEF]
        px-4
        py-20
        sm:px-6
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-white/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-80
          w-80
          rounded-full
          bg-[#F6DDE3]
          blur-3xl
        "
      />

      {/* =========================================
          MAIN CARD
      ========================================== */}

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
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/80
          bg-white/75
          p-4
          shadow-[0_25px_80px_rgba(169,87,112,0.08)]
          backdrop-blur-xl
          sm:p-6
          lg:p-8
        "
      >
        <div
          className="
            grid
            overflow-hidden
            rounded-[2rem]
            bg-[#FFFDFB]
            lg:grid-cols-2
          "
        >
          {/* =========================================
              IMAGE
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[480px]
              overflow-hidden
              sm:min-h-[600px]
              lg:min-h-[700px]
            "
          >
            <motion.img
              src={coupleImage}
              alt="Binura and Upeksha"
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
              "
            />

            {/* Image decoration */}

            <div
              className="
                absolute
                bottom-6
                left-6
                rounded-full
                border
                border-white/40
                bg-white/20
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.25em]
                text-white
                backdrop-blur-md
              "
            >
              Together, always
            </div>
          </motion.div>

          {/* =========================================
              CONTENT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              justify-center
              px-7
              py-14
              sm:px-12
              sm:py-16
              lg:px-16
              xl:px-20
            "
          >
            {/* Small heading */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#C98296]" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#A95770]
                "
              >
                A Little About Us
              </p>
            </div>

            {/* Main heading */}

            <h2
              className="
                mt-7
                font-serif
                text-4xl
                font-light
                leading-tight
                text-[#332B2E]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Two hearts,
              <br />
              one beautiful
              <br />
              journey.
            </h2>

            {/* Decorative heart */}

            <div className="mt-7">
              <Heart
                size={22}
                strokeWidth={1.3}
                className="fill-[#F6DDE3] text-[#C98296]"
              />
            </div>

            {/* Names */}

            <h3
              className="
                mt-6
                font-serif
                text-2xl
                font-light
                text-[#A95770]
                sm:text-3xl
              "
            >
              Binura & Upeksha
            </h3>

            {/* Description */}

            <div
              className="
                mt-6
                space-y-4
                text-sm
                leading-7
                text-[#806B70]
                sm:text-base
                sm:leading-8
              "
            >
              <p>
                Some of the most beautiful stories begin quietly, with two
                people simply crossing paths at the right moment.
              </p>

              <p>
                What began as a simple meeting slowly became a collection of
                memories, shared dreams, laughter, and countless little moments
                that brought us closer together.
              </p>

              <p>
                Today, with grateful hearts and the love of our families
                surrounding us, we are excited to begin the next chapter of our
                story together.
              </p>
            </div>

            {/* Signature-style ending */}

            <div
              className="
                mt-8
                border-t
                border-[#F0DDE2]
                pt-6
              "
            >
              <p
                className="
                  font-serif
                  text-lg
                  italic
                  text-[#A95770]
                "
              >
                And this is only the beginning...
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Couple;
