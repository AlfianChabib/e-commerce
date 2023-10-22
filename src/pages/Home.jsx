import Navbar from "../components/Navbar";
import SwiperContent from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="flex h-72 w-full rounded-xl mt-4">
          <SwiperContent />
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="text-xl font-semibold mb-2">Brands</h1>
          {/* list */}
          <div className="flex w-full gap-4">
            <div className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg">
              <div className="flex overflow-hidden w-40 h-28">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="samsung"
                />
              </div>
              <div className="flex flex-col w-36 justify-center px-2 py-2">
                <h2 className="text-lg font-semibold">Samsung</h2>
                <p className="text-sm">100 Items</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg">
              <div className="flex overflow-hidden w-40 h-28">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="samsung"
                />
              </div>
              <div className="flex flex-col w-36 justify-center px-2 py-2">
                <h2 className="text-lg font-semibold">Samsung</h2>
                <p className="text-sm">100 Items</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg">
              <div className="flex overflow-hidden w-40 h-28">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="samsung"
                />
              </div>
              <div className="flex flex-col w-36 justify-center px-2 py-2">
                <h2 className="text-lg font-semibold">Samsung</h2>
                <p className="text-sm">100 Items</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg">
              <div className="flex overflow-hidden w-40 h-28">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="samsung"
                />
              </div>
              <div className="flex flex-col w-36 justify-center px-2 py-2">
                <h2 className="text-lg font-semibold">Samsung</h2>
                <p className="text-sm">100 Items</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md overflow-hidden bg-white drop-shadow-lg">
              <div className="flex overflow-hidden w-40 h-28">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="samsung"
                />
              </div>
              <div className="flex flex-col w-36 justify-center px-2 py-2">
                <h2 className="text-lg font-semibold">Samsung</h2>
                <p className="text-sm">100 Items</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
