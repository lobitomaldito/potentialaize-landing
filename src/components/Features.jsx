import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 px-6 bg-ghost text-graphite min-h-screen relative z-10 -mt-8 rounded-t-[3rem]" id="delivery">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-plasma mb-4">Core Competencies</h2>
                    <h3 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight">Functional excellence by design, delivered with precision.</h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <DiagnosticShuffler />
                    <TelemetryTypewriter />
                    <CursorProtocolScheduler />
                </div>
            </div>
        </section>
    );
}

// 1. Diagnostic Shuffler: "Strategic Advisory"
function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, title: 'Nordic-Led Consulting', desc: 'AI and Agentic AI strategy formulation and rigorous use-case identification.' },
        { id: 2, title: 'Human-Centric Models', desc: 'Operating models and governance frameworks that prioritize human potential.' },
        { id: 3, title: 'Executive Advisory', desc: 'Decision support and direct delivery leveraging trusted Nordic partners.' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="feature-card bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-graphite/5 flex flex-col h-[420px] relative overflow-hidden">
            <div className="mb-8">
                <h4 className="font-sans font-bold text-xl text-void mb-2">Strategic Advisory</h4>
                <p className="text-graphite/70 text-sm">Translating vision into actionable AI intelligence.</p>
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-end pb-4">
                {cards.map((card, i) => {
                    const isFirst = i === 0;
                    const isSecond = i === 1;
                    const isThird = i === 2;

                    return (
                        <div
                            key={card.id}
                            className="absolute w-full bg-ghost rounded-2xl p-5 border border-graphite/10 shadow-sm transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                            style={{
                                transform: `translateY(${isFirst ? '0px' : isSecond ? '-20px' : '-40px'}) scale(${isFirst ? 1 : isSecond ? 0.95 : 0.9})`,
                                zIndex: 3 - i,
                                opacity: isThird ? 0.5 : 1,
                            }}
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-plasma"></div>
                                <h5 className="font-sans font-semibold text-sm text-void">{card.title}</h5>
                            </div>
                            <p className="text-xs text-graphite/70 leading-relaxed font-mono">{card.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// 2. Telemetry Typewriter: "Agent & AI Delivery"
function TelemetryTypewriter() {
    const messages = [
        "Initializing seamless integration into enterprise landscapes...",
        "Deploying AI agents with enterprise-grade security...",
        "Scaling integrated delivery models...",
        "Project Management protocols active..."
    ];
    const [msgIndex, setMsgIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (typing) {
            if (charIndex < messages[msgIndex].length) {
                timeout = setTimeout(() => {
                    setCharIndex(c => c + 1);
                }, 40);
            } else {
                setTyping(false);
                timeout = setTimeout(() => {
                    setTyping(true);
                    setCharIndex(0);
                    setMsgIndex((idx) => (idx + 1) % messages.length);
                }, 2500);
            }
        }
        return () => clearTimeout(timeout);
    }, [charIndex, typing, msgIndex, messages]);

    return (
        <div className="feature-card bg-void text-ghost rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 flex flex-col h-[420px]">
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <h4 className="font-sans font-bold text-xl mb-2 text-white">Agent & AI Delivery</h4>
                    <p className="text-ghost/60 text-sm">Flawless execution from idea to operations.</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-plasma animate-pulse"></div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ghost/80">Live Feed</span>
                </div>
            </div>

            <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 font-mono text-sm leading-loose mt-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-void to-transparent z-10"></div>
                <div className="text-plasma mb-4 flex divide-x divide-white/20 text-xs">
                    <span className="pr-3">System</span>
                    <span className="px-3">Delivery</span>
                    <span className="pl-3 opacity-50">Log_01</span>
                </div>
                <div className="text-ghost/80 break-words">
                    <span className="text-plasma/50 mr-2">{'>'}</span>
                    {messages[msgIndex].substring(0, charIndex)}
                    <span className="inline-block w-2 bg-plasma animate-pulse ml-1">&nbsp;</span>
                </div>
            </div>
        </div>
    );
}

// 3. Cursor Protocol Scheduler: "Nearshore Enablement"
function CursorProtocolScheduler() {
    const container = useRef(null);
    const cursorRef = useRef(null);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const [activeDay, setActiveDay] = useState(3); // Default Wed

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Create a repeating timeline for the cursor interaction
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Starting pos
            tl.set(cursorRef.current, { x: 0, y: 100, opacity: 0, scale: 1 });

            // Move in
            tl.to(cursorRef.current, { x: 50, y: 20, opacity: 1, duration: 0.8, ease: "power2.out" })
                // Move to a day (simulate finding Wed)
                .to(cursorRef.current, { x: 120, y: -10, duration: 0.6, ease: "power2.inOut" })
                // Press
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                // Activate/Release
                .call(() => setActiveDay(3))
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                // Move to save
                .to(cursorRef.current, { x: 220, y: 100, duration: 0.8, delay: 0.2, ease: "power2.inOut" })
                // Press save
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                // Fade out
                .to(cursorRef.current, { opacity: 0, duration: 0.4, delay: 0.2 });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="feature-card bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-graphite/5 flex flex-col h-[420px] relative">
            <div className="mb-6">
                <h4 className="font-sans font-bold text-xl text-void mb-2">Nearshore Enablement</h4>
                <p className="text-graphite/70 text-sm">Iberian excellence meets Nordic governance.</p>
            </div>

            <div className="mt-auto relative pb-6 px-2">
                {/* Scheduler UI */}
                <div className="bg-ghost border border-graphite/10 rounded-xl p-4 mb-4">
                    <div className="text-xs font-mono text-graphite/50 mb-3 flex justify-between">
                        <span>Weekly Allocation</span>
                        <span>Capacity: 100%</span>
                    </div>
                    <div className="flex justify-between relative">
                        {days.map((day, idx) => (
                            <div
                                key={idx}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors duration-300
                  ${activeDay === idx ? 'bg-plasma text-void' : 'bg-white text-graphite border border-graphite/10'}
                `}
                            >
                                {day}
                            </div>
                        ))}

                        {/* The cursor */}
                        <div ref={cursorRef} className="absolute top-0 left-0 z-20 pointer-events-none drop-shadow-md origin-top-left" style={{ opacity: 0 }}>
                            <MousePointer2 className="text-void w-6 h-6 fill-white" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-void">Dedicated Squads</span>
                        <span className="text-[10px] text-graphite/50 font-mono">White-labeled models</span>
                    </div>
                    <div className="bg-void text-white text-[10px] px-4 py-2 rounded-full font-mono uppercase tracking-widest cursor-pointer hover:bg-graphite transition-colors border border-transparent">
                        Save
                    </div>
                </div>
            </div>
        </div>
    );
}
