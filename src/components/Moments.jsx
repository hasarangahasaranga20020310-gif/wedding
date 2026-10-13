import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import momentOne from "../assets/moment-1.jpg";
import momentTwo from "../assets/moment-2.jpg";
import momentThree from "../assets/moment-3.jpg";
// import momentFour from "../assets/moment-4.jpg";
// import momentFive from "../assets/moment-5.jpg";
// import momentSix from "../assets/moment-6.jpg";

const moments = [
  {
    image: momentOne,
    alt: "Binura and Upeksha pre-shoot moment one",
  },
  {
    image: momentTwo,
    alt: "Binura and Upeksha pre-shoot moment two",
  },
  {
    image: momentThree,
    alt: "Binura and Upeksha pre-shoot moment three",
  },
  // {
  //   image: momentFour,
  //   alt: "Binura and Upeksha pre-shoot moment four",
  // },
  // {
  //   image: momentFive,
  //   alt: "Binura and Upeksha pre-shoot moment five",
  // },
  // {
  //   image: momentSix,
  //   alt: "Binura and Upeksha pre-shoot moment six",
  // },
];

function Moments() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isLightboxOpen = selectedIndex !== null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === 0) {
        return moments.length - 1;
      }
      return current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === moments.length - 1) {
        return 0;
      }
      return current + 1;
    });
  };

  /* =========================================
     KEYBOARD CONTROLS
  ========================================== */
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  /* =========================================
     LOCK BACKGROUND SCROLL
  ========================================== */
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

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
            BACKGROUND DECORATION
        ========================================== */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
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
            bottom-20
            h-96
            w-96
            rounded-full
            bg-[#EBD5EC]
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-6xl">
          {/* =========================================
              HEADER
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
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
              Our Moments
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
              Little moments,
              <br />
              forever memories.
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
              A collection of moments from our journey together, captured before
              we begin our next chapter.
            </p>
          </motion.div>

          {/* =========================================
              GALLERY CARD
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="
              mt-14
              rounded-[2.5rem]
              border
              border-white/80
              bg-white/70
              p-3
              shadow-[0_25px_80px_rgba(91,24,78,0.08)]
              backdrop-blur-xl
              sm:mt-20
              sm:p-5
            "
          >
            {/* =========================================
                GALLERY GRID
            ========================================== */}
            <div
              className="
                grid
                grid-cols-2
                gap-2
                sm:gap-3
                lg:grid-cols-12
                lg:gap-4
              "
            >
              {/* IMAGE 1 */}
              <GalleryImage
                item={moments[0]}
                index={0}
                onClick={() => setSelectedIndex(0)}
                className="
                  aspect-[4/5]
                  lg:col-span-4
                  lg:row-span-2
                "
              />

              {/* IMAGE 2 */}
              <GalleryImage
                item={moments[1]}
                index={1}
                onClick={() => setSelectedIndex(1)}
                className="
                  aspect-square
                  lg:col-span-4
                  lg:aspect-[4/3]
                "
              />

              {/* IMAGE 3 */}
              <GalleryImage
                item={moments[2]}
                index={2}
                onClick={() => setSelectedIndex(2)}
                className="
                  aspect-square
                  lg:col-span-4
                  lg:row-span-2
                  lg:aspect-[4/5]
                "
              />
            </div>
          </motion.div>

          {/* =========================================
              FOOTER MESSAGE
          ========================================== */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              mt-10
              text-center
              font-serif
              text-lg
              italic
              text-[#5B184E]
              sm:mt-12
              sm:text-xl
            "
          >
            And there are still so many memories waiting to be made.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          LIGHTBOX
      ========================================== */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#1E0F1D]/92
              p-4
              backdrop-blur-xl
              sm:p-8
            "
            onClick={closeLightbox}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:right-8
                sm:top-8
              "
            >
              <X size={20} />
            </button>

            {/* PREVIOUS BUTTON */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:left-8
                sm:h-12
                sm:w-12
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:right-8
                sm:h-12
                sm:w-12
              "
            >
              <ChevronRight size={22} />
            </button>

            {/* ACTIVE IMAGE */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                max-h-[85vh]
                max-w-5xl
                overflow-hidden
                rounded-[1.5rem]
                bg-white/10
                p-1
                shadow-2xl
                sm:rounded-[2rem]
                sm:p-2
              "
            >
              <img
                src={moments[selectedIndex].image}
                alt={moments[selectedIndex].alt}
                className="
                  max-h-[82vh]
                  max-w-full
                  rounded-[1.2rem]
                  object-contain
                  sm:rounded-[1.5rem]
                "
              />
            </motion.div>

            {/* IMAGE COUNTER */}
            <div
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                tracking-[0.2em]
                text-white/80
                backdrop-blur-md
              "
            >
              {String(selectedIndex + 1).padStart(2, "0")}
              {"  "}/{"  "}
              {String(moments.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================
    GALLERY IMAGE COMPONENT
========================================= */
function GalleryImage({ item, index, onClick, className }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.25rem]
        text-left
        sm:rounded-[1.75rem]
        ${className}
      `}
    >
      {/* Image */}
      <motion.img
        src={item.image}
        alt={item.alt}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Hover overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/0
          transition
          duration-500
          group-hover:bg-black/20
        "
      />

      {/* Hover label */}
      <div
        className="
          absolute
          bottom-4
          left-4
          translate-y-3
          rounded-full
          border
          border-white/30
          bg-white/10
          px-4
          py-2
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white
          opacity-0
          backdrop-blur-md
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        View Moment
      </div>

      {/* Number */}
      <span
        className="
          absolute
          right-4
          top-4
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/10
          text-[9px]
          text-white
          backdrop-blur-md
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.button>
  );
}

export default Moments;
