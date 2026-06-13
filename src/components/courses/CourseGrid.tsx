import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={
                course.description
              }
              slug={course.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}