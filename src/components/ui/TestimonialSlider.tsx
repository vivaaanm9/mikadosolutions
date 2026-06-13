import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../../data/testimonials";

export default function TestimonialSlider() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Success Stories
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map(
            (testimonial) => (
              <SwiperSlide
                key={testimonial.id}
              >
                
                <div
                  className="
                  mx-auto
                  max-w-3xl
                  rounded-3xl
                  bg-white
                  p-10
                  shadow-xl
                "
                >
                  <p
                    className="
                    text-xl
                    text-slate-700
                  "
                  >
                    "
                    {testimonial.review}
                    "
                  </p>

                  <div className="mt-8">
                    <h4 className="font-bold">
                      {testimonial.name}
                    </h4>

                    <p className="text-slate-500">
                      {testimonial.role}
                    </p>

                    <p className="text-[#5B4B9A]">
                      {
                        testimonial.company
                      }
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}