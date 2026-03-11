export default function Cta() {
    return (
        <section className="py-32 bg-ghost text-center px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-void text-ghost rounded-[3rem] p-12 md:p-24 shadow-2xl overflow-hidden relative border border-graphite/10">
                <div className="absolute inset-0 z-0 opacity-10 blur-xl pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-plasma rounded-full mix-blend-screen filter animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-plasma rounded-full mix-blend-screen filter animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 tracking-tight text-white">
                        Ready to unleash<br />
                        <span className="font-serif italic text-plasma font-normal">your potential?</span>
                    </h2>
                    <p className="text-graphite/60 font-mono text-sm md:text-base max-w-lg mb-12">
                        Schedule a consultation with our Nordic-led execution squad.
                    </p>

                    <button className="magnetic-btn bg-plasma text-void px-10 py-5 rounded-full font-medium text-lg lg:text-xl w-fit transition-colors hover:bg-white shadow-[0_0_40px_rgba(201,168,76,0.3)]">
                        <span className="bg-slider bg-white"></span>
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Book a meeting</span>
                            <span>→</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
