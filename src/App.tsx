import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollManager } from "./components/ScrollManager";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ThemeProvider } from "./context/ThemeContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollManager />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <WhatsAppButton floating />
      </BrowserRouter>
    </ThemeProvider>
  );
}
