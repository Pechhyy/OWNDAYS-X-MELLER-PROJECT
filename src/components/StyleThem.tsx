import { PlusIcon } from "lucide-react";

export type StyleItem = {
  id: number;
  imageUrl?: string;
};

interface StyleThemProps {
  items: StyleItem[];
  onOpenProduct: (styleItemId: number) => void;
}

export const StyleThem: React.FC<StyleThemProps> = (props) => {
  const { items, onOpenProduct } = props;

  return (
    <section className="bg-brand">
      <div className="relative z-10 mx-auto mb-[-0.35em] max-w-360 px-4 pt-16 text-[min(15.2vw,110px)] lg:px-10 lg:pt-24 lg:text-[min(8.75vw,126px)]">
        <h2 className="font-display font-black uppercase text-brand">
          <span className="title-band">How to</span>
        </h2>
        <div className="h-5" />
        <h2 className="font-display font-black uppercase text-brand">
          <span className="title-band">Style them</span>
        </h2>
      </div>

      <ul className="no-scrollbar relative flex overflow-x-auto scroll-smooth">
        {items &&
          items.map((item: StyleItem) => (
            <li
              key={item.id}
              className="relative h-123 w-81.5 shrink-0 bg-neutral-700 lg:h-152.75 lg:w-101.25"
            >
              {item.imageUrl && (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              )}
              <button
                type="button"
                aria-label="View product"
                onClick={() => onOpenProduct(item.id)}
                className="absolute bottom-0 right-0 flex size-14 items-center justify-center bg-brand text-black hover:bg-black hover:text-brand lg:size-17.5"
              >
                <PlusIcon className="size-8 lg:size-10" strokeWidth={2} />
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};
