import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 mt-24 dark:border-zinc-800" role="contentinfo">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {year} Hong Eze. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          Built with{" "}
          <span className="text-zinc-500">Next.js, Tailwind CSS &amp; Framer Motion</span>
        </p>
      </Container>
    </footer>
  );
}
