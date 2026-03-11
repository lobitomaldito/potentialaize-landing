import React from 'react';

export default function LinesAndDots() {
    const sectors = new Array(60);
    const radius = 4.25; // in ems

    for (let i = 0; i < sectors.length; ++i) {
        const key = `sector-${i + 1}`;
        const fraction = i / sectors.length;
        const sectorStyle = {
            animationDelay: `calc(var(--anim-dur) * ${-fraction})`,
            transform: `rotate(${-fraction * 360}deg) translateY(${radius}em)`
        };

        sectors[i] = (
            <div
                key={key}
                className="lines-and-dots__sector"
                style={sectorStyle}
            >
                <div className="lines-and-dots__line"></div>
                <div className="lines-and-dots__dot"></div>
                <div className="lines-and-dots__dot"></div>
            </div>
        );
    }

    return (
        <div className="lines-and-dots-container absolute inset-0 z-0 flex items-center justify-center opacity-60">
            <div className="lines-and-dots text-plasma mix-blend-screen scale-150 md:scale-[2] lg:scale-[2.5] translate-x-1/4 -translate-y-1/4">
                {sectors}
            </div>
        </div>
    );
}
