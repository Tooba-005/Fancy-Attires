export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: "New Arrival" | "Best Seller" | "Trending";
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Neelam Midnight Floral Cape Gown",
    price: 13800,
    oldPrice: 15500,
    image: "/images/products/dress1.jpeg",
    category: "Evening Wear",
    badge: "Best Seller",
    description: "Deep navy floor-length gown draped with sheer 3D floral-embroidered cape sleeves."
  },
  {
    id: 2,
    name: "Gulnaar Ivory & Crimson Ensemble",
    price: 12950,
    image: "/images/products/dress2.png",
    category: "Festive Couture",
    badge: "New Arrival",
    description: "Luminous ivory satin maxi layered with a sheer red floral embroidered jacket."
  },
  {
    id: 3,
    name: "Zaffran Silk Straight Suit",
    price: 7450,
    oldPrice: 8500,
    image: "/images/products/dress3.jpeg",
    category: "Formal Wear",
    badge: "Trending",
    description: "Burnt orange raw silk shirt finished with delicate pearl edging and a net dupatta."
  },
  {
    id: 4,
    name: "Aab-e-Noor Bridal Trail Gown",
    price: 16500,
    oldPrice: 18500,
    image: "/images/products/dress4.jpeg",
    category: "Bridal & Couture",
    badge: "Best Seller",
    description: "Sculpted ivory satin gown accented with a heavily embellished crystal lattice cape."
  },
  {
    id: 5,
    name: "Jamuni Royale Embellished Maxi",
    price: 9850,
    image: "/images/products/dress5.jpeg",
    category: "Formal Wear",
    badge: "New Arrival",
    description: "Deep plum floor-length dress featuring an ornate gold-beaded neckline and cuffs."
  },
  {
    id: 6,
    name: "Sehar Pastel Lemon & Blush Set",
    price: 6850,
    oldPrice: 7800,
    image: "/images/products/dress6.jpeg",
    category: "Festive Pret",
    badge: "Trending",
    description: "Soft butter-yellow kurta with keyhole embroidery paired with a pastel pink dupatta."
  },
  {
    id: 7,
    name: "Zari Gold Sharara Ensemble",
    price: 8950,
    oldPrice: 10200,
    image: "/images/products/dress7.jpeg",
    category: "Festive Wear",
    badge: "Best Seller",
    description: "Textured champagne-gold buttoned kurti styled with flared sharara pants and gota trim."
  },
  {
    id: 8,
    name: "Moti Pearl-Draped Sleeve Gown",
    price: 13200,
    image: "/images/products/dress8.jpeg",
    category: "Luxury Pret",
    badge: "Trending",
    description: "Ivory silk couture piece showcasing cascading hand-strung pearl sleeve drapes."
  },
  {
    id: 9,
    name: "Aasmani Silk Shalwar Suit",
    price: 6450,
    image: "/images/products/dress9.jpeg",
    category: "Classic Pret",
    badge: "New Arrival",
    description: "Powder blue silk straight kameez and wide-leg trousers with a gold-bordered organza dupatta."
  },
  {
    id: 10,
    name: "Marigold Jaal Gharara Set",
    price: 10500,
    oldPrice: 11900,
    image: "/images/products/dress10.jpeg",
    category: "Wedding Edit",
    badge: "Best Seller",
    description: "Mustard-ochre tassel-hemmed tunic and wide flare bottoms with an intricate net jaal dupatta."
  },
  {
    id: 11,
    name: "Anarkali Crimson Silk Gharara",
    price: 9450,
    image: "/images/products/dress11.jpeg",
    category: "Festive Wear",
    badge: "New Arrival",
    description: "Strappy maroon raw silk kurti with silver-bordered slits, flared trousers, and sheer dupatta."
  },
  {
    id: 12,
    name: "Gulabi Ombre Zardozi Suit",
    price: 8650,
    oldPrice: 9600,
    image: "/images/products/dress12.jpeg",
    category: "Formal Wear",
    badge: "Trending",
    description: "Ivory-to-blush ombre silk kameez accented with ornate gold neckline and cuff embroidery."
  }
];


// {
//     id: 1,
//     name: "Mehrun Embroidered Pishwas",
//     price: 8490,
//     oldPrice: 9990,
//     image: "/images/products/dress-01.webp",
//     category: "Luxury Dresses",
//     badge: "Best Seller",
//     description: "A graceful long silhouette with delicate tonal embroidery.",
//   },
//   {
//     id: 2,
//     name: "Noor Champagne Ensemble",
//     price: 6950,
//     image: "/images/products/dress-02.webp",
//     category: "Formal Wear",
//     badge: "New Arrival",
//     description: "Refined festive separates in a luminous champagne palette.",
//   },
//   {
//     id: 3,
//     name: "Gul Rose Angrakha",
//     price: 7490,
//     oldPrice: 8290,
//     image: "/images/products/dress-03.webp",
//     category: "Party Wear",
//     badge: "Trending",
//     description: "A feminine wrap silhouette made for memorable celebrations.",
//   },
//   {
//     id: 4,
//     name: "Zara Ivory Kurta Set",
//     price: 4850,
//     image: "/images/products/dress-04.webp",
//     category: "Casual Wear",
//     badge: "New Arrival",
//     description: "Everyday elegance in a clean ivory cut with elevated details.",
//   },
//   {
//     id: 5,
//     name: "Mahira Velvet Kaftan",
//     price: 10990,
//     oldPrice: 12990,
//     image: "/images/products/dress-05.webp",
//     category: "Luxury Dresses",
//     badge: "Best Seller",
//     description: "A statement velvet drape finished with intricate embellishment.",
//   },
//   {
//     id: 6,
//     name: "Ayla Printed Co-ord",
//     price: 3990,
//     image: "/images/products/dress-06.webp",
//     category: "Casual Wear",
//     badge: "Trending",
//     description: "A relaxed co-ord with an artful print and an effortless fit.",
//   },
//   {
//     id: 7,
//     name: "Sahar Organza Saree",
//     price: 8990,
//     image: "/images/products/dress-07.webp",
//     category: "Traditional Wear",
//     badge: "New Arrival",
//     description: "Light-as-air organza framed with a beautifully finished border.",
//   },
//   {
//     id: 8,
//     name: "Meher Festive Sharara",
//     price: 9490,
//     oldPrice: 11200,
//     image: "/images/products/dress-08.webp",
//     category: "Party Wear",
//     badge: "Best Seller",
//     description: "A celebratory sharara set with graceful movement and detail.",
//   },
//   {
//     id: 9,
//     name: "Anaya Drape Suit",
//     price: 7850,
//     image: "/images/products/dress-09.webp",
//     category: "Formal Wear",
//     badge: "Trending",
//     description: "Modern draping meets a timeless formal silhouette.",
//   },
//   {
//     id: 10,
//     name: "Rania Lawn Edit",
//     price: 3750,
//     image: "/images/products/dress-10.webp",
//     category: "Casual Wear",
//     badge: "New Arrival",
//     description: "Breathable lawn with a polished print for warm, easy days.",
//   },
//   {
//     id: 11,
//     name: "Laila Pearl Pishwas",
//     price: 11990,
//     image: "/images/products/dress-11.webp",
//     category: "Luxury Dresses",
//     badge: "Best Seller",
//     description: "An heirloom-inspired pishwas with subtle pearl accents.",
//   },
//   {
//     id: 12,
//     name: "Haya Classic Shalwar Set",
//     price: 5250,
//     image: "/images/products/dress-12.webp",
//     category: "Traditional Wear",
//     badge: "Trending",
//     description: "A composed traditional set tailored for modern comfort.",
//   },



