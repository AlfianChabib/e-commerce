import BrandList from "../components/BrandList";
import Navbar from "../components/Navbar";
import SwiperContent from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="flex md:h-72 sm:h-64 h-40 w-full rounded-xl mt-4">
          <SwiperContent />
        </div>
        <BrandList />
      </main>
    </>
  );
}
