export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight">
          Claude Next.js Starter
        </span>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Mission
          </a>
          <a href="#" className="hover:text-foreground">
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
