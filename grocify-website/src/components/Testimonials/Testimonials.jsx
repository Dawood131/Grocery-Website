import React, { useRef } from "react";
import Headings from "../Headings/Headings";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast.",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "As a chef, quality ingredients are everything. FreshBasket is my go-to store for all grocery needs. ",
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Shopping online with FreshBasket has saved me so much time. Always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    review:
      "Excellent service and top-quality products. I rely on FreshBasket every week and they never disappoint!",
  },
  {
    id: 5,
    name: "Sophia Ali",
    role: "Nutritionist",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    review:
      "As a nutritionist, I value fresh produce. FreshBasket always provides premium quality vegetables and fruits.",
  },
  {
    id: 6,
    name: "Daniel Lee",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    review:
      "Very reliable and affordable. FreshBasket makes grocery shopping stress-free!. FreshBasket is my go-to store for all grocery needs. ",
  },
];

const Testimonials = () => {
  const swiperRef = useRef();

  return (
    <section className="bg-zinc-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-20">
        {/* Heading */}
        <div className="w-fit mb-6">
          <Headings highlight="Customers" heading="Saying" />
        </div>

        {/* Buttons above cards */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-orange-500 text-black hover:text-white transition"
            >
              <span className="mb-2 text-4xl">‹</span>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-orange-500  transition text-black hover:text-white"
            >
              <span className="mb-2 text-4xl">›</span>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          speed={600}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col">
                {/* Top */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-zinc-600">{item.role}</p>
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Review */}
                <p className="text-zinc-600 mt-4 flex-1">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
