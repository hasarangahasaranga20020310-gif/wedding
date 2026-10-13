import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-11-12T19:00:00+05:30").getTime();

function calculateTimeLeft() {
  const difference = weddingDate - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),

    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

    minutes: Math.floor((difference / (1000 * 60)) % 60),

    seconds: Math.floor((difference / 1000) % 60),
  };
}

const timeUnits = [
  {
    key: "days",
    label: "Days",
  },
  {
    key: "hours",
    label: "Hours",
  },
  {
    key: "minutes",
    label: "Minutes",
  },
  {
    key: "seconds",
    label: "Seconds",
  },
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#FBF8F2]
    px-4
    pb-12
    pt-24
    sm:px-6
    sm:pb-16
    sm:pt-32
    lg:pb-20
    lg:pt-40
  "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
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
          bg-[#F3E8F4]
          opacity-60
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
          border-[#EADBBE]
          bg-[#F3E8F4]/60
          p-5
          shadow-[0_25px_80px_rgba(91,24,78,0.08)]
          backdrop-blur-xl
          sm:p-8
          lg:p-10
        "
      >
        <div
          className="
            rounded-[2rem]
            border
            border-white/80
            bg-white/80
            px-5
            py-14
            text-center
            backdrop-blur-xl
            sm:px-10
            sm:py-20
            lg:py-24
          "
        >
          {/* =========================================
              HEADER
          ========================================== */}

          <motion.div
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
              duration: 0.7,
            }}
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#C59B27]/60" />

              <span className="text-sm text-[#D4AF37]">✦</span>

              <span className="h-px w-10 bg-[#C59B27]/60" />
            </div>

            <p
              className="
                mt-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-[#5B184E]
              "
            >
              The Countdown
            </p>

            <h2
              className="
                mt-5
                font-serif
                text-4xl
                font-light
                text-[#281625]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Until we say
              <br />
              "I do"
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#6E586C]
                sm:text-base
              "
            >
              Every second brings us closer to the day we have been dreaming
              about.
            </p>
          </motion.div>

          {/* =========================================
              COUNTDOWN UNITS
          ========================================== */}

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-4xl
              grid-cols-2
              gap-3
              sm:mt-16
              sm:grid-cols-4
              sm:gap-5
            "
          >
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.key}
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[1.5rem]
                  border
                  border-[#EADBBE]
                  bg-[#FFFDF9]/90
                  px-4
                  py-7
                  shadow-[0_15px_40px_rgba(91,24,78,0.06)]
                  sm:rounded-[1.75rem]
                  sm:py-9
                "
              >
                {/* Number */}

                <motion.div
                  key={timeLeft[unit.key]}
                  initial={{
                    opacity: 0.4,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    font-serif
                    text-4xl
                    font-light
                    tabular-nums
                    text-[#5B184E]
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {String(timeLeft[unit.key]).padStart(2, "0")}
                </motion.div>

                {/* Label */}

                <p
                  className="
                    mt-3
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#6E586C]
                    sm:text-[10px]
                  "
                >
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* =========================================
              WEDDING DATE
          ========================================== */}

          <motion.div
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
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-12 sm:mt-16"
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-[#EADBBE]" />

              <span className="text-xs text-[#D4AF37]">✦</span>

              <span className="h-px w-8 bg-[#EADBBE]" />
            </div>

            <p
              className="
                mt-5
                font-serif
                text-xl
                font-light
                text-[#281625]
                sm:text-2xl
              "
            >
              12 November 2026
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#5B184E]
              "
            >
              10.00 AM · Royal Rich Banquets - Dompe
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Countdown;
