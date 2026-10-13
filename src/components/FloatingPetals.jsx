import { motion } from "framer-motion";

const petals = [
  {
    id: 1,
    left: "6%",
    delay: 0,
    duration: 22,
    size: 12,
    rotate: 120,
    color: "#8C2E75", // Royal Kandyan Purple
    shadow: "rgba(91, 24, 78, 0.12)",
  },
  {
    id: 2,
    left: "20%",
    delay: 6,
    duration: 26,
    size: 10,
    rotate: 80,
    color: "#D4AF37", // Antique Gold sparkle
    shadow: "rgba(212, 175, 55, 0.15)",
  },
  {
    id: 3,
    left: "80%",
    delay: 3,
    duration: 24,
    size: 11,
    rotate: 140,
    color: "#FAF2E0", // Ivory Jasmine
    shadow: "rgba(197, 155, 39, 0.1)",
  },
  {
    id: 4,
    left: "92%",
    delay: 9,
    duration: 28,
    size: 9,
    rotate: 180,
    color: "#AA4E92", // Soft Royal Orchid
    shadow: "rgba(91, 24, 78, 0.12)",
  },
];

function FloatingPetals() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[50]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: 0,
            y: "-10vh",
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, 20, -15, 25, -10, 0],
            y: "110vh",
            rotate: petal.rotate,
            opacity: [0, 0.45, 0.55, 0.35, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            rounded-full
          "
          style={{
            left: petal.left,
            backgroundColor: petal.color,
            boxShadow: `0 2px 8px ${petal.shadow}`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.6}px`,
            borderRadius: "70% 30% 70% 30%",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingPetals;
