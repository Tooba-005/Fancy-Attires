export const storeConfig = {
  brandName: "Fancy Attires",
  whatsappNumber: "923134399862",
  whatsappDisplay: "03134399862",
  city: "Lahore",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
  tiktokUrl: "https://tiktok.com/",
};

export function createWhatsAppUrl(message?: string) {
  const text =
    message ?? "Assalam o Alaikum! I would like to know more about Fancy Attires collections.";
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
