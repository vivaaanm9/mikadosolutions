import {
  GraduationCap,
  FolderKanban,
  MessageSquareCode,
  FileText,
  Briefcase,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    title: "Training Started",
    icon: GraduationCap,
    description:
      "Begin your learning journey with industry-focused training.",
  },
  {
    title: "Projects Completed",
    icon: FolderKanban,
    description:
      "Build real-world projects to strengthen practical skills.",
  },
  {
    title: "Mock Interviews",
    icon: MessageSquareCode,
    description:
      "Prepare through technical and HR interview simulations.",
  },
  {
    title: "Resume Building",
    icon: FileText,
    description:
      "Create an ATS-friendly resume with expert guidance.",
  },
  {
    title: "Placement Drive",
    icon: Briefcase,
    description:
      "Attend exclusive hiring drives with partner companies.",
  },
  {
    title: "Job Offer",
    icon: Trophy,
    description:
      "Secure your dream role and launch your IT career.",
  },
];

export default function SuccessTimeline() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8D83C7]/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mb-20 text-center">
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
            Placement Process
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Placement Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A structured roadmap that takes students
            from learning to placement success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center Line */}
          <div
            className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-1
            -translate-x-1/2
            rounded-full
            bg-gradient-to-b
            from-[#5B4B9A]
            via-[#8D83C7]
            to-[#5B4B9A]
            md:block
          "
          />

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    relative
                    flex
                    flex-col
                    items-center
                    md:flex-row
                    ${
                      index % 2 === 0
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >
                  <div
                    className={`
                      w-full
                      md:w-[45%]
                      ${
                        index % 2 === 0
                          ? "md:text-right"
                          : "md:text-left"
                      }
                    `}
                  >
                    <div
                      className="
                      group
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                    >
                      <div
                        className="
                        mb-4
                        inline-flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#F3F1FC]
                        text-[#5B4B9A]
                      "
                      >
                        <Icon size={28} />
                      </div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div
                    className="
                    absolute
                    left-1/2
                    hidden
                    h-16
                    w-16
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-[#5B4B9A]
                    text-lg
                    font-bold
                    text-white
                    shadow-xl
                    md:flex
                  "
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#D8D2F0]
            bg-[#F8F6FF]
            px-6
            py-3
          "
          >
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <span className="font-medium text-slate-700">
              100% Placement Assistance Provided
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}