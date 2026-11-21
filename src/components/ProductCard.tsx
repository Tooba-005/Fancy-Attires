import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "../data/products";
import { ImageWithFallback } from "./ImageWithFallback";
import { WhatsAppButton } from "./WhatsAppButton";

export function formatPrice(price: number) {
  return `PKR ${new Intl.NumberFormat("en-PK").format(price)}`;
}

export function ProductCard({ product }: { product: Product }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detailsOpen && !dialog.open) dialog.showModal();
    if (!detailsOpen && dialog.open) dialog.close();
  }, [detailsOpen]);

  return (
    <>
      <article className="product-card">
        <div className="product-card__image">
          <ImageWithFallback src={product.image} alt={product.name} loading="lazy" />
          {product.badge && <span className="product-card__badge">{product.badge}</span>}
          <button
            className="product-card__quick"
            onClick={() => setDetailsOpen(true)}
            aria-label={`View details for ${product.name}`}
          >
            <ArrowUpRight />
          </button>
        </div>
        <div className="product-card__content">
          <span className="product-card__category">{product.category}</span>
          <h3>{product.name}</h3>
          <div className="product-card__price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          </div>
          <div className="product-card__actions">
            <button className="button button--outline" onClick={() => setDetailsOpen(true)}>
              View details
            </button>
            <WhatsAppButton productName={product.name} label="" className="button--icon" />
          </div>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        className="product-dialog"
        onClose={() => setDetailsOpen(false)}
        onClick={(event) => event.target === dialogRef.current && setDetailsOpen(false)}
      >
        <button
          className="product-dialog__close icon-button"
          onClick={() => setDetailsOpen(false)}
          aria-label="Close product details"
        >
          <X />
        </button>
        <div className="product-dialog__image">
          <ImageWithFallback src={product.image} alt={product.name} />
        </div>
        <div className="product-dialog__content">
          <span className="eyebrow">{product.category}</span>
          <h2>{product.name}</h2>
          <div className="product-card__price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          </div>
          <p>{product.description}</p>
          <ul>
            <li>Premium quality fabric and finish</li>
            <li>Cash on Delivery across Pakistan</li>
            <li>Size and availability confirmed on WhatsApp</li>
          </ul>
          <WhatsAppButton productName={product.name} label="Order this look" />
        </div>
      </dialog>
    </>
  );
}
