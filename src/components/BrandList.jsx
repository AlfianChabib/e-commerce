import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brandList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samsung",
    items: 100,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1619430041588-7417ab2a04dc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Oppo",
    items: 200,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "iPhone",
    items: 50,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1655802851117-167cb4ebaf2c?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vivo",
    items: 80,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1624947216381-b994eb54e9b7?auto=format&fit=crop&q=80&w=1512&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Redmi",
    items: 90,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1590653956132-7124afce5a9d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Asus",
    items: 50,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1696877983046-7429e0a6a8f5?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Infinix",
    items: 60,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1533156430273-a2cf57b09495?auto=format&fit=crop&q=80&w=1481&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sony",
    items: 30,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1631911975070-e4e7c8a34c01?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Huawei",
    items: 20,
  },
];

export default function BrandList() {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    swiperRef.current.swiper.on("slideChange", () => {
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    });
  }, [swiperRef]);

  console.log(activeIndex);

  return (
    <div className="flex mt-8 items-center">
      <div
        className={`${
          activeIndex > 0 ? "absolute -translate-x-full opacity-0" : ""
        } flex flex-col absolute md:h-56 h-52 justify-center pl-6 md:w-52 w-40 bg-gradient-to-br from-gray-400 to-gray-600 transition-all duration-300 rounded-xl`}
      >
        <h1 className="md:text-xl text-sm  text-white font-semibold mb-2">
          Brand List
        </h1>
      </div>
      <span
        className={`${
          activeIndex > 0 ? "w-0" : "w-28 md:w-36"
        } transition-all duration-300`}
      ></span>
      <Swiper
        ref={swiperRef}
        className={`w-full transition-all duration-300 py-5 px-3`}
        modules={[Navigation]}
        // width={200}
        spaceBetween={20}
        slidesOffsetAfter={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          440: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        navigation={true}
      >
        {brandList.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg group hover:scale-110  transition-all duration-300 "
          >
            <div className="overflow-hidden h-28">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-all duration-1000"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col w-full justify-center px-2 py-2">
              <h2 className="md:text-lg text-sm font-semibold">{item.name}</h2>
              <p className="md:text-sm text-xs">{item.items} product</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
