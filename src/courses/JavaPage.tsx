import { Link } from "react-router-dom";
import { Clock, BookOpen, Users, Award } from "lucide-react";
import SEO from "../components/common/SEO";
import SalaryGrowthCalculator from "../components/courses/SalaryGrowthCalculator";
import Curriculum from "../components/courses/Curriculum";
import GlassCard from "../components/common/GlassCard";
const curriculum = [
  "Java Programming Basics",
  "Object-Oriented Programming (OOP)",
  "Exception Handling & Debugging",
  "Java Collections Framework",
  "Multithreading & Concurrency",
  "Java 8 Features (Lambda, Stream API)",
];

export default function JavaPage() {
  return (
    <>
      <SEO
        title="Core Java Training"
        description="Master Core Java, Object-Oriented Programming (OOP), Collections, Exception Handling, Multithreading, and Java 8 features."
      />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Column: Info & CTAs */}
              <div className="lg:col-span-7">
                <span
                  className="
                  rounded-full
                  bg-blue-100
                  px-4
                  py-2
                  text-blue-600
                  font-medium
                "
                >
                  Beginner Friendly
                </span>

                <h1
                  className="
                  mt-6
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-tight
                "
                >
                  Core Java
                </h1>

                <p
                  className="
                  mt-8
                  text-xl
                  text-slate-600
                  leading-relaxed
                "
                >
                  Learn Java from fundamentals to advanced concepts, object-oriented programming (OOP), collections, exception handling, and modern Java 8 features with hands-on labs.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="
                    rounded-xl
                    bg-[#5B4B9A]
                    px-8
                    py-4
                    font-semibold
                    transition
                    hover:bg-[#46387C]
                  "
                  style={{ color: "#ffffff" }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>

              {/* Right Column: Quick Facts GlassCard */}
              <div className="lg:col-span-5">
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Quick Facts</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Duration</p>
                        <p className="text-lg font-semibold text-slate-800">3 Months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Skill Level</p>
                        <p className="text-lg font-semibold text-slate-800">Beginner</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Students Enrolled</p>
                        <p className="text-lg font-semibold text-slate-800">3000+</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <Award size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Certification</p>
                        <p className="text-lg font-semibold text-slate-800">Industry Recognized</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}

        {/* CURRICULUM SECTION */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center">Course Curriculum</h2>
            <Curriculum topics={curriculum} />
          </div>
        </section>
        <SalaryGrowthCalculator/>
        {/* FOOTER CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div
              className="
              rounded-[40px]
              bg-slate-900
              p-12
              text-center
              text-white
              md:p-20

            
            "
            >
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Training?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-slate-300 text-lg">
                Join Mikado Solutions to build industry-relevant skills and fast-track your career. Book a free counselling session today!
              </p>
              <Link
                to="/contact"
                className="
                mt-10
                inline-block
                rounded-xl
                bg-[#5B4B9A]
                px-10
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#46387C]
              "
              >
                Book Free Counselling
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}