import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LinesAndDots from './LinesAndDots';

export default function Hero() {
    const container = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .from('.hero-word', {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: 'power3.out'
                })
                .from('.hero-cta', {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=0.6');
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full bg-void flex items-end overflow-hidden pb-20 md:pb-32">
            {/* Background Animation & Gradient */}
            <div className="absolute inset-0 z-0 bg-void">
                <LinesAndDots />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent"></div>
            </div>

            {/* Content pushes to bottom-left third */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col text-ghost">
                    <h1 className="flex flex-col mb-10">
                        <span className="hero-word font-sans font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight text-white/90">
                            Potential meets
                        </span>
                        <span className="hero-word font-serif italic text-7xl md:text-8xl lg:text-[10rem] text-plasma leading-[0.9] mt-4 pr-10 self-start">
                            Intelligence.
                        </span>
                    </h1>

                    <div className="hero-cta">
                        <p className="font-mono text-white/60 text-sm md:text-base mb-8 max-w-sm">
                            Unleash your company's potential with AI. Human-Centric AI for the Nordics.
                        </p>
                        <button className="magnetic-btn bg-plasma text-void px-8 py-4 rounded-full font-medium text-lg w-fit transition-colors hover:bg-white">
                            <span className="bg-slider bg-white"></span>
                            <span className="relative z-10">Book a meeting</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
