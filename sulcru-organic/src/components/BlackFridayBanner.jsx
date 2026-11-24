
import { Link } from 'react-router-dom';

export default function BlackFridayBanner() {
  return (
    <div className="w-full bg-[#FFFF00] text-black px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">

        <span className="font-extrabold tracking-wider text-sm sm:text-base">
          BLACK FRIDAY SPECIAL
        </span>

        <span className="hidden sm:block font-light">|</span>

        <span className="font-bold text-sm sm:text-base">
          30% OFF
        </span>

        <span className="text-xs sm:text-sm font-medium">
          FRIDAY · 27 NOVEMBER 2026
        </span>

        <Link
          to="/contact"
          className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-70 transition"
        >
          ENQUIRE ABOUT THE SPECIAL
        </Link>

      </div>
    </div>
  );
}
