import { Link } from "react-router-dom";
import { Clock, BookOpen, Users, Award } from "lucide-react";
import SEO from "../../components/common/SEO";
import Roadmap from "../../components/courses/Roadmap";
import Curriculum from "../../components/courses/Curriculum";
import GlassCard from "../../components/common/GlassCard";

const curriculum = [
  "Introduction to Spring Boot",
  "Auto-Configuration & Spring Starters",
  "Building RESTful Web Services",
  "Database Integration with Spring Data JPA",
  "Spring Boot Security & JWT",
  "Application Testing, Actuator, & Deployment",
];

const roadmapSteps = [
  "Spring Core",
  "Spring Boot Starter",
  "REST APIs",
  "Spring Data JPA",
];

export default function SpringBootPage() {
  return (
    <>
      <SEO
        title="Spring Boot Training"
        description="Build production-ready REST APIs, secure them with JWT/OAuth2, integrate Spring Data JPA, and deploy scalable enterprise systems."
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
                  bg-green-100
                  px-4
                  py-2
                  text-green-700
                  font-medium
                "
                >
                  Enterprise Development
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
                  Spring Boot
                </h1>

                <p
                  className="
                  mt-8
                  text-xl
                  text-slate-600
                  leading-relaxed
                "
                >
                  Build production-grade REST APIs, security layers, JPA applications, and deploy robust, enterprise-grade cloud systems.
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
                        <p className="text-lg font-semibold text-slate-800">2 Months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Skill Level</p>
                        <p className="text-lg font-semibold text-slate-800">Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Students Enrolled</p>
                        <p className="text-lg font-semibold text-slate-800">2000+</p>
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
        <Roadmap steps={roadmapSteps} />

        {/* CURRICULUM SECTION */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center">Course Curriculum</h2>
            <Curriculum topics={curriculum} />
          </div>
        </section>

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