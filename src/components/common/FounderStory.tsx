import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div
          className="
          grid
          items-center
          gap-16
          md:grid-cols-2
        "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <img
              src="/images/Sir.jpg"
              alt="Sanjay Makhija"
              className="
              w-full
              rounded-[40px]
              shadow-2xl
            "
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <span
              className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-blue-600
            "
            >
              Founder & Mentor
            </span>

            <h2
              className="
              mt-6
              text-5xl
              font-bold
            "
            >
              Sanjay Makhija
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-slate-600
            "
            >
              Senior Java Architect,
              Spring Boot Expert and
              Microservices Trainer
              with over 20 years of
              industry and training
              experience.
            </p>

            <div
              className="
              mt-10
              grid
              gap-5
              md:grid-cols-2
            "
            >
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                20+ Years Experience
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                10000+ Students
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                International Training
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                Enterprise Architect
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}