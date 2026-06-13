import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({
  text,
  className = "",
}: Props) {
  return (
    <motion.h2
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
      }}
      transition={{
        duration: 0.8,
      }}
      className={className}
    >
      {text}
    </motion.h2>
  );
}