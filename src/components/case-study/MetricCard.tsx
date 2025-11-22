import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MetricCardProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
    delay?: number;
}

const MetricCard = ({ value, label, icon, delay = 0 }: MetricCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (!isInView) return;

        // Extract number from value string
        const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

        if (isNaN(numericValue)) {
            // If not a number, just display the value as-is
            setDisplayValue(value);
            return;
        }

        // Animate the counter
        const controls = animate(0, numericValue, {
            duration: 2,
            delay,
            ease: "easeOut",
            onUpdate: (latest) => {
                // Reconstruct the value with original formatting
                const formatted = Math.round(latest).toLocaleString("en-IN");
                const suffix = value.replace(/[0-9,]/g, "");
                setDisplayValue(formatted + suffix);
            },
        });

        return () => controls.stop();
    }, [isInView, value, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay }}
            className="group relative overflow-hidden rounded-xl bg-[#243447] p-5 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300"
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                {icon && (
                    <div className="text-[#FFD700] mb-2">
                        {icon}
                    </div>
                )}

                <div className="text-3xl md:text-4xl font-display font-bold text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]">
                    {displayValue}
                </div>

                <div className="text-sm uppercase tracking-[0.2em] text-[#B0B8C1]">
                    {label}
                </div>
            </div>
        </motion.div>
    );
};

export default MetricCard;
