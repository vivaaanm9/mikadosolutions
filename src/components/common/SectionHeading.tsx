import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : ""
      }`}
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold md:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-5 max-w-3xl text-lg text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}