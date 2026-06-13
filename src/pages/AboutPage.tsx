import AnimatedText from "../components/ui/AnimatedText";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-32">
        <div className="container mx-auto px-6">
          <AnimatedText
            text="About Mikado Solutions"
            className="
            text-center
            text-6xl
            font-bold
          "
          />

          <p
            className="
            mx-auto
            mt-8
            max-w-4xl
            text-center
            text-xl
            text-slate-600
          "
          >
            For over 15 years,
            Mikado Solutions has
            trained thousands of
            students and working
            professionals in Java,
            Spring Boot,
            Microservices, Python
            and Full Stack
            Development.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div
          className="
          container
          mx-auto
          grid
          gap-8
          px-6
          md:grid-cols-3
        "
        >
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-bold">
              Mission
            </h3>

            <p className="mt-4 text-slate-600">
              Build industry-ready
              developers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-bold">
              Vision
            </h3>

            <p className="mt-4 text-slate-600">
              Become India's most
              trusted tech learning
              platform.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-bold">
              Values
            </h3>

            <p className="mt-4 text-slate-600">
              Quality, Mentorship,
              Innovation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}