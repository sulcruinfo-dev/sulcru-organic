
import { useEffect, useState } from 'react';

const slides = [
  { image: '/black-friday-golf-turf.webp', title: 'Golf Course & Turf Solutions' },
  { image: '/black-friday-landscape-large.webp', title: 'Landscape Large Bundle' },
  { image: '/black-friday-landscape-professional.webp', title: 'Landscape Professional Bundle' },
  { image: '/black-friday-crop-bundles.webp', title: 'Crop Production Bundles' },
  { image: '/black-friday-nursery.webp', title: 'Nursery Performance Bundle' },
  { image: '/black-friday-estate.webp', title: 'Estate Management Bundle' },
  { image: '/black-friday-garden-lawn.webp', title: 'Garden & Lawn Bundle' },
];

export default function BlackFridaySlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  // Automatic slideshow pauses while the enlarged image is open.
  useEffect(() => {
    if (imageOpen) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageOpen]);

  // Keyboard navigation and Escape to close enlarged image.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setImageOpen(false);
        return;
      }

      if (imageOpen) return;

      const tag = event.target.tagName;

      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        event.target.isContentEditable
      ) {
        return;
      }

      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') previousSlide();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageOpen]);

  return (
    <>
      <section className="bg-black px-3 py-8 lg:px-4">
        <div className="max-w-[760px] mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-3">
            Sulcru Organic · Black Friday 2026
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Explore Our Special Offers
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mb-7">
            Discover our limited Black Friday bundles across different industries.
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-4">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-yellow-400 text-yellow-400 inline-flex items-center justify-center leading-none hover:bg-yellow-400 hover:text-black transition"
            >
              <span className="block text-3xl leading-none -mt-1">‹</span>
            </button>

            <div className="flex-1 min-w-0 overflow-hidden rounded-xl border border-yellow-400/40 bg-zinc-950">

              <button
                type="button"
                onClick={() => setImageOpen(true)}
                className="block w-full cursor-zoom-in"
                aria-label={`Enlarge ${slides[activeSlide].title}`}
              >
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="block w-full h-auto object-contain"
                />
              </button>

            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-yellow-400 text-yellow-400 inline-flex items-center justify-center leading-none hover:bg-yellow-400 hover:text-black transition"
            >
              <span className="block text-3xl leading-none -mt-1">›</span>
            </button>

          </div>

          <p className="text-yellow-400 font-semibold text-sm sm:text-base mt-4">
            {slides[activeSlide].title}
          </p>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                className={`h-3 rounded-full transition-all ${
                  activeSlide === index
                    ? 'w-8 bg-yellow-400'
                    : 'w-3 bg-zinc-600 hover:bg-yellow-300'
                }`}
              />
            ))}
          </div>

          <p className="text-zinc-500 text-xs mt-4">
            Use the arrows, keyboard or dots to explore our offers. Click a poster to enlarge it.
          </p>

        </div>
      </section>

      {/* ENLARGED POSTER */}
      {imageOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged poster: ${slides[activeSlide].title}`}
        >
          <button
            type="button"
            onClick={() => setImageOpen(false)}
            aria-label="Close enlarged poster"
            className="absolute top-4 right-4 z-[101] w-11 h-11 rounded-full bg-yellow-400 text-black text-3xl inline-flex items-center justify-center leading-none hover:bg-yellow-300"
          >
            <span className="block leading-none -mt-1">×</span>
          </button>

          <img
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            onClick={(event) => event.stopPropagation()}
            className="max-w-full max-h-[92vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
