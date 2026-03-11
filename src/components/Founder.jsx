import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.founder-content', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.founder-image', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out'
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-24 md:py-32 px-6 bg-void text-ghost relative z-20 border-t border-white/5" id="founder">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Image Side */}
                <div className="founder-image relative">
                    <div className="absolute inset-0 bg-plasma opacity-20 blur-[100px] rounded-full"></div>
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(165,143,255,0.1)]">
                        {/* 
                          Important: The user needs to place `diego.jpg` in the public folder. 
                          We use a fallback background color just in case it takes a moment to load.
                        */}
                        <img
                            src="/diego.jpg"
                            alt="Diego MacKee - Founder"
                            className="w-full h-full object-cover grayscale-[20%] contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"></div>
                    </div>
                    {/* Decorative UI elements */}
                    <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-widest text-plasma bg-void/80 backdrop-blur px-3 py-1.5 rounded border border-white/10">
                        ID: CEO_NM_01
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col">
                    <div className="founder-content mb-8">
                        <Quote className="text-plasma w-10 h-10 mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6 tracking-tight">
                            "The true power of AI isn't in replacing human ingenuity, but in <span className="text-plasma">amplifying it</span> to solve our most complex challenges."
                        </h2>
                    </div>

                    <div className="founder-content font-mono text-sm text-white/50 leading-relaxed mb-10 max-w-lg">
                        <p className="mb-4">
                            At PotentialAize, we believe the next frontier of technological evolution is fundamentally human-centric. We are building the architecture that bridges raw computational intelligence with Nordic operational excellence.
                        </p>
                        <p>
                            Our mission is to architect systems that don't just calculate, but elevate.
                        </p>
                    </div>

                    <div className="founder-content mt-auto">
                        <div className="h-px w-12 bg-plasma mb-4"></div>
                        <h4 className="font-sans font-bold text-xl text-white">Diego MacKee</h4>
                        <p className="font-mono text-xs uppercase tracking-widest text-plasma mt-1">Founder & Managing Partner</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
