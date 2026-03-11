import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ghost text-graphite selection:bg-plasma/30 selection:text-void flex flex-col relative w-full overflow-x-hidden">
      {/* Global Noise Overlay */}
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Navbar />

      <main className="w-full relative">
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

export default App;
