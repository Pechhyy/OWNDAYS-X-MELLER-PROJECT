import React from "react";
import { Header } from "@/components/Header";
import { MobleResponsiveMenu } from "@/components/MobileMenu";
import { ProductsBanner } from "@/components/ProductBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { StyleThem, type StyleItem } from "@/components/StyleThem";
import { Footer } from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import { STYLE_IMAGE_COUNT, styleImage } from "@/constants/images";
import type { Product } from "@/types/product";

const styleItems: StyleItem[] = Array.from(
  { length: STYLE_IMAGE_COUNT },
  (_, i) => ({
    id: i + 1,
    imageUrl: styleImage(i + 1),
  }),
);

type SelectedProduct = {
  item: Product;
  skuIndex: number;
  openId: number;
};

export default function App() {
  const { data: products, isLoading, isError, refetch } = useProducts();

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<SelectedProduct | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const openProduct = (item: Product, skuIndex: number) => {
    setSelected({ item, skuIndex, openId: Date.now() });
    setModalOpen(true);
  };

  const openFromStyleItem = (styleItemId: number) => {
    if (!products?.length) return;
    openProduct(products[(styleItemId - 1) % products.length], 0);
  };

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <React.Fragment>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <MobleResponsiveMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div>
        <ProductsBanner />
        <ProductGrid
          items={products}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
          onSelectProduct={openProduct}
        />
        <StyleThem items={styleItems} onOpenProduct={openFromStyleItem} />
      </div>

      <Footer />

      {selected && (
        <ProductModal
          key={selected.openId}
          item={selected.item}
          initialSkuIndex={selected.skuIndex}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      )}
    </React.Fragment>
  );
}
