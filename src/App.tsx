import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  const [cartQuantities, setCartQuantities] = useState<Record<number, number>>({});

  const updateQuantity = (burgerId: number, change: number) => {
    setCartQuantities((currentQuantities) => {
      const nextQuantity = Math.max(0, (currentQuantities[burgerId] ?? 0) + change);

      return {
        ...currentQuantities,
        [burgerId]: nextQuantity,
      };
    });
  };

  const cartItemCount = Object.values(cartQuantities).reduce((total, quantity) => total + quantity, 0);

  return (
    <div className="min-h-screen bg-[#f7f1ee] text-[#2d1d17]">
      <Navbar cartItemCount={cartItemCount} />
      <main>
        <HeroBanner />
        <MenuSection cartQuantities={cartQuantities} onQuantityChange={updateQuantity} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
