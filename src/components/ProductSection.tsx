import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import type { Product } from "../data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  tone?: "default" | "tinted";
};

export function ProductSection({ eyebrow, title, description, products, tone = "default" }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) =>
    track.current?.scrollBy({ left: direction * 360, behavior: "smooth" });

  return (
    <section className={`section product-slider-section ${tone === "tinted" ? "is-tinted" : ""}`}>
      <div className="container">
        <div className="section-topline">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />
          <div className="slider-arrows">
            <button onClick={() => scroll(-1)} aria-label={`Scroll ${title} left`}>
              <ArrowLeft />
            </button>
            <button onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="product-track" ref={track}>
          {products.map((product) => (
            <div className="product-track__item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
