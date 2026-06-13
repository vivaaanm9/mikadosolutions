import { Link } from "react-router-dom";
import Counter from "../components/ui/Counter";
import HeroScene from "../components/three/HeroScene";
import PlacementStats from "../components/placements/PlacementStats";
import CourseGrid from "../components/courses/CourseGrid";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import Marquee from "../components/ui/Marquee";
import FounderStory from "../components/common/FounderStory";
import SuccessTimeline from "../components/placements/SuccessTimeline";
import Title from "../components/common/Title";
export default function HomePage() {
  return (
    <>
      <Title/>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <HeroScene />
        </div>

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span
                className="
                inline-flex
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-5
                py-2
                font-medium
                text-blue-600
              "
              >
                20+ Years of Technology Training Excellence
              </span>

              <h1
                className="
                mt-8
                text-5xl
                font-black
                leading-tight
                text-slate-900
                md:text-7xl
              "
              >
                Master
                <span className="gradient-text">
                  {" "}
                  Java Full Stack
                </span>
                <br />
                Spring Boot &
                <br />
                Microservices
              </h1>

              <p
                className="
                mt-8
                max-w-2xl
                text-lg
                text-slate-600
                md:text-xl
              "
              >
                Learn from industry experts.
                Build real-world projects.
                Get placement-ready with
                Java, Spring Boot,
                Microservices, React,
                Python and Data Science.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="
                  rounded-xl
                  bg-[#5B4B9A]
                  px-8
                  py-4
                  font-semibold
                  transition
                  hover:bg-[#46387C]
                "
                  style={{ color: "#FFFFFF" }}
                >
                  Explore Courses
                </Link>

                <Link
                  to="/placements"
                  className="
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-8
                  py-4
                  font-semibold
                "
                >
                  View Placements
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#5B4B9A]">
                    <Counter target={10000} time={0.1} inc={100} />
                  </h3>
                  <p className="text-slate-600">
                    Students
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#5B4B9A]">
                    <Counter target={5000} time={0.1} inc={50} />
                  </h3>
                  <p className="text-slate-600">
                    Placements
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#5B4B9A]">
                    <Counter target={20} time={20} inc={1} />
                  </h3>
                  <p className="text-slate-600">
                    Years
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#5B4B9A]">
                    <Counter target={50} time={20} inc={1}/>
                  </h3>
                  <p className="text-slate-600">
                    Hiring Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY MARQUEE */}
      <Marquee />

      {/* STATS */}
      <PlacementStats />
      <SuccessTimeline/>
      {/* ROADMAP */}
      {/* COURSES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">
              Featured Programs
            </h2>

            <p className="mt-5 text-slate-600">
              Industry-focused courses
              designed for career growth.
            </p>
          </div>

          <CourseGrid />
        </div>
      </section>

      {/* FOUNDER */}
      <FounderStory />

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* CTA */}
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
            <h2 className="text-5xl font-bold">
              Ready To Start Your
              Tech Career?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
              Join thousands of students
              who transformed their careers
              with Mikado Solutions.
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
            "
            >
              Book Free Counselling
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}