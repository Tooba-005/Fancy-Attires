import { CheckCircle2, Clock3, MapPin, MessageCircle, PackageCheck, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { createWhatsAppUrl, storeConfig } from "../config/store";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Assalam o Alaikum! My name is ${data.get("name")}. Phone: ${data.get("phone")}. ${data.get("message")}`;
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-hero page-hero--contact">
        <div className="page-hero__shape" />
        <div className="container page-hero__content">
          <span className="eyebrow">We would love to hear from you</span>
          <h1>
            Let’s find your
            <br />
            perfect look.
          </h1>
          <p>Questions about a dress, sizing, or delivery? Our team is just a message away.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contact us</span>
            <h2>
              Personal service,
              <br />
              from hello to delivery.
            </h2>
            <p>We deliver your favourite outfits all across Pakistan with Cash on Delivery.</p>
            <div className="contact-details">
              <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle />
                <span>
                  <small>WhatsApp</small>
                  {storeConfig.whatsappDisplay}
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Based in</small>
                  {storeConfig.city}, Pakistan
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <small>Customer support</small>Monday–Saturday, 10am–8pm
                </span>
              </div>
              <div>
                <PackageCheck />
                <span>
                  <small>Delivery</small>Cash on Delivery across Pakistan
                </span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitForm}>
            <div className="contact-form__head">
              <span className="eyebrow">Send an enquiry</span>
              <h2>How can we help?</h2>
              <p>Complete the form and your message will open securely in WhatsApp.</p>
            </div>
            <label>
              Your name
              <input name="name" type="text" placeholder="Enter your full name" required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" placeholder="e.g. 0300 1234567" required />
            </label>
            <label>
              Your message
              <textarea
                name="message"
                placeholder="Tell us what you would like to order..."
                rows={5}
                required
              />
            </label>
            <button className="button button--primary" type="submit">
              Send via WhatsApp <Send />
            </button>
            {submitted && (
              <p className="form-success">
                <CheckCircle2 /> Your enquiry has been prepared in WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="order-steps">
        <div className="container">
          <span className="eyebrow">Simple ordering</span>
          <h2>From our collection to your wardrobe</h2>
          <div className="order-steps__grid">
            {[
              ["01", "Choose your look", "Browse the collection and select the outfit you love."],
              [
                "02",
                "Message us",
                "Tap the WhatsApp button and send your pre-filled order request.",
              ],
              [
                "03",
                "Confirm details",
                "We will confirm sizing, availability, total, and delivery details.",
              ],
              [
                "04",
                "Receive with ease",
                "Your order arrives with Cash on Delivery across Pakistan.",
              ],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
