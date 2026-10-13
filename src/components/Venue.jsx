import { motion } from "framer-motion";
import { Clock3, ExternalLink, MapPin } from "lucide-react";

import venueImage from "../assets/venue.jpg";

const googleMapsUrl =
  "https://maps.google.com/maps?q=6.9551725,80.0734219&z=16&output=embed";

function Venue() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#F5EDF6]
        via-[#F8EFF6]
        to-[#FAF6F0]
        px-4
        pt-16
        pb-24
        sm:px-6
        sm:pt-20
        sm:pb-32
        lg:pt-24
        lg:pb-36
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      {/* Top ambient blend glow from preceding section */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          -top-20
          h-80
          w-full
          max-w-4xl
          -translate-x-1/2
          rounded-full
          bg-[#E8D4EA]/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
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
          -left-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#EBD5EC]/60
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
            amount: 0.4,
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

          <div
            className="
              mt-5
              inline-flex
              items-center
              rounded-full
              border
              border-[#5B184E]/15
              bg-white/70
              px-4
              py-1.5
              shadow-sm
              backdrop-blur-sm
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#5B184E]
              "
            >
              The Venue
            </p>
          </div>

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
            A place to
            <br />
            celebrate love.
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
            Join us at a beautiful place where we will gather with our favourite
            people to celebrate this special beginning.
          </p>
        </motion.div>

        {/* =========================================
            VENUE CONTENT
        ========================================== */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:mt-20
            lg:grid-cols-12
            lg:gap-6
          "
        >
          {/* =========================================
              VENUE IMAGE
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white
              bg-white
              p-2
              shadow-[0_25px_80px_rgba(91,24,78,0.08)]
              lg:col-span-7
            "
          >
            <div
              className="
                relative
                h-[420px]
                overflow-hidden
                rounded-[2rem]
                sm:h-[550px]
              "
            >
              <motion.img
                src={venueImage}
                alt="Avenra Gardens wedding venue"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="
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
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* Floating venue label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-[1.5rem]
                  border
                  border-white/30
                  bg-white/15
                  p-5
                  text-white
                  backdrop-blur-xl
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/80
                  "
                >
                  Our Celebration
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-light
                    sm:text-3xl
                  "
                >
                  Royal Rich Banquets
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              VENUE DETAILS
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              gap-5
              lg:col-span-5
            "
          >
            {/* Information Card */}

            <div
              className="
                rounded-[2.5rem]
                border
                border-[#EADBBE]
                bg-[#F3E8F4]/60
                p-2
                shadow-[0_25px_80px_rgba(91,24,78,0.07)]
                backdrop-blur-xl
              "
            >
              <div
                className="
                  rounded-[2rem]
                  border
                  border-white/80
                  bg-white/80
                  p-7
                  backdrop-blur-xl
                  sm:p-9
                "
              >
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#5B184E]
                  "
                >
                  Where to find us
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    font-light
                    text-[#281625]
                    sm:text-4xl
                  "
                >
                  Royal Rich Banquets
                </h3>

                {/* Location */}

                <div
                  className="
                    mt-8
                    flex
                    items-start
                    gap-4
                    border-b
                    border-[#EADBBE]
                    pb-6
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F3E8F4]
                      text-[#5B184E]
                    "
                  >
                    <MapPin size={19} strokeWidth={1.4} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#5B184E]
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#6E586C]
                      "
                    >
                      Dompe,
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Time */}

                <div
                  className="
                    mt-6
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F3E8F4]
                      text-[#5B184E]
                    "
                  >
                    <Clock3 size={19} strokeWidth={1.4} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#5B184E]
                      "
                    >
                      Ceremony
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#6E586C]
                      "
                    >
                      12 November 2026
                      <br />
                      10.00 AM
                    </p>
                  </div>
                </div>

                {/* Directions Button */}

                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#5B184E]
                    px-6
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white
                    shadow-[0_15px_35px_rgba(91,24,78,0.25)]
                    transition-all
                    hover:bg-[#46113C]
                  "
                >
                  Get Directions
                  <ExternalLink size={15} strokeWidth={1.5} />
                </motion.a>
              </div>
            </div>

            {/* =========================================
                MAP
            ========================================== */}

            <div
              className="
                overflow-hidden
                rounded-[2.5rem]
                border
                border-[#EADBBE]
                bg-white
                p-2
                shadow-[0_25px_80px_rgba(91,24,78,0.06)]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                "
              >
                <iframe
                  title="Avenra Gardens location"
                  src="
                    https://maps.google.com/maps?q=6.9551725,80.0734219&z=16&output=embed
                  "
                  className="
                    h-[280px]
                    w-full
                    border-0
                    sm:h-[320px]
                  "
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
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
            delay: 0.3,
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
            We can't wait to welcome you there.
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

export default Venue;
