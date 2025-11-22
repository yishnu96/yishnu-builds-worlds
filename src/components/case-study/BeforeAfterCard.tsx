import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface BeforeAfterCardProps {
    before: {
        title?: string;
        content: ReactNode;
        icon?: ReactNode;
    };
    after: {
        title?: string;
        content: ReactNode;
        icon?: ReactNode;
    };
}

const BeforeAfterCard = ({ before, after }: BeforeAfterCardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Before Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-[#243447] p-6 border-2 border-[#FF6B6B]/30 hover:border-[#FF6B6B]/60 transition-all duration-300"
            >
                {/* Red glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.08),transparent_70%)]" />
                </div>

                <div className="relative z-10">
                    {/* Before Label */}
                    <div className="flex items-center gap-2 mb-4">
                        {before.icon || <XCircle className="h-5 w-5 text-[#FF6B6B]" />}
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B6B]">
                            {before.title || "Before"}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="text-[#B0B8C1] leading-relaxed">
                        {before.content}
                    </div>
                </div>
            </motion.div>

            {/* Arrow Indicator (Desktop Only) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="rounded-full bg-[#0D1B2A] p-3 border-2 border-white/10">
                    <ArrowRight className="h-6 w-6 text-[#06D6A0]" />
                </div>
            </div>

            {/* After Card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-[#243447] p-6 border-2 border-[#06D6A0]/30 hover:border-[#06D6A0]/60 transition-all duration-300"
            >
                {/* Green glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,214,160,0.08),transparent_70%)]" />
                </div>

                <div className="relative z-10">
                    {/* After Label */}
                    <div className="flex items-center gap-2 mb-4">
                        {after.icon || <CheckCircle2 className="h-5 w-5 text-[#06D6A0]" />}
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#06D6A0]">
                            {after.title || "After"}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="text-[#B0B8C1] leading-relaxed">
                        {after.content}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BeforeAfterCard;
