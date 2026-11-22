import { cn } from "@/lib/utils";
import React from "react";
import { MenuIcon } from "lucide-react";
import { NAV_LINKS } from "@/constants/constants";
import { LOGO_IMAGE } from "@/constants/images";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { onMenuClick } = props;

  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "bg-brand" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-6.25 lg:px-10 lg:py-10.5">
        <a href="#top" aria-label="OWNDAYS x MELLER">
          <img
            src={LOGO_IMAGE}
            alt="OWNDAYS x MELLER"
            className="block h-auto w-60 lg:w-87.75"
          />
        </a>

        <nav className="hidden items-center gap-12.5 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[15px] font-bold uppercase tracking-[0.7px] text-white hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={onMenuClick}
          className="text-white lg:hidden"
        >
          <MenuIcon className="size-7" strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
};
