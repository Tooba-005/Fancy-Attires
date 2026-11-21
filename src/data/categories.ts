export type Category = {
  id: string;
  name: string;
  image: string;
};

export const categories: Category[] = [
  { id: "luxury", name: "Luxury Dresses", image: "/images/categories/luxury.png" },
  { id: "casual", name: "Casual Wear", image: "/images/categories/casual.jpeg" },
  { id: "formal", name: "Formal Wear", image: "/images/categories/formal.jpeg" },
  { id: "party", name: "Party Wear", image: "/images/categories/party.jpeg" },
  { id: "new", name: "New Arrivals", image: "/images/categories/new-arrivals.jpeg" },
  {
    id: "traditional",
    name: "Traditional Wear",
    image: "/images/categories/traditional.jpeg",
  },
];
