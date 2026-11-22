import React from "react";
import type { Product } from "@/types/product";
import { STORE_PRODUCT_URL } from "@/constants/constants";
import { formatPrice, getColorLabel, imageUrl } from "@/lib/format";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type ProductModalProps = {
  item: Product;
  initialSkuIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ProductModal: React.FC<ProductModalProps> = (props) => {
  const { item, initialSkuIndex, open, onOpenChange } = props;

  const { product, frame_types, selling_setting, localization, skus } = item;

  const [skuIndex, setSkuIndex] = React.useState<number>(initialSkuIndex);

  const sku = skus[skuIndex] ?? "";
  const outOfStock = selling_setting.in_stock === 0;
  const storeUrl = `${STORE_PRODUCT_URL ?? ""}/${product?.code ?? ""}?sku=${sku?.id ?? ""}`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetDescription className="sr-only">
          Product details for {product.model_name}
        </SheetDescription>

        <div className="bg-[#f1f1f1] pb-8 pt-6 text-black">
          <SheetTitle className="px-5 font-display text-3xl font-black uppercase leading-none text-brand lg:px-8 lg:text-4xl">
            {product.model_name}
          </SheetTitle>

          <div
            key={sku?.id}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 lg:px-8"
          >
            {sku?.images.length ? (
              sku.images.map((img) => (
                <img
                  key={img.id}
                  src={imageUrl(img.path)}
                  alt={`${product.model_name} ${sku.code}`}
                  className="aspect-420/298 w-[80%] shrink-0 snap-center object-contain lg:w-105"
                />
              ))
            ) : (
              <div className="aspect-420/298 w-[80%] shrink-0 bg-neutral-200 lg:w-105" />
            )}
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 px-5">
            {skus.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setSkuIndex(i)}
                  aria-pressed={i === skuIndex}
                  className={cn(
                    "rounded-full border border-black px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide",
                    i === skuIndex
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-neutral-200",
                  )}
                >
                  {getColorLabel(s.colors[0]) || s.code}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 pb-10 pt-8 lg:px-8">
          <dl className="grid grid-cols-[80px_1fr] gap-y-3 font-sans text-[11px] text-white">
            <dt className="font-bold">P/No.</dt>
            <dd>
              {product.code} {sku?.code}
            </dd>
            <dt className="font-bold">TYPE</dt>
            <dd className="uppercase">
              {frame_types.map((f) => f.code).join(", ")}
            </dd>
            <dt className="font-bold">PRICE</dt>
            <dd>{formatPrice(selling_setting.price)} 税込</dd>
          </dl>

          <p className="mt-8 font-sans text-[11px] leading-6 text-white">
            {localization.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            {outOfStock ? (
              <Button
                variant="brand"
                size="lg"
                disabled
                className="h-13 w-full max-w-107 lg:h-14"
              >
                OUT OF STOCK
              </Button>
            ) : (
              <Button
                asChild
                variant="brand"
                size="lg"
                className="h-13 w-full max-w-107 lg:h-14"
              >
                <a href={storeUrl} target="_blank" rel="noreferrer">
                  ONLINE STORE
                </a>
              </Button>
            )}
            <p className="font-sans text-[9px] text-white">
              OWNDAYSオンラインストアに移動します
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
