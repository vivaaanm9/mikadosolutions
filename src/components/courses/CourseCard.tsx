import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function CourseCard({
  title,
  description,
  slug,
}: CourseCardProps) {
  return (
    <Link
      to={`/courses/${slug}`}
      className="
        group
        block
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-2xl
        hover:shadow-[#5B4B9A]
      "
    >
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          font-medium
          text-[#5B4B9A]
        "
      >
        Learn More

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        />
      </div>
    </Link>
  );
}