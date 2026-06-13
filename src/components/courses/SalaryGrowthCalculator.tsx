import { useMemo, useState } from "react";
import {
  TrendingUp,
  IndianRupee,
  Briefcase,
} from "lucide-react";

const salaryMultiplier: Record<string, number> = {
  Java: 1.8,
  Spring: 2.0,
  "Spring Boot": 2.3,
  Microservices: 2.8,
  React: 2.1,
  "Full Stack": 3.0,
  Python: 2.2,
  "Data Science": 3.2,
};

export default function SalaryGrowthCalculator() {
  const [currentSalary, setCurrentSalary] =
    useState(4);

  const [skill, setSkill] =
    useState("Full Stack");

  const projectedSalary = useMemo(() => {
    const multiplier =
      salaryMultiplier[skill] ?? 2;

    return (
      currentSalary * multiplier
    ).toFixed(1);
  }, [currentSalary, skill]);

  const salaryIncrease = useMemo(() => {
    return (
      Number(projectedSalary) -
      currentSalary
    ).toFixed(1);
  }, [projectedSalary, currentSalary]);

  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <div
          className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[40px]
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(91,75,154,0.12)]
        "
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-10 md:p-14">
              <span
                className="
                rounded-full
                bg-[#F3F1FC]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#5B4B9A]
              "
              >
                Salary Growth Estimator
              </span>

              <h2
                className="
                mt-6
                text-4xl
                font-black
                md:text-5xl
              "
              >
                Estimate Your
                <span className="gradient-text">
                  {" "}
                  Career Growth
                </span>
              </h2>

              <p
                className="
                mt-5
                text-lg
                text-slate-600
              "
              >
                See how upgrading your
                skills can potentially
                boost your salary in the
                IT industry.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <label
                    className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                  >
                    Current Salary (LPA)
                  </label>

                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="0.5"
                    value={currentSalary}
                    onChange={(e) =>
                      setCurrentSalary(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="w-full"
                  />

                  <div
                    className="
                    mt-3
                    flex
                    justify-between
                    text-sm
                    text-slate-500
                  "
                  >
                    <span>₹2 LPA</span>
                    <span>
                      ₹{currentSalary} LPA
                    </span>
                    <span>₹20 LPA</span>
                  </div>
                </div>

                <div>
                  <label
                    className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                  >
                    Select Skill
                  </label>

                  <select
                    value={skill}
                    onChange={(e) =>
                      setSkill(
                        e.target.value
                      )
                    }
                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    p-4
                  "
                  >
                    {Object.keys(
                      salaryMultiplier
                    ).map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
              bg-gradient-to-br
              from-[#5B4B9A]
              via-[#7063B3]
              to-[#8D83C7]
              p-10
              text-white
              md:p-14
            "
            >
              <div className="flex items-center gap-3">
                <TrendingUp
                  size={30}
                />

                <h3
                  className="
                  text-3xl
                  font-bold
                "
                >
                  Salary Projection
                </h3>
              </div>

              <div className="mt-12 space-y-6">
                <div
                  className="
                  rounded-3xl
                  bg-white/10
                  p-6
                  backdrop-blur-lg
                "
                >
                  <div className="flex items-center gap-3">
                    <IndianRupee
                      size={24}
                    />

                    <p className="text-sm opacity-80">
                      Current Salary
                    </p>
                  </div>

                  <h4
                    className="
                    mt-3
                    text-5xl
                    font-black
                  "
                  >
                    ₹{currentSalary}
                  </h4>

                  <span className="opacity-80">
                    LPA
                  </span>
                </div>

                <div
                  className="
                  rounded-3xl
                  bg-white/10
                  p-6
                  backdrop-blur-lg
                "
                >
                  <div className="flex items-center gap-3">
                    <Briefcase
                      size={24}
                    />

                    <p className="text-sm opacity-80">
                      Expected Salary
                    </p>
                  </div>

                  <h4
                    className="
                    mt-3
                    text-5xl
                    font-black
                  "
                  >
                    ₹{projectedSalary}
                  </h4>

                  <span className="opacity-80">
                    LPA
                  </span>
                </div>

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  p-6
                  backdrop-blur-lg
                "
                >
                  <p className="text-sm opacity-80">
                    Potential Growth
                  </p>

                  <h4
                    className="
                    mt-2
                    text-4xl
                    font-black
                  "
                  >
                    +₹{salaryIncrease}
                    LPA
                  </h4>
                </div>
              </div>

              <div
                className="
                mt-10
                rounded-2xl
                bg-white/10
                p-5
                text-sm
                leading-relaxed
              "
              >
                * Salary projections are
                indicative and based on
                market trends, skill
                demand, project
                experience, and interview
                performance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}