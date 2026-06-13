import CourseGrid from "../components/courses/CourseGrid";
import Title from "../components/common/Title";
export default function CoursesPage() {
  return (
  <main className="pt-20">
    <Title/>
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold">
            Explore Courses
          </h1>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-xl
            text-slate-600
          "
          >
            Learn the most
            in-demand technologies
            from industry experts.
          </p>
        </div>
      </section>

      <CourseGrid />
    </main>
  );
}