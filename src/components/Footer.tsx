import { AtSign, Camera, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { createWhatsAppUrl, storeConfig } from "../config/store";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Logo />
          <p>
            Thoughtfully curated Pakistani fashion for celebrations, everyday beauty, and every
            moment in between.
          </p>
          <div className="socials">
            <a
              href={storeConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Camera />
            </a>
            <a
              href={storeConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <AtSign />
            </a>
            <a href={storeConfig.tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
              <Play />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">Our story</Link>
          <a href="/#collection">Shop collection</a>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="footer-column">
          <h3>Customer care</h3>
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
            WhatsApp support
          </a>
          <span>Cash on Delivery</span>
          <span>Delivery across Pakistan</span>
          <span>Order assistance</span>
        </div>
        <div className="footer-note">
          <MessageCircle />
          <h3>Need styling help?</h3>
          <p>Our team is ready to help you choose your perfect outfit.</p>
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
            Start a conversation
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Fancy Attires. All rights reserved.</span>
        <span>{storeConfig.city} · Pakistan</span>
      </div>
    </footer>
  );
}
