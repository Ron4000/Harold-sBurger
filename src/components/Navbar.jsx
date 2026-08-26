import { ShoppingBag } from 'lucide-react';

function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-[#f5ede9]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5b33d] text-sm font-black text-[#2e1d16] shadow-sm">
            T
          </div>
          <span className="text-lg font-black tracking-[0.18em] text-[#2d1d17]">TASTY BURGER</span>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wider text-gray-800 md:flex md:gap-8">
            <a href="#about" className="transition-colors hover:text-red-600">ABOUT</a>
            <a href="#menu" className="transition-colors hover:text-red-600">OUR MENU</a>
            <a href="#shop" className="transition-colors hover:text-red-600">SHOP</a>
            <a href="#contact" className="transition-colors hover:text-red-600">CONTACT</a>
          </div>

          <button
            type="button"
            aria-label="Shopping bag with 2 items"
            className="relative inline-flex items-center justify-center rounded-full bg-[#fff9f5] p-3 shadow-sm ring-1 ring-[#e9d5c3]"
          >
            <ShoppingBag aria-hidden="true" className="h-5 w-5 text-[#2d1d17]" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
