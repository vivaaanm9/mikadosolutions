import { STATS } from "../../utils/constants";
import Counter from "../ui/Counter";
export default function PlacementStats() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
        "
        >
          {STATS.map((item) => (
            <div
              key={item.label}
              className="
              rounded-3xl
              bg-white
              p-8
              text-center
              shadow-lg
            "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-[#5B4B9A]
              "
              >
                <Counter target={item.value} time={1} inc={item.inc} />
              </h3>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}