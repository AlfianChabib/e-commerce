import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="container lg:block bg-white">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-medium text-accent">Logo</h1>
        <form className="relative w-full max-w-[500px] items-center">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-2 rounded-full w-full"
            type="text"
            name="search product"
            placeholder="Search Product.."
          />
          <BiSearch
            className="absolute top-0 right-0 my-2 mr-5 text-gray-400"
            size={24}
          />
        </form>
        <div className="flex gap-4">
          <button className="p-2 relative rounded-full items-center border border-accentDark">
            <AiOutlineShoppingCart size={20} />
            <span className="absolute text-xs leading-4 text-white px-[4px] py-[2px] font-semibold bg-accent rounded-lg text-center -top-1 -right-2">
              9
            </span>
          </button>
          <button className="p-2 rounded-full items-center border border-accentDark">
            <AiOutlineUser size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
