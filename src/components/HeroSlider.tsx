import { ArrowLeft, ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "../data/heroSlides";
import { ImageWithFallback } from "./ImageWithFallback";
import { WhatsAppButton } from "./WhatsAppButton";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const changeSlide = useCallback((direction: number) => {
    setActive((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => changeSlide(1), 5500);
    return () => window.clearInterval(timer);
  }, [changeSlide, paused]);

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured collections"
    >
      <div className="hero__track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {heroSlides.map((slide, index) => (
          <article className="hero__slide" key={slide.id} aria-hidden={index !== active}>
            <div className="hero__content container">
              <div className="hero__copy">
                <span className="eyebrow">{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="hero__actions">
                  <a className="button button--primary" href="#collection">
                    <ShoppingBag />
                    Shop collection
                  </a>
                  <WhatsAppButton label="Order on WhatsApp" />
                </div>
                <div className="hero__promise">
                  <span>Curated quality</span>
                  <i />
                  <span>Cash on delivery</span>
                  <i />
                  <span>Across Pakistan</span>
                </div>
              </div>
              <div className="hero__visual">
                <div className="hero__image-wrap">
                  <ImageWithFallback src={slide.image} alt={`${slide.title} collection`} />
                </div>
                <div className="hero__seal" aria-hidden="true">
                  <span>FANCY</span>
                  <strong>FA</strong>
                  <span>ATTIRES</span>
                </div>
                <div className="hero__note">
                  <MessageCircle />
                  <span>
                    <small>Order with ease</small>
                    Personal service on WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="hero__controls container">
        <div className="hero__arrows">
          <button onClick={() => changeSlide(-1)} aria-label="Previous slide">
            <ArrowLeft />
          </button>
          <button onClick={() => changeSlide(1)} aria-label="Next slide">
            <ArrowRight />
          </button>
        </div>
        <div className="hero__dots">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
            />
          ))}
        </div>
        <span className="hero__count">
          0{active + 1} / 0{heroSlides.length}
        </span>
      </div>
    </section>
  );
}
