
import { Link, useLocation } from "react-router-dom";

export default function BackButton() {
  const location = useLocation();

  const parentPages = {
    "/solutions": {
      path: "/",
      label: "Back to Home",
    },

    "/solutions/agriculture": {
      path: "/solutions",
      label: "Back to Solutions",
    },

    "/solutions/landscape-turf": {
      path: "/solutions",
      label: "Back to Solutions",
    },

    "/solutions/environmental-restoration": {
      path: "/solutions",
      label: "Back to Solutions",
    },

    "/solutions/agriculture/nurseries": {
      path: "/solutions/agriculture",
      label: "Back to Agriculture",
    },

    "/solutions/agriculture/seedling-production": {
      path: "/solutions/agriculture",
      label: "Back to Agriculture",
    },

    "/solutions/agriculture/commercial-farming": {
      path: "/solutions/agriculture",
      label: "Back to Agriculture",
    },

    "/solutions/landscape-turf/landscaping-gardens": {
      path: "/solutions/landscape-turf",
      label: "Back to Landscape & Turf",
    },

    "/solutions/landscape-turf/golf-courses": {
      path: "/solutions/landscape-turf",
      label: "Back to Landscape & Turf",
    },

    "/solutions/landscape-turf/sports-fields": {
      path: "/solutions/landscape-turf",
      label: "Back to Landscape & Turf",
    },

    "/solutions/landscape-turf/estates-residential": {
      path: "/solutions/landscape-turf",
      label: "Back to Landscape & Turf",
    },

    "/solutions/environmental-restoration/mining-rehabilitation": {
      path: "/solutions/environmental-restoration",
      label: "Back to Environmental Restoration",
    },

    "/solutions/environmental-restoration/soil-restoration": {
      path: "/solutions/environmental-restoration",
      label: "Back to Environmental Restoration",
    },

    "/solutions/environmental-restoration/vegetation-establishment": {
      path: "/solutions/environmental-restoration",
      label: "Back to Environmental Restoration",
    },

    "/products/soil-improver": {
      path: "/products",
      label: "Back to Products",
    },
  };

  const parent = parentPages[location.pathname];

  if (!parent) {
    return null;
  }

  return (
    <div className="fixed top-24 left-6 z-40">
      <Link
        to={parent.path}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-950/90 border border-yellow-500/30 text-white hover:border-yellow-400 hover:text-yellow-400 transition shadow-lg"
      >
        <span aria-hidden="true">←</span>
        <span className="text-sm font-semibold">
          {parent.label}
        </span>
      </Link>
    </div>
  );
}
