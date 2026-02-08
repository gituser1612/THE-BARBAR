import React from 'react';

const SpaceSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-cream-bg relative" id="space">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Atmosphere</span>
                    <h2 className="text-4xl md:text-5xl font-black text-charcoal-text uppercase tracking-tight mb-6">The Space</h2>
                    <p className="text-slate-muted max-w-2xl font-light text-lg">
                        Designed for comfort. Built for conversation. A sanctuary where time slows down.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                    <div className="md:col-span-7 h-[400px] md:h-full relative overflow-hidden rounded-lg group">
                        <div
                            className="absolute inset-0 bg-cover bg-center moody-img transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDosO5slJnCciFQRZrCJbV6pKGwp8EngdDux0AowKQJFOZIKEHlQpUZDA7H2ncQ32nf5Too3muZKy94c9YDCm_xog4qvATG511kZ7a5V-wZZ4i_618dmNyquZpnHmyhIihGK5LLGf4I3jrbDEY1BF23EFWWinwb31fRPlk6JovjGV3Ux85g_gbFmtdACfeooBHr9K3O327JkaUIK1YDtfEr0e4Gg0ai4CpFxCjU6njq83q1RZzlpLUhgg5uaf__ZZqmIZ8cJ2Et5Kt')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <span className="text-white font-bold tracking-widest uppercase text-sm">Main Floor</span>
                        </div>
                    </div>
                    <div className="md:col-span-5 flex flex-col gap-6 h-full">
                        <div className="flex-1 relative overflow-hidden rounded-lg group h-[300px] md:h-auto">
                            <div
                                className="absolute inset-0 bg-cover bg-center moody-img transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJxRpQybB6YpZEEaPFnZELO59oL7atKH_vryhoKt2XgHVXEGQr-aG00oXGgIUVr9xnFN3N9TmVDRo9kpE9-IYhBjVCPPcjaVl8SP7A6b5tGOhbpK0-gIV_j_Wy-pfZ1jyOuQ4-Wzf7-6fzOxH3DjozHiG-tXRkdm80Mh-p4sfMN0MiqAHLRoDdwDSoyTLSkmsvaxScXJ0rV3jR6TX5BWSLFuHboYbFPELQPaO76muS93XqovaZAixNf43rePw-1tRxtdQ0FDV4j1H-')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <span className="text-white font-bold tracking-widest uppercase text-sm">Tools of Trade</span>
                            </div>
                        </div>
                        <div className="flex-1 relative overflow-hidden rounded-lg group h-[300px] md:h-auto">
                            <div
                                className="absolute inset-0 bg-cover bg-center moody-img transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3Dnc0R1P2H_ZAym4R9BVJQFO4LCJ-EKuHtrrRzTK-hF0wbxg_5Qgf-uV5imQVWcsC_a_EVfmvQSbpTOzVPoJOVvnV-NVDlypMSvMHgrc2zJxB9jYPyxQeWKRsexFevsiJ78T2yLYuF-EMpRSqaTrrIA-j9qO5qhHfQXj4v_74Vp-3Ey3u-S1f3u89e3vWbbo_JTpVwApRlgpLDqSXZA5IUz5ouXAwZFgV1MhkLHjuSXp9Mh-798kufMGRJNKKK78R95eEYzDm48D7')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <span className="text-white font-bold tracking-widest uppercase text-sm">Vintage Comfort</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpaceSection;
