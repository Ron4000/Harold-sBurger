import type { Burger } from '../data/menuData';
import { Heart, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  burger: Burger;
  quantity: number;
  onQuantityChange: (burgerId: number, change: number) => void;
}

function ProductCard({ burger, quantity, onQuantityChange }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

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
        <button
          type="button"
          aria-label={isFavorite ? `Remove ${burger.title} from favorites` : `Add ${burger.title} to favorites`}
          aria-pressed={isFavorite}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => setIsFavorite((favorite) => !favorite)}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#d94c2c] shadow-sm transition hover:bg-white"
        >
          <Heart aria-hidden="true" className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-black tracking-tight text-[#2c1a16]">{burger.title}</h3>
        <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#5f514d]">{burger.description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-[#2d1d17] px-4 py-2 text-base font-bold text-[#fffaf7] shadow-sm">
          {burger.price}
        </span>
        <div className="flex items-center gap-2" aria-label={`${quantity} ${burger.title} ordered`}>
          <button
            type="button"
            aria-label={`Decrease ${burger.title} quantity`}
            title="Decrease quantity"
            disabled={quantity === 0}
            onClick={() => onQuantityChange(burger.id, -1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f5ede9] text-[#2d1d17] transition hover:bg-[#eadbd3] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus aria-hidden="true" className="h-4 w-4" />
          </button>
          <span className="min-w-5 text-center text-sm font-bold text-[#2d1d17]">{quantity}</span>
          <button
            type="button"
            aria-label={`Increase ${burger.title} quantity`}
            title="Increase quantity"
            onClick={() => onQuantityChange(burger.id, 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d94c2c] text-white transition hover:bg-[#bf3b1d]"
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
