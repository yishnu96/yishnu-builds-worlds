import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
    period: string;
    title: string;
    description?: string;
}

interface TimelineProps {
    items: TimelineItem[];
    orientation?: "horizontal" | "vertical";
}

const Timeline = ({ items, orientation = "horizontal" }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Determine orientation based on screen size
    const isHorizontal = orientation === "horizontal";

    return (
        <div ref={ref} className="my-12">
            {/* Desktop: Horizontal Timeline */}
            <div className={`hidden md:block ${!isHorizontal ? 'md:hidden' : ''}`}>
                <div className="relative">
                    {/* Timeline Line */}
                    <motion.div
                        className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00] rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />

                    {/* Timeline Items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                                className="relative"
                            >
                                {/* Milestone Dot */}
                                <motion.div
                                    className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#7209B7] to-[#06D6A0] border-2 border-[#0D1B2A] shadow-[0_0_20px_rgba(114,9,183,0.5)]"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2, type: "spring" }}
                                />

                                {/* Content */}
                                <div className="pt-16 text-center">
                                    <div className="text-xs uppercase tracking-[0.3em] text-[#7209B7] font-bold mb-2">
                                        {item.period}
                                    </div>
                                    <div className="text-base font-display text-white mb-2">
                                        {item.title}
                                    </div>
                                    {item.description && (
                                        <div className="text-sm text-[#B0B8C1]">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className={`md:hidden ${isHorizontal ? '' : 'md:block'}`}>
                <div className="relative pl-8">
                    {/* Vertical Timeline Line */}
                    <motion.div
                        className="absolute left-2 top-0 w-1 bg-gradient-to-b from-[#7209B7] via-[#06D6A0] to-[#F77F00] rounded-full"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                                className="relative"
                            >
                                {/* Milestone Dot */}
                                <motion.div
                                    className="absolute -left-[22px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#7209B7] to-[#06D6A0] border-2 border-[#0D1B2A] shadow-[0_0_20px_rgba(114,9,183,0.5)]"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2, type: "spring" }}
                                />

                                {/* Content */}
                                <div>
                                    <div className="text-xs uppercase tracking-[0.3em] text-[#7209B7] font-bold mb-1">
                                        {item.period}
                                    </div>
                                    <div className="text-base font-display text-white mb-1">
                                        {item.title}
                                    </div>
                                    {item.description && (
                                        <div className="text-sm text-[#B0B8C1]">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
