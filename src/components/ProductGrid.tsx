import type { Product } from "@/types/product";
import { ProductCardSelection } from "@/components/ProductCardSelection";

type ProductGridProps = {
  items: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onSelectProduct: (item: Product, skuIndex: number) => void;
};

export const ProductGrid: React.FC<ProductGridProps> = (props) => {
  const { items, isLoading, isError, onRetry, onSelectProduct } = props;

  return (
    <div id="products" className="bg-brand px-5 py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-360">
        {isLoading && (
          <div
            className="grid grid-cols-1 gap-1.5 lg:grid-cols-3"
            aria-busy="true"
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="h-75 animate-pulse bg-white/60 lg:h-82.5"
              />
            ))}
          </div>
        )}

        {isError && (
          <div
            role="alert"
            className="flex flex-col items-center gap-4 bg-white px-6 py-16 text-center"
          >
            <p className="font-sans text-sm font-bold">
              商品を読み込めませんでした。Failed to load products.
            </p>
            <button
              type="button"
              onClick={onRetry}
              className="rounded-full bg-black px-8 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-600"
            >
              Retry
            </button>
          </div>
        )}

        {items && (
          <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-3">
            {items.map((item) => (
              <ProductCardSelection
                key={item.product.id}
                item={item}
                onOpen={(skuIndex) => onSelectProduct(item, skuIndex)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
