import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 mt-24" role="contentinfo">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} Jungmin Hong. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">
          Built with{" "}
          <span className="text-zinc-500">Next.js, Tailwind CSS &amp; Framer Motion</span>
        </p>
      </Container>
    </footer>
  );
}
