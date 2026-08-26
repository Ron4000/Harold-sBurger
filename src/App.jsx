import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f1ee] text-[#2d1d17]">
      <Navbar />
      <main>
        <HeroBanner />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
