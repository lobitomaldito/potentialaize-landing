import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Background parallax
            gsap.to('.parallax-bg', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y: '20%',
                ease: 'none',
            });

            // Text reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                }
            });

            tl.from('.phil-line-1', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.phil-line-2', {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                }, '-=0.6');
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="philosophy" className="relative w-full py-40 bg-void text-ghost overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80"
                    alt="Dark dynamic geometry"
                    className="parallax-bg w-full h-[120%] object-cover opacity-20 transform -translate-y-[10%]"
                />
                <div className="absolute inset-0 bg-void/70"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
                <h2 className="text-sm font-mono tracking-widest uppercase text-plasma mb-16 opacity-80">The Manifesto</h2>

                <div ref={textRef1} className="phil-line-1 text-2xl md:text-3xl font-sans font-medium text-white/50 mb-8 max-w-2xl">
                    Most AI adoption focuses on: <span className="text-white">generic automation.</span>
                </div>

                <div ref={textRef2} className="phil-line-2 text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight">
                    We focus on: <br />
                    <span className="font-serif italic text-plasma">human-centric intelligence.</span>
                </div>
            </div>
        </section>
    );
}
