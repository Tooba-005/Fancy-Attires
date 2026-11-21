import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { ImageWithFallback } from "./ImageWithFallback";
import { SectionHeading } from "./SectionHeading";

export function CategorySlider() {
  const track = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: number) => {
    track.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const selectCategory = (name: string) => {
    navigate(`/?category=${encodeURIComponent(name)}#collection`);
  };

  return (
    <section className="section categories-section">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Shop your mood"
            title="Curated for every occasion"
            description="From intimate gatherings to grand celebrations, discover a look that feels entirely yours."
            align="left"
          />
          <div className="slider-arrows">
            <button onClick={() => scroll(-1)} aria-label="Scroll categories left">
              <ArrowLeft />
            </button>
            <button onClick={() => scroll(1)} aria-label="Scroll categories right">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="category-track" ref={track}>
          {categories.map((category, index) => (
            <button
              className="category-card"
              key={category.id}
              onClick={() => selectCategory(category.name)}
            >
              <span className="category-card__image">
                <ImageWithFallback src={category.image} alt="" />
                <span className="category-card__number">0{index + 1}</span>
              </span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
