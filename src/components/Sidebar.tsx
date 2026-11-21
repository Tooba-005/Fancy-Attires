import { MessageCircle, Ruler, ShoppingBag, X } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createWhatsAppUrl } from "../config/store";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  return (
    <div className={`sidebar-shell ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="sidebar-overlay" onClick={onClose} aria-label="Close menu" />
      <aside className="sidebar" aria-label="Main menu">
        <div className="sidebar__head">
          <Logo onClick={onClose} />
          <button className="icon-button" onClick={onClose} aria-label="Close menu">
            <X />
          </button>
        </div>
        <nav className="sidebar__nav">
          <span className="eyebrow">Discover</span>
          <NavLink to="/" end onClick={onClose}>
            Home <span>01</span>
          </NavLink>
          <NavLink to="/about" onClick={onClose}>
            About <span>02</span>
          </NavLink>
          <NavLink to="/contact" onClick={onClose}>
            Contact <span>03</span>
          </NavLink>
          <NavLink to="/#collection" onClick={onClose}>
            Shop Collection <ShoppingBag />
          </NavLink>
          <NavLink to="/#custom-dress" onClick={onClose}>
            Custom Dress <Ruler />
          </NavLink>
        </nav>
        <div className="sidebar__footer">
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle />
            WhatsApp contact
          </a>
          <ThemeToggle showLabel />
          <p>Beautiful fashion, delivered all across Pakistan.</p>
        </div>
      </aside>
    </div>
  );
}
