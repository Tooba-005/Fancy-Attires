import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "../config/store";

type Props = {
  productName?: string;
  label?: string;
  floating?: boolean;
  className?: string;
};

export function WhatsAppButton({
  productName,
  label = "Order on WhatsApp",
  floating = false,
  className = "",
}: Props) {
  const message = productName
    ? `Assalam o Alaikum! I want to order ${productName}. Please share the details.`
    : undefined;

  return (
    <a
      className={`${floating ? "whatsapp-float" : "button button--whatsapp"} ${className}`}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={floating ? "Contact Fancy Attires on WhatsApp" : label}
      title={floating ? "Chat with us on WhatsApp" : undefined}
    >
      <MessageCircle aria-hidden="true" />
      {!floating && <span>{label}</span>}
    </a>
  );
}
