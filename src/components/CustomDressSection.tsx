import { MessageCircle, Palette, Ruler, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "../config/store";
import { ImageWithFallback } from "./ImageWithFallback";

export function CustomDressSection() {
  const [occasion, setOccasion] = useState("Wedding event");
  const [color, setColor] = useState("");
  const [budget, setBudget] = useState("PKR 10,000–20,000");

  const startConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Assalam o Alaikum! I would like to discuss a customized dress.",
      `Occasion: ${occasion}.`,
      `Preferred color: ${color || "I would like your suggestion"}.`,
      `Estimated budget: ${budget}.`,
      "Please guide me about design, measurements, timeline, and pricing.",
    ].join(" ");
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section custom-dress" id="custom-dress">
      <div className="container custom-dress__grid">
        <div className="custom-dress__visual">
          <div className="custom-dress__image">
            <ImageWithFallback
              src="/images/products/dress1.jpeg"
              alt="Customized emerald Pakistani dress"
            />
          </div>
          <div className="custom-dress__badge">
            <Sparkles />
            <span>
              <small>Made for you</small>
              Your idea, thoughtfully refined
            </span>
          </div>
        </div>

        <div className="custom-dress__content">
          <span className="eyebrow">Custom dress service</span>
          <h2>Have a dream outfit in mind?</h2>
          <p>
            Share your occasion, preferred color, and budget with us. Our team will connect with you
            on WhatsApp to discuss the design, measurements, fabric, timeline, and final price.
          </p>

          <div className="custom-dress__features">
            <span>
              <Ruler /> Measurement guidance
            </span>
            <span>
              <Palette /> Color consultation
            </span>
            <span>
              <MessageCircle /> Personal WhatsApp support
            </span>
          </div>

          <form className="custom-dress__form" onSubmit={startConsultation}>
            <label>
              Occasion
              <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                <option>Wedding event</option>
                <option>Mehndi or dholki</option>
                <option>Eid celebration</option>
                <option>Formal dinner</option>
                <option>Everyday wear</option>
                <option>Other occasion</option>
              </select>
            </label>
            <label>
              Preferred color
              <input
                value={color}
                onChange={(event) => setColor(event.target.value)}
                placeholder="e.g. Emerald green"
              />
            </label>
            <label>
              Estimated budget
              <select value={budget} onChange={(event) => setBudget(event.target.value)}>
                <option>Under PKR 10,000</option>
                <option>PKR 10,000–20,000</option>
                <option>PKR 20,000–35,000</option>
                <option>PKR 35,000 and above</option>
              </select>
            </label>
            <button className="button button--primary" type="submit">
              Discuss on WhatsApp <MessageCircle />
            </button>
          </form>
          <small className="custom-dress__note">
            Final pricing and availability are confirmed personally on WhatsApp.
          </small>
        </div>
      </div>
    </section>
  );
}
