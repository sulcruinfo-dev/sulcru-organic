import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27615141042?text=Hello%20Sulcru%20Organic,%20I%20would%20like%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
    >
      <>
        <FaWhatsapp size={32} />

        <div className="absolute right-20 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition">
          Chat with us
        </div>
      </>
    </a>
  );
}
