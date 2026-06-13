interface CurriculumProps {
  topics: string[];
}

export default function Curriculum({
  topics,
}: CurriculumProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic}
          className="
          rounded-2xl
          bg-white
          p-5
          shadow-md
        "
        >
          {topic}
        </div>
      ))}
    </div>
  );
}