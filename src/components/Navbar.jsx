import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Morph when scrolled past 100px or hero section
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-full px-6 py-4 flex items-center justify-between
        ${scrolled ? 'bg-ghost/80 backdrop-blur-xl shadow-lg border border-graphite/10 text-graphite' : 'bg-transparent text-ghost'}
      `}
        >
            <div className="flex items-center space-x-2">
                <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
                    <img src="/logo.png" alt="PotentialAize Logo" className="h-8 md:h-10" />
                </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-sans">
                <a href="#advisory" className="hover-lift">Advisory</a>
                <a href="#delivery" className="hover-lift">AI Delivery</a>
                <a href="#nearshore" className="hover-lift">Nearshore</a>
                <a href="#philosophy" className="hover-lift">Philosophy</a>
            </div>

            <div className="hidden md:flex items-center">
                <button className="magnetic-btn bg-plasma text-void px-6 py-2 rounded-full font-medium">
                    <span className="bg-slider bg-white/20"></span>
                    <span className="relative z-10">Book a meeting</span>
                </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-void text-ghost rounded-3xl p-6 flex flex-col space-y-4 shadow-2xl border border-white/10 md:hidden">
                    <a href="#advisory" onClick={() => setMobileMenuOpen(false)}>Advisory</a>
                    <a href="#delivery" onClick={() => setMobileMenuOpen(false)}>AI Delivery</a>
                    <a href="#nearshore" onClick={() => setMobileMenuOpen(false)}>Nearshore</a>
                    <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
                    <button className="bg-plasma text-void px-6 py-3 rounded-full font-medium w-full mt-4">
                        Book a meeting
                    </button>
                </div>
            )}
        </nav>
    );
}
