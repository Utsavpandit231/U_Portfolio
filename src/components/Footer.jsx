import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 grid grid-cols-3 items-center">
            {/* Empty div to balance the grid for centering */}
            <div />

            {/* Centered Text */}
            <p className="text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} All rights reserved.
            </p>

            {/* Right-aligned Arrow */}
            <div className="flex justify-end">
                <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                    <ArrowUp />
                </a>
            </div>
        </footer>
    );
};