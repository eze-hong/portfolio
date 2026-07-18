import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-zinc-200 text-zinc-700 border-transparent dark:bg-zinc-800 dark:text-zinc-200",
  outline: "border-zinc-300 text-zinc-500 bg-transparent dark:border-zinc-700 dark:text-zinc-400",
  muted: "bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-500 dark:border-zinc-800",
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
