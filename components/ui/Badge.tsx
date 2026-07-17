import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-zinc-800 text-zinc-200 border-transparent",
  outline: "border-zinc-700 text-zinc-400 bg-transparent",
  muted: "bg-zinc-900 text-zinc-500 border-zinc-800",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
