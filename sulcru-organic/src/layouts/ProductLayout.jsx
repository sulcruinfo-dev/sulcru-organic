import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function ProductLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="min-h-screen pt-8 pb-16">
         {children}
       </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
