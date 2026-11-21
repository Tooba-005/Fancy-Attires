import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createWhatsAppUrl } from "../config/store";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="announcement">Complimentary delivery on orders above PKR 8,000</div>
        <div className="header-inner container">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="/#collection">Collection</a>
            <a href="/#custom-dress">Custom dress</a>
          </nav>
          <div className="header-actions">
            <a
              className="icon-button"
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle />
            </a>
            <ThemeToggle />
            <button
              className="icon-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
