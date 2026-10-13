import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import storyOne from "../assets/story-1.jpg";
import storyTwo from "../assets/story-2.jpg";
import storyThree from "../assets/story-3.jpg";

const storyItems = [
  {
    year: "The Beginning",
    title: "When We First Met",
    description:
      "Every beautiful story has a beginning. Ours started with a simple meeting that neither of us knew would become the start of something so special.",
    image: storyOne,
    position: "left",
  },
  {
    year: "A New Chapter",
    title: "Our First Moments",
    description:
      "As we spent more time together, the little moments became our favorite memories. Slowly, a beautiful friendship began to grow into something more.",
    image: storyTwo,
    position: "right",
  },
  {
    year: "The Question",
    title: "The Proposal",
    description:
      "With a heart full of hope and a future full of dreams, one unforgettable question changed everything. And of course, the answer was yes.",
    image: storyThree,
    position: "left",
  },
];

function StoryCard({ item, index }) {
  return (
    <div
      className={`
        relative
        grid
        items-center
        gap-8
        lg:grid-cols-2
        lg:gap-20
        ${item.position === "right" ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* =========================================
          IMAGE
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: item.position === "left" ? -50 : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          bg-white
          p-2
          shadow-[0_20px_60px_rgba(169,87,112,0.08)]
        "
      >
        <div
          className="
            relative
            h-[360px]
            overflow-hidden
            rounded-[1.6rem]
            sm:h-[450px]
          "
        >
          <motion.img
            src={item.image}
            alt={item.title}
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
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
              from-black/20
              to-transparent
            "
          />

          {/* Image number */}

          <div
            className="
              absolute
              left-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/20
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            0{index + 1}
          </div>
        </div>
      </motion.div>

      {/* =========================================
          STORY CONTENT
      ========================================== */}

      <motion.div
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
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          px-2
          lg:px-4
        "
      >
        {/* Year / Label */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#C98296]" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#A95770]
            "
          >
            {item.year}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            font-serif
            text-4xl
            font-light
            leading-tight
            text-[#332B2E]
            sm:text-5xl
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-6
            max-w-lg
            text-sm
            leading-7
            text-[#806B70]
            sm:text-base
            sm:leading-8
          "
        >
          {item.description}
        </p>

        {/* Decorative line */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-[#F0DDE2]" />

          <Heart
            size={16}
            strokeWidth={1.3}
            className="fill-[#F6DDE3] text-[#C98296]"
          />

          <span className="h-px w-12 bg-[#F0DDE2]" />
        </div>
      </motion.div>
    </div>
  );
}

function OurStory() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFDFB]
        px-4
        py-24
        sm:px-6
        sm:py-32
        lg:py-40
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#FCECEF]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-[#F6DDE3]/50
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
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#C98296]" />

            <span className="text-sm text-[#C9A86A]">✦</span>

            <span className="h-px w-10 bg-[#C98296]" />
          </div>

          <p
            className="
              mt-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#A95770]
            "
          >
            Our Story
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-light
              leading-tight
              text-[#332B2E]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Every love story
            <br />
            has a beginning.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-[#806B70]
              sm:text-base
            "
          >
            From the first hello to the promise of forever, here are a few
            moments that made our journey unforgettable.
          </p>
        </motion.div>

        {/* =========================================
            TIMELINE
        ========================================== */}

        <div
          className="
            relative
            mt-20
            space-y-20
            sm:mt-28
            sm:space-y-28
          "
        >
          {/* Center Timeline Line */}

          <div
            className="
              absolute
              bottom-0
              left-[19px]
              top-0
              w-px
              bg-[#EED9DF]
              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          {storyItems.map((item, index) => (
            <div
              key={item.title}
              className="
                relative
                pl-12
                lg:pl-0
              "
            >
              {/* Timeline Dot */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="
                  absolute
                  left-0
                  top-1/2
                  z-10
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#EED9DF]
                  bg-[#FFFDFB]
                  lg:left-1/2
                  lg:-translate-x-1/2
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#C98296]
                  "
                />
              </motion.div>

              <StoryCard item={item} index={index} />
            </div>
          ))}

          {/* =========================================
              FINAL STORY MOMENT
          ========================================== */}

          <motion.div
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              pl-12
              lg:pl-0
            "
          >
            {/* Final timeline dot */}

            <div
              className="
                mx-auto
                max-w-2xl
                rounded-[2rem]
                border
                border-[#F1DEE3]
                bg-[#FCECEF]/60
                px-7
                py-12
                text-center
                backdrop-blur-sm
                sm:px-12
                sm:py-16
              "
            >
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#A95770]
                "
              >
                And now
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-light
                  text-[#332B2E]
                  sm:text-5xl
                "
              >
                Forever begins.
              </h3>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-[#806B70]
                  sm:text-base
                "
              >
                And after all the moments that brought us here, we are ready to
                begin the most beautiful chapter of all.
              </p>

              <div className="mt-7 text-[#C98296]">✦</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
