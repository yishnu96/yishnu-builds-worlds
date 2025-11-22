import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    currentPage: string;
}

/**
 * Breadcrumb navigation component
 * Format: Home > Work > [Project Name]
 */
const Breadcrumbs = ({ items, currentPage }: BreadcrumbsProps) => {
    const defaultItems: BreadcrumbItem[] = [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/#case-studies' },
    ];

    const breadcrumbItems = items || defaultItems;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm"
        >
            <ol className="flex items-center gap-2">
                {breadcrumbItems.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        <Link
                            to={item.href}
                            className="flex items-center gap-1.5 text-[#B0B8C1] hover:text-[#7209B7] transition-colors"
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {index === 0 && <Home className="h-3.5 w-3.5" />}
                            <span>{item.label}</span>
                        </Link>
                        <ChevronRight className="h-3.5 w-3.5 text-[#8A92A0]" />
                    </li>
                ))}
                <li>
                    <span className="text-[#7209B7] font-medium" aria-current="page">
                        {currentPage}
                    </span>
                </li>
            </ol>
        </motion.nav>
    );
};

export default Breadcrumbs;
