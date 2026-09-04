function Footer() {
  return (
    <footer id="contact" className="bg-[#2d1d17] py-8 text-[#f5ede9]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm md:flex-row md:text-left lg:px-8">
        <div>
          <span className="text-lg font-black tracking-[0.18em] text-[#f7f1ee]">Harold's BURGER</span>
        </div>
        <div className="flex items-center gap-6 text-[#f5ede9]/80">
          <a href="#about" className="transition hover:text-white">ABOUT</a>
          <a href="#menu" className="transition hover:text-white">OUR MENU</a>
          <a href="#shop" className="transition hover:text-white">SHOP</a>
        </div>
        <p className="text-[#f5ede9]/70">Harold's Burger</p>
      </div>
    </footer>
  );
}

export default Footer;
