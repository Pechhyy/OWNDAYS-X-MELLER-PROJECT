import { ChevronRightIcon, ShoppingCartIcon } from "lucide-react";
import { NAV_LINKS, SUB_LINKS } from "@/constants/constants";
import { CONTENTS_ICON, INSTAGRAM_ICON } from "@/constants/images";

interface FooterProps {}

const InstagramIcon = () => {
  return (
    <img
      src={INSTAGRAM_ICON}
      alt=""
      width={16}
      height={16}
      className="block size-4"
    />
  );
};

const WindowIcon = () => {
  return (
    <img
      src={CONTENTS_ICON}
      alt=""
      width={17}
      height={15}
      className="block h-3.75 w-4.25"
    />
  );
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="border-t-2 border-brand bg-black font-sans text-brand">
      <div className="mx-auto grid max-w-360 grid-cols-1 lg:grid-cols-[65fr_35fr]">
        <div className="lg:border-r-2 lg:border-brand lg:px-17.5 lg:py-14.5">
          <ul className="lg:flex lg:flex-col lg:gap-4.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center justify-between border-b-2 border-brand px-7 py-4.75 text-[13px] font-bold uppercase tracking-wider hover:opacity-70 lg:border-b-0 lg:p-0 lg:text-base"
                >
                  {link.label}
                  <ChevronRightIcon className="size-4 lg:hidden" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-label="Instagram"
            className="mt-12 hidden hover:opacity-70 lg:inline-block"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className="flex items-center justify-between border-b-2 border-brand px-7 py-10 lg:flex-col lg:justify-center lg:gap-4 lg:border-b-0 lg:px-0 lg:py-0">
          <a
            href="#"
            className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider hover:opacity-70 lg:text-xl"
          >
            <ShoppingCartIcon className="size-5 lg:size-7" /> Online Store
          </a>
          <a
            href="https://www.owndays.com"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider hover:opacity-70 lg:text-xs"
          >
            owndays.com <WindowIcon />
          </a>
        </div>

        <div className="border-b-2 border-brand px-7 py-7 lg:flex lg:h-19.5 lg:items-center lg:border-t-2 lg:px-17.5 lg:py-0">
          <ul className="flex flex-col gap-3.5 lg:flex-row lg:gap-9.5">
            {SUB_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-wider hover:opacity-70 lg:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-label="Instagram"
            className="mt-8 inline-block hover:opacity-70 lg:hidden"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className="px-7 py-7 text-center lg:flex lg:items-center lg:justify-end lg:border-t-2 lg:border-brand lg:px-15.5 lg:py-0 lg:text-right">
          <small className="text-[10px] uppercase tracking-wider lg:text-[11px]">
            Copyright (C) OWNDAYS Co., Ltd. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
};
