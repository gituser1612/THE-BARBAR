import React from 'react';

const ServiceItem = ({ title, price, description }) => (
    <div className="group">
        <div className="flex items-baseline justify-between border-b border-slate-200 pb-2 mb-2 relative">
            <h3 className="text-lg font-bold text-charcoal-text uppercase tracking-wide group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex-grow mx-4 border-b border-dotted border-slate-300 relative top-[-4px]"></div>
            <span className="text-xl font-bold text-primary">{price}</span>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></div>
        </div>
        <p className="text-sm text-slate-muted flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary">check</span>
            {description}
        </p>
    </div>
);

const ServicesSection = () => {
    return (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white" id="services">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Menu</span>
                        <h2 className="text-4xl md:text-5xl font-black text-charcoal-text uppercase tracking-tight">Our Craft</h2>
                    </div>
                    <p className="text-slate-muted max-w-md text-right md:text-left hidden md:block">
                        Meticulous attention to detail. Every cut, shave, and trim is executed with surgical precision.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
                    <div className="space-y-10">
                        <ServiceItem
                            title="Signature Cut"
                            price="$55"
                            description="Hot towel finish, straight razor line-up, styling consultation."
                        />
                        <ServiceItem
                            title="Beard Sculpt"
                            price="$35"
                            description="Razor edging, hot towel, beard oil treatment."
                        />
                        <ServiceItem
                            title="Grey Blending"
                            price="$45"
                            description="Natural looking camouflage for grey hair."
                        />
                    </div>
                    <div className="space-y-10">
                        <ServiceItem
                            title="The Royal Shave"
                            price="$45"
                            description="Pre-shave oil, hot towel wrap, face massage, aftershave balm."
                        />
                        <ServiceItem
                            title="Head Shave"
                            price="$40"
                            description="Hot towel, straight razor finish, scalp moisturizer."
                        />
                        <ServiceItem
                            title="Father & Son"
                            price="$90"
                            description="Combined signature cuts for the next generation."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
