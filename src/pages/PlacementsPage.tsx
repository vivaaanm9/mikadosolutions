import PlacementStats from "../components/placements/PlacementStats";
import TestimonialSlider from "../components/ui/TestimonialSlider";

export default function PlacementsPage() {
  return (
    <main className="pt-20">
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold">
            Placement Success
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Helping students build
            successful careers.
          </p>
        </div>
      </section>

      <PlacementStats />

      <TestimonialSlider />
    </main>
  );
}