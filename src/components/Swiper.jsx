import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper/swiper.css";
import { useEffect } from "react";

const imgContent = [
  {
    id: 1,
    name: "img1",
    img: "https://source.unsplash.com/random/900x700/?wifi",
    alt: "fruit",
  },
  {
    id: 2,
    name: "img2",
    img: "https://source.unsplash.com/random/900x700/?laptop",
    alt: "fruit",
  },
  {
    id: 3,
    name: "img3",
    img: "https://source.unsplash.com/random/900x700/?tablet",
    alt: "fruit",
  },
  {
    id: 4,
    name: "img4",
    img: "https://source.unsplash.com/random/900x700/?phone",
    alt: "fruit",
  },
];

export default function SwiperContent() {
  useEffect(() => {
    const nextSwiper = document.getElementsByClassName("swiper-button-next");
    const prevSwiper = document.getElementsByClassName("swiper-button-prev");
    const swiper = document.getElementById("swiper");
    swiper.addEventListener("mouseenter", () => {
      prevSwiper[0].style.display = "flex";
      nextSwiper[0].style.display = "flex";
    });
    swiper.addEventListener("mouseleave", () => {
      prevSwiper[0].style.display = "none";
      nextSwiper[0].style.display = "none";
    });
  }, []);

  return (
    <Swiper
      id="swiper"
      className="h-full mySwiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      autoplay
      loop
      pagination={{ clickable: true }}
    >
      {imgContent.map((item) => (
        <SwiperSlide
          key={item.id}
          className="flex bg-gray-200 rounded-xl text-center items-center overflow-hidden"
        >
          <img src={item.img} alt={item.alt} width={"100%"} height={"100%"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
