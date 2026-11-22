import { HERO_IMAGE } from "@/constants/images";

interface ProductsBannerProps {}

export const ProductsBanner: React.FC<ProductsBannerProps> = () => {
  return (
    <section
      id="top"
      className="relative h-[min(173.7vw,720px)] w-full overflow-hidden bg-neutral-800 lg:h-158.25"
    >
      <div className="absolute inset-0 bg-linear-to-b from-neutral-700 to-neutral-900" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center px-5">
        <h1 className="font-display text-[min(17.5vw,100px)] font-black uppercase leading-none text-brand">
          <span className="title-band">Products</span>
        </h1>
      </div>
    </section>
  );
};
