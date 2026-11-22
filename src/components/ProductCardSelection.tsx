import { cn } from "@/lib/utils";
import React from "react";
import type { Product } from "@/types/product";
import { formatPrice, getColorLabel, imageUrl } from "@/lib/format";

const MAX_SWATCHES = 4;

interface ProductCardSelectionProps {
  item: Product;
  onOpen: (skuIndex: number) => void;
}

export const ProductCardSelection: React.FC<ProductCardSelectionProps> = (
  props,
) => {
  const { item, onOpen } = props;

  const { product, selling_setting, skus } = item;

  const [skuIndex, setSkuIndex] = React.useState<number>(0);

  const sku = skus[skuIndex] ?? "";
  const image = sku?.images[0] ?? "";
  const hiddenSwatches = skus.length - MAX_SWATCHES;

  return (
    <article className="bg-white p-3.25 outline-black hover:outline-2 lg:p-3.75">
      <button
        type="button"
        onClick={() => onOpen(skuIndex)}
        aria-label={`View ${product.model_name}`}
        className="flex aspect-663/505 w-full cursor-pointer items-center justify-center overflow-hidden bg-[#f7f7f7]"
      >
        {image && (
          <img
            key={image.path}
            src={imageUrl(image.path)}
            alt={`${product.model_name} ${sku.code}`}
            loading="lazy"
            className="h-full w-full object-contain mix-blend-multiply"
          />
        )}
      </button>

      <div className="flex items-end justify-between gap-3 pb-3 pt-5">
        <div className="min-w-0">
          <h3 className="font-display text-3xl font-black uppercase leading-none lg:text-[32px]">
            {product.model_name}
          </h3>
          <p className="mt-1 font-sans text-[10px] text-neutral-600">
            {product.code} {sku?.code}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <ul className="flex items-center gap-0.75">
            {skus.slice(0, MAX_SWATCHES).map((s, i) => {
              const color = s.colors[0];
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    aria-label={getColorLabel(color) || s.code}
                    aria-pressed={i === skuIndex}
                    onClick={() => setSkuIndex(i)}
                    className={cn(
                      "flex size-7 items-center justify-center rounded-full border lg:size-9.5",
                      i === skuIndex ? "border-brand" : "border-transparent",
                    )}
                  >
                    <span
                      style={{
                        backgroundColor: color?.hex_code ?? undefined,
                        backgroundImage: color?.path
                          ? `url(${imageUrl(color.path)})`
                          : undefined,
                      }}
                      className="block size-5.5 rounded-full border border-neutral-300 bg-cover bg-center lg:size-7.5"
                    />
                  </button>
                </li>
              );
            })}
            {hiddenSwatches > 0 && (
              <li className="px-1 font-sans text-[10px] font-bold text-neutral-600">
                +{hiddenSwatches}
              </li>
            )}
          </ul>
          <p className="font-sans text-xs font-bold">
            {formatPrice(selling_setting.price)}+tax
          </p>
        </div>
      </div>
    </article>
  );
};
