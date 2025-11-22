import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = "plaintext", showLineNumbers = false }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code:", err);
        }
    };

    const lines = code.split("\n");

    return (
        <div className="group relative my-6 rounded-xl overflow-hidden border border-white/10 bg-[#1B2838]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#0D1B2A]/50">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A92A0]">
                    {language}
                </span>

                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1 rounded-md text-xs text-[#B0B8C1] hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                    {copied ? (
                        <>
                            <Check className="h-3 w-3" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="overflow-x-auto">
                <pre className="p-4 text-sm leading-relaxed">
                    <code className="text-[#B0B8C1] font-mono">
                        {showLineNumbers ? (
                            <table className="w-full border-collapse">
                                <tbody>
                                    {lines.map((line, index) => (
                                        <tr key={index}>
                                            <td className="pr-4 text-right text-[#8A92A0] select-none border-r border-white/5 w-12">
                                                {index + 1}
                                            </td>
                                            <td className="pl-4">
                                                {line || "\n"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            code
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
