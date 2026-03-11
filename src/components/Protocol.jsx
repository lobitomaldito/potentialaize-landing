import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Strategic Identification',
        desc: 'Nordic-led consulting to identify and formulate rigorous, human-centric AI use cases.',
        AnimComponent: MotifRotating
    },
    {
        num: '02',
        title: 'Model Integration',
        desc: 'Seamlessly deploying AI agents into existing enterprise applications with high security.',
        AnimComponent: MotifLaser
    },
    {
        num: '03',
        title: 'Nearshore Execution',
        desc: 'Leveraging Iberian engineering squads under Nordic governance to deliver scalable solutions.',
        AnimComponent: MotifWaveform
    }
];

export default function Protocol() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Last card doesn't scale down

                const nextCard = cards[i + 1];

                gsap.to(card, {
                    scrollTrigger: {
                        trigger: nextCard,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    },
                    scale: 0.9,
                    opacity: 0.5,
                    filter: 'blur(10px)',
                    ease: 'none'
                });
            });

            // Pin each card so they stack
            cards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: container.current,
                    end: 'bottom bottom',
                });
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="advisory" className="relative w-full bg-ghost text-graphite pb-[100vh]">
            <div className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
                <h2 className="text-sm font-mono tracking-widest uppercase text-plasma mb-4">Protocol</h2>
                <h3 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-void">Unified by One Vision</h3>
            </div>

            <div className="relative w-full">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="protocol-card min-h-screen w-full flex items-center justify-center p-6 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] border-t border-graphite/5"
                        style={{ backgroundColor: ['#FAF8F5', '#F5F5F0', '#EAEADF'][i], zIndex: i + 1 }}
                    >
                        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col">
                                <span className="text-xs font-mono font-bold tracking-widest text-graphite/40 mb-2">STEP {step.num}</span>
                                <h4 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-void mb-6 tracking-tight">{step.title}</h4>
                                <p className="text-lg text-graphite/70 font-sans max-w-md leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-[3rem] shadow-xl border border-graphite/5 flex items-center justify-center relative overflow-hidden">
                                    <step.AnimComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Visual Motif 1: Rotating Geometric (Double Helix/Concentric)
function MotifRotating() {
    const ref = useRef(null);
    useEffect(() => {
        gsap.to(ref.current, { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
    }, []);
    return (
        <div ref={ref} className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 border-[1px] border-plasma rounded-full opacity-60"></div>
            <div className="absolute inset-2 border-[1px] border-void rounded-full opacity-40" style={{ transform: 'rotate(45deg)' }}></div>
            <div className="absolute inset-4 border-[1px] border-plasma/40 rounded-full" style={{ borderStyle: 'dashed' }}></div>
            <div className="w-4 h-4 bg-void rounded-full animate-pulse"></div>
        </div>
    );
}

// Visual Motif 2: Scanning Laser
function MotifLaser() {
    const ref = useRef(null);
    useEffect(() => {
        gsap.to(ref.current, { y: 160, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    }, []);
    return (
        <div className="relative w-40 h-40 bg-graphite/[0.03] rounded-xl border border-graphite/10 overflow-hidden">
            <div className="absolute inset-0 flex flex-wrap opacity-20">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-[12.5%] h-[12.5%] border-r border-b border-void/20"></div>
                ))}
            </div>
            <div ref={ref} className="absolute top-0 left-0 w-full h-[2px] bg-plasma shadow-[0_0_10px_#C9A84C] z-10"></div>
        </div>
    );
}

// Visual Motif 3: Pulsing Waveform
function MotifWaveform() {
    const ref = useRef(null);
    useEffect(() => {
        gsap.to(ref.current, { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'power2.inOut' });
    }, []);
    return (
        <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-80">
            <path
                d="M 0 30 L 20 30 L 30 10 L 40 50 L 50 20 L 60 40 L 70 10 L 80 50 L 90 20 L 100 30 L 120 30"
                fill="transparent"
                stroke="#0D0D12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                ref={ref}
                d="M 0 30 L 20 30 L 30 10 L 40 50 L 50 20 L 60 40 L 70 10 L 80 50 L 90 20 L 100 30 L 120 30"
                fill="transparent"
                stroke="#C9A84C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                strokeDashoffset="300"
            />
        </svg>
    );
}
