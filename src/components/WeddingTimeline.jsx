import { motion } from "framer-motion";
import { Camera, Heart, Music, Sparkles, Utensils } from "lucide-react";

const timelineItems = [
  {
    time: "9.45 AM",
    title: "Guest Arrival",
    description:
      "The celebration begins with you. Arrive at Royal Rich Banquets, greet our loved ones, and settle in for a beautiful day filled with love and happiness.",
    icon: Heart,
  },
  {
    time: "10.00 AM",
    title: "The Registration",
    description:
      "A special moment as two hearts make their promises to one another. Join us as we take this beautiful step towards a lifetime of togetherness.",
    icon: Sparkles,
  },
  {
    time: "10.30 AM",
    title: "The Poruwa Ceremony",
    description:
      "Witness the beauty of tradition as we begin our journey together, surrounded by the blessings, love, and warm wishes of our family and friends.",
    icon: Heart,
  },
  {
    time: "11.00 AM",
    title: "Let the Celebrations Begin",
    description:
      "The formalities give way to celebration. Enjoy the music, share a few laughs, and make wonderful memories with everyone gathered to celebrate our love.",
    icon: Music,
  },
  {
    time: "1.00 PM",
    title: "Wedding Buffet",
    description:
      "Good food tastes even better when shared with the people we love. Join us for a delicious feast and enjoy this special time together.",
    icon: Utensils,
  },
  {
    time: "4.00 PM",
    title: "Until We Meet Again",
    description:
      "As our celebration comes to a close, we say goodbye with grateful hearts, beautiful memories, and happiness made even greater by having you with us.",
    icon: Camera,
  },
];

function WeddingTimeline() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#FBF8F2]
    px-4
    pb-24
    pt-8
    sm:px-6
    sm:pb-32
    sm:pt-16
    lg:pb-40
    lg:pt-20
  "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-96
          w-96
          rounded-full
          bg-[#F3E8F4]
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
          bg-[#EBD5EC]/60
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl">
        {/* =========================================
            MAIN GLASS CARD
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            rounded-[2.5rem]
            border
            border-[#EADBBE]
            bg-[#F3E8F4]/50
            p-4
            shadow-[0_25px_80px_rgba(91,24,78,0.08)]
            backdrop-blur-xl
            sm:p-6
            lg:p-8
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
              backdrop-blur-xl
              sm:px-10
              sm:py-20
              lg:px-16
              lg:py-24
            "
          >
            {/* =========================================
                HEADER
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
              }}
              className="
                mx-auto
                max-w-2xl
                text-center
              "
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
                The Wedding Day
              </p>

              <h2
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-light
                  leading-tight
                  text-[#281625]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                A beautiful
                <br />
                evening awaits.
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
                From the moment you arrive to the last dance of the evening,
                here's a little glimpse of how we will celebrate together.
              </p>
            </motion.div>

            {/* =========================================
                TIMELINE
            ========================================== */}

            <div
              className="
                relative
                mx-auto
                mt-16
                max-w-3xl
                sm:mt-20
              "
            >
              {/* Desktop center line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  top-0
                  hidden
                  w-px
                  -translate-x-1/2
                  bg-[#EADBBE]
                  md:block
                "
              />

              {/* Mobile left line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-5
                  top-0
                  w-px
                  bg-[#EADBBE]
                  md:hidden
                "
              />

              <div className="space-y-12 sm:space-y-16">
                {timelineItems.map((item, index) => {
                  const Icon = item.icon;

                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.title}
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
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                          relative
                          md:grid
                          md:grid-cols-2
                          md:gap-16
                        "
                    >
                      {/* =================================
                            TIMELINE NODE
                        ================================= */}

                      <div
                        className="
                            absolute
                            left-5
                            top-1/2
                            z-10
                            flex
                            h-10
                            w-10
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#EADBBE]
                            bg-[#FFFDF9]
                            text-[#5B184E]
                            md:left-1/2
                          "
                      >
                        <Icon size={16} strokeWidth={1.4} />
                      </div>

                      {/* =================================
                            EMPTY SIDE
                        ================================= */}

                      <div
                        className={`
                            hidden
                            md:block
                            ${isEven ? "" : "md:order-2"}
                          `}
                      />

                      {/* =================================
                            CONTENT
                        ================================= */}

                      <div
                        className={`
                            pl-14
                            md:pl-0
                            ${
                              isEven
                                ? "md:pr-12 md:text-right"
                                : "md:order-2 md:pl-12"
                            }
                          `}
                      >
                        {/* Time */}

                        <span
                          className="
                              inline-flex
                              rounded-full
                              border
                              border-[#EADBBE]
                              bg-[#F3E8F4]
                              px-4
                              py-2
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-[#5B184E]
                            "
                        >
                          {item.time}
                        </span>

                        {/* Title */}

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
                          {item.title}
                        </h3>

                        {/* Description */}

                        <p
                          className="
                              mt-3
                              text-sm
                              leading-7
                              text-[#6E586C]
                            "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* =========================================
                FOOTER MESSAGE
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
                delay: 0.3,
              }}
              className="
                mt-16
                border-t
                border-[#EADBBE]
                pt-10
                text-center
                sm:mt-20
                sm:pt-12
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
                Come ready to celebrate, laugh, and make memories with us.
              </p>

              <div
                className="
                  mt-5
                  text-xs
                  tracking-[0.3em]
                  text-[#D4AF37]
                "
              >
                ✦ &nbsp; ✦ &nbsp; ✦
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WeddingTimeline;
