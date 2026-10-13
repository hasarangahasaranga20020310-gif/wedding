import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

function RSVPModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    telephone: "",
    attending: "yes",
    guests: "1",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =========================================
      LOCK BACKGROUND SCROLL
  ========================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================
      ESCAPE KEY
  ========================================== */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  /* =========================================
      HANDLE INPUT
  ========================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================
      HANDLE SUBMIT
  ========================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      For now, we only show a success state.

      Later, we can connect this to:
      - MongoDB
      - Google Sheets
      - Firebase
      - Email
      - WhatsApp
      - A custom API
    */

    setIsSubmitted(true);
  };

  /* =========================================
      RESET MODAL
  ========================================== */

  const handleClose = () => {
    setIsSubmitted(false);

    setFormData({
      fullName: "",
      telephone: "",
      attending: "yes",
      guests: "1",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#1E0F1D]/80
            p-4
            backdrop-blur-md
            sm:p-6
          "
          onClick={handleClose}
        >
          {/* =====================================
              MODAL
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              my-8
              w-full
              max-w-lg
              overflow-hidden
              rounded-[2rem]
              border
              border-white/70
              bg-[#FFFDF9]
              shadow-[0_30px_100px_rgba(91,24,78,0.25)]
              sm:rounded-[2.5rem]
            "
          >
            {/* =================================
                CLOSE BUTTON
            ================================== */}

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close RSVP form"
              className="
                absolute
                right-5
                top-5
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#EADBBE]
                bg-white/80
                text-[#6E586C]
                backdrop-blur-md
                transition
                hover:bg-[#F3E8F4]
                hover:text-[#5B184E]
              "
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 15,
                  }}
                  className="
                    p-7
                    sm:p-10
                  "
                >
                  {/* ===============================
                      HEADER
                  ================================ */}

                  <div className="pr-10">
                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.35em]
                        text-[#5B184E]
                      "
                    >
                      Kindly Reply
                    </p>

                    <h2
                      className="
                        mt-4
                        font-serif
                        text-3xl
                        font-light
                        text-[#281625]
                        sm:text-4xl
                      "
                    >
                      Will you join us?
                    </h2>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#6E586C]
                      "
                    >
                      Please let us know if you'll be celebrating with us.
                    </p>
                  </div>

                  {/* ===============================
                      FORM
                  ================================ */}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {/* Full Name */}

                    <div>
                      <label
                        htmlFor="fullName"
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[#6E586C]
                        "
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-[#EADBBE]
                          bg-white
                          px-5
                          py-4
                          text-sm
                          text-[#281625]
                          outline-none
                          placeholder:text-[#A895A6]
                          transition
                          focus:border-[#8C2E75]
                          focus:ring-4
                          focus:ring-[#F3E8F4]
                        "
                      />
                    </div>

                    {/* Telephone */}

                    <div>
                      <label
                        htmlFor="telephone"
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[#6E586C]
                        "
                      >
                        Telephone
                      </label>

                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+94 7X XXX XXXX"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-[#EADBBE]
                          bg-white
                          px-5
                          py-4
                          text-sm
                          text-[#281625]
                          outline-none
                          placeholder:text-[#A895A6]
                          transition
                          focus:border-[#8C2E75]
                          focus:ring-4
                          focus:ring-[#F3E8F4]
                        "
                      />
                    </div>

                    {/* Attendance */}

                    <div>
                      <p
                        className="
                          mb-3
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[#6E586C]
                        "
                      >
                        Will you be joining us?
                      </p>

                      <div
                        className="
                          grid
                          gap-3
                          sm:grid-cols-2
                        "
                      >
                        {/* YES */}

                        <label
                          className={`
                            flex
                            cursor-pointer
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            p-4
                            transition
                            ${
                              formData.attending === "yes"
                                ? "border-[#8C2E75] bg-[#F3E8F4]"
                                : "border-[#EADBBE] bg-white"
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value="yes"
                            checked={formData.attending === "yes"}
                            onChange={handleChange}
                            className="
                              h-4
                              w-4
                              accent-[#5B184E]
                            "
                          />

                          <span
                            className="
                              text-sm
                              text-[#281625]
                            "
                          >
                            Yes, I'll be there
                          </span>
                        </label>

                        {/* NO */}

                        <label
                          className={`
                            flex
                            cursor-pointer
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            p-4
                            transition
                            ${
                              formData.attending === "no"
                                ? "border-[#8C2E75] bg-[#F3E8F4]"
                                : "border-[#EADBBE] bg-white"
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value="no"
                            checked={formData.attending === "no"}
                            onChange={handleChange}
                            className="
                              h-4
                              w-4
                              accent-[#5B184E]
                            "
                          />

                          <span
                            className="
                              text-sm
                              text-[#281625]
                            "
                          >
                            Sorry, can't make it
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Guest Count */}

                    <AnimatePresence>
                      {formData.attending === "yes" && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="overflow-hidden"
                        >
                          <label
                            htmlFor="guests"
                            className="
                              mb-2
                              block
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-[#6E586C]
                            "
                          >
                            Number of Guests
                          </label>

                          <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="
                              w-full
                              appearance-none
                              rounded-2xl
                              border
                              border-[#EADBBE]
                              bg-white
                              px-5
                              py-4
                              text-sm
                              text-[#281625]
                              outline-none
                              transition
                              focus:border-[#8C2E75]
                              focus:ring-4
                              focus:ring-[#F3E8F4]
                            "
                          >
                            <option value="1">1 Guest</option>

                            <option value="2">2 Guests</option>

                            <option value="3">3 Guests</option>

                            <option value="4">4 Guests</option>

                            <option value="5">5 Guests</option>

                            <option value="6">6 Guests</option>
                          </select>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}

                    <motion.button
                      type="submit"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                        mt-3
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
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
                      Send RSVP
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                /* ===============================
                    SUCCESS STATE
                ================================ */

                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    flex
                    min-h-[500px]
                    flex-col
                    items-center
                    justify-center
                    px-7
                    py-16
                    text-center
                    sm:px-10
                  "
                >
                  <div
                    className="
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
                    <Check size={28} strokeWidth={1.5} />
                  </div>

                  <h2
                    className="
                      mt-7
                      font-serif
                      text-3xl
                      font-light
                      text-[#281625]
                      sm:text-4xl
                    "
                  >
                    Thank you!
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-sm
                      leading-7
                      text-[#6E586C]
                    "
                  >
                    {formData.attending === "yes"
                      ? "We're so happy you'll be celebrating this special day with us."
                      : "We're sorry you won't be able to join us, but thank you for letting us know."}
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="
                      mt-8
                      rounded-full
                      border
                      border-[#EADBBE]
                      px-7
                      py-3
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#5B184E]
                      transition
                      hover:bg-[#F3E8F4]
                    "
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RSVPModal;
