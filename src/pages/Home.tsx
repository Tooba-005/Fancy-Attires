import { ArrowRight, Gem, PackageCheck, ShieldCheck } from "lucide-react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CategorySlider } from "../components/CategorySlider";
import { CustomDressSection } from "../components/CustomDressSection";
import { HeroSlider } from "../components/HeroSlider";
import { ProductCard } from "../components/ProductCard";
import { ProductSection } from "../components/ProductSection";
import { SectionHeading } from "../components/SectionHeading";
import { products } from "../data/products";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const featured = useMemo(() => {
    if (!category || category === "New Arrivals") return products.slice(0, 8);
    const filtered = products.filter((product) => product.category === category);
    return filtered.length ? filtered : products.slice(0, 8);
  }, [category]);

  return (
    <>
      <HeroSlider />
      <div className="trust-strip">
        <div className="container trust-strip__inner">
          <span>
            <Gem /> Curated premium quality
          </span>
          <span>
            <PackageCheck /> Cash on delivery
          </span>
          <span>
            <ShieldCheck /> Personal order support
          </span>
        </div>
      </div>

      <CategorySlider />
      <CustomDressSection />

      <section className="section collection-section" id="collection">
        <div className="container">
          <div className="collection-heading">
            <SectionHeading
              eyebrow={category ? `Showing ${category}` : "Signature selection"}
              title="Explore our collection"
              description="Pieces with presence, selected for beautiful days and unforgettable evenings."
            />
            {category && (
              <button className="text-button" onClick={() => setSearchParams({})}>
                View all categories
              </button>
            )}
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <button
            className="button button--primary collection-more"
            onClick={() => {
              setSearchParams({});
              document.querySelector(".collection-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View all collection <ArrowRight />
          </button>
        </div>
      </section>

      <section className="brand-quote">
        <div className="brand-quote__ornament">FA</div>
        <div className="container">
          <span className="eyebrow">The Fancy Attires promise</span>
          <blockquote>
            “Clothes should not simply be worn. They should become part of how a beautiful moment is
            remembered.”
          </blockquote>
        </div>
      </section>

      <ProductSection
        eyebrow="Just in"
        title="New arrivals"
        description="Fresh silhouettes and new-season hues, ready to make an entrance."
        products={products.filter((product) => product.badge === "New Arrival")}
      />
      <ProductSection
        eyebrow="Loved by you"
        title="Best sellers"
        description="Our most-adored looks, chosen again and again by the Fancy Attires woman."
        products={products.filter((product) => product.badge === "Best Seller")}
        tone="tinted"
      />
      <ProductSection
        eyebrow="The current edit"
        title="Trending dresses"
        description="Of-the-moment pieces with an unmistakably timeless point of view."
        products={products.filter((product) => product.badge === "Trending")}
      />
    </>
  );
}
