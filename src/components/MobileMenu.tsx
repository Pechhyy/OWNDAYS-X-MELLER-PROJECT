import { XIcon } from "lucide-react";
import { NAV_LINKS, SUB_LINKS } from "@/constants/constants";
import { cn } from "@/lib/utils";

interface MobleResponsiveMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobleResponsiveMenu: React.FC<MobleResponsiveMenuProps> = (
  props,
) => {
  const { open, onClose } = props;

  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute inset-3 rounded-[10px] bg-black px-6 py-6"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-5 top-5 text-brand"
        >
          <XIcon className="size-8" strokeWidth={1.25} />
        </button>

        <nav className="mt-16 flex flex-col gap-5" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="font-sans text-sm font-bold uppercase tracking-wider text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ul className="mt-14 flex flex-col gap-4">
          {SUB_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-[10px] font-medium uppercase tracking-wider text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
