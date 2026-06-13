
export default function Roadmap() {
  const roadmap = [
    "Core Java",
    "Advanced Java",
    "Spring",
    "Spring Boot",
    "Microservices",
    "React",
    "Docker",
    "AWS",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Learning Roadmap
        </h2>

        <div
          className="
          grid
          gap-6
          text-[#5B4B9A]
          md:grid-cols-4
        "
        >
          {roadmap.map((item) => (
            <div
              key={item}
              className="
              rounded-3xl
              bg-white
              p-6
              hover:-translate-y-1
              hover:border-black
              hover:shadow-xl
              hover:shadow-[#5B4B9A]
              text-center
              shadow-lg
            "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}