const timeline = [
  "Training Started",
  "Projects Completed",
  "Mock Interviews",
  "Resume Building",
  "Placement Drive",
  "Job Offer",
];

export default function SuccessTimeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Placement Journey
        </h2>

        <div className="space-y-10">
          {timeline.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-8"
            >
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#5B4B9A]
                text-white
              "
              >
                {index + 1}
              </div>

              <div
                className="
                rounded-2xl
                bg-white
                p-6
                shadow-lg
              "
              >
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}