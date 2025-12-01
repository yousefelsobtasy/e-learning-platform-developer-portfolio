export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} made by{" "}
            <span className="font-semibold bg-[#FACC15] bg-clip-text text-transparent">
              make them learn
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}