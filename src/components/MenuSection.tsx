import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { menuData } from '../data/menuData';

interface MenuSectionProps {
  cartQuantities: Record<number, number>;
  onQuantityChange: (burgerId: number, change: number) => void;
}

function MenuSection({ cartQuantities, onQuantityChange }: MenuSectionProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d94c2c]">Popular menu</p>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#2d1d17] md:text-4xl">
          Get your burger now
        </h2>
      </div>

      <div className="menu-slider-shell">
        <button
          type="button"
          aria-label="Previous burger"
          className="menu-slider-arrow"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="menu-swiper"
        >
          {menuData.map((burger) => (
            <SwiperSlide key={burger.id}>
              <ProductCard
                burger={burger}
                quantity={cartQuantities[burger.id] ?? 0}
                onQuantityChange={onQuantityChange}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Next burger"
          className="menu-slider-arrow"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default MenuSection;
