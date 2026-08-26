function ProductCard({ burger }) {
  return (
    <article className="group rounded-[28px] bg-[#fffdfd] p-4 shadow-[0_18px_40px_rgba(116,70,49,0.08)] ring-1 ring-[#f2e6df] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-[22px] bg-[#f5efe9]">
        {burger.image ? (
          <img
            src={burger.image}
            alt={burger.title}
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-52 w-full items-center justify-center bg-gradient-to-br from-[#efe6dd] to-[#f8f1ee] text-sm font-bold uppercase tracking-[0.22em] text-[#8d736b]">
            Image Here
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-black tracking-tight text-[#2c1a16]">{burger.title}</h3>
        <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#5f514d]">{burger.description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-[#2d1d17] px-4 py-2 text-base font-bold text-[#fffaf7] shadow-sm">
          {burger.price}
        </span>
        <button
          type="button"
          className="rounded-full bg-[#d94c2c] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#bf3b1d]"
        >
          Add
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
