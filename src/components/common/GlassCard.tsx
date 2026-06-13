import type { ReactNode } from "react";

import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        `
        rounded-3xl
        border
        border-white/30
        bg-white/70
        p-6
        shadow-xl
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        `,
        className
      )}
    >
      {children}
    </div>
  );
}