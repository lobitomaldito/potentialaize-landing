export default function Footer() {
    return (
        <footer className="bg-void text-ghost rounded-t-[4rem] px-6 pt-24 pb-8 relative z-20 mt-[-4rem]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5 flex flex-col">
                        <a href="#" className="mb-6 flex items-center hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="PotentialAize Logo" className="h-10 md:h-12 opacity-90" />
                        </a>
                        <p className="text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
                            Advisory, Delivery, and Nearshore Operations — Unified by One Vision. Human-Centric AI for the Nordics.
                        </p>

                        <div className="mt-auto flex items-center space-x-3 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80] animate-pulse"></div>
                            <span className="font-mono text-[10px] tracking-widest uppercase text-white/70">System Operational</span>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col space-y-4">
                        <h5 className="font-mono text-xs uppercase tracking-widest text-plasma mb-4">Core Competencies</h5>
                        <a href="#advisory" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Strategic Advisory</a>
                        <a href="#delivery" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Agent & AI Delivery</a>
                        <a href="#nearshore" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Nearshore Enablement</a>
                    </div>

                    <div className="md:col-span-3 flex flex-col space-y-4">
                        <h5 className="font-mono text-xs uppercase tracking-widest text-plasma mb-4">Connect</h5>
                        <a href="#" className="text-white/60 hover:text-white transition-colors text-sm w-fit">LinkedIn</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Contact Us</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Privacy Policy</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
                    <p>© 2025 PotentialAize AS. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 font-mono">From Idea to Operations – Human-Centric by Design</p>
                </div>
            </div>
        </footer>
    );
}
