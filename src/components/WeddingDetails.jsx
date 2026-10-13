import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const details = [
  {
    icon: CalendarDays,
    label: "The Date",
    value: (
      <>
        12<sup className="align-super text-xs">th</sup> November
      </>
    ),
    subValue: "2026",
  },
  {
    icon: Clock3,
    label: "The Time",
    value: "10.00 AM",
    subValue: "Morning",
  },
  {
    icon: MapPin,
    label: "The Venue",
    value: "Royal Rich Banquets",
    subValue: "Dompe",
  },
];

function WeddingDetails() {
  return (
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
          BACKGROUND DECORATIONS
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-96
          w-96
          rounded-full
          bg-white/60
          blur-3xl
        "
      />

      <div
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

      <div className="relative mx-auto max-w-6xl">
        {/* =========================================
            SECTION HEADER
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          {/* Decoration */}

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
            The Wedding Details
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
            The day we
            <br />
            have been waiting for.
          </h2>

          <p
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
            Here are the details you need to join us as we celebrate love,
            family, and the beginning of forever.
          </p>
        </motion.div>

        {/* =========================================
            DETAILS CARDS
        ========================================== */}

        <div
          className="
            mt-16
            grid
            gap-5
            sm:mt-20
            md:grid-cols-3
            md:gap-6
          "
        >
          {details.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.label}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-[2rem]
                  border
                  border-white/80
                  bg-white/75
                  p-2
                  shadow-[0_20px_60px_rgba(91,24,78,0.08)]
                  backdrop-blur-xl
                  transition-shadow
                  duration-500
                  hover:shadow-[0_25px_70px_rgba(91,24,78,0.14)]
                "
              >
                <div
                  className="
                    flex
                    h-full
                    min-h-[280px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[1.6rem]
                    border
                    border-[#EADBBE]
                    bg-[#FFFDF9]/90
                    px-6
                    py-10
                    text-center
                  "
                >
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F3E8F4]
                      text-[#5B184E]
                    "
                  >
                    <Icon size={24} strokeWidth={1.3} />
                  </motion.div>

                  {/* Label */}

                  <p
                    className="
                      mt-7
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.35em]
                      text-[#5B184E]
                    "
                  >
                    {detail.label}
                  </p>

                  {/* Main value */}

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-2xl
                      font-light
                      text-[#281625]
                      sm:text-3xl
                    "
                  >
                    {detail.value}
                  </h3>

                  {/* Secondary value */}

                  <p
                    className="
                      mt-2
                      text-sm
                      text-[#6E586C]
                    "
                  >
                    {detail.subValue}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM MESSAGE
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
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-12
            text-center
            sm:mt-16
          "
        >
          <p
            className="
              font-serif
              text-lg
              italic
              text-[#5B184E]
              sm:text-xl
            "
          >
            We can't wait to celebrate with you.
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span className="h-px w-8 bg-[#EADBBE]" />

            <span className="text-xs text-[#D4AF37]">✦</span>

            <span className="h-px w-8 bg-[#EADBBE]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WeddingDetails;
