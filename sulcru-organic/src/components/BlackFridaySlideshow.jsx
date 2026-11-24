
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: '/black-friday-golf-turf.webp',
    title: 'Golf Course & Turf Solutions',
  },
  {
    image: '/black-friday-landscape-large.webp',
    title: 'Landscape Large Bundle',
  },
  {
    image: '/black-friday-landscape-professional.webp',
    title: 'Landscape Professional Bundle',
  },
  {
    image: '/black-friday-crop-bundles.webp',
    title: 'Crop Production Bundles',
  },
  {
    image: '/black-friday-nursery.webp',
    title: 'Nursery Performance Bundle',
  },
  {
    image: '/black-friday-estate.webp',
    title: 'Estate Management Bundle',
  },
  {
    image: '/black-friday-garden-lawn.webp',
    title: 'Garden & Lawn Bundle',
  },
];

export default function BlackFridaySlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black px-4 py-14 lg:px-12">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold mb-3">
          Sulcru Organic · Black Friday 2026
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          Explore Our Special Offers
        </h2>

        <p className="text-zinc-400 mb-8">
          Discover our limited Black Friday bundles across different industries.
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-yellow-400/40 bg-zinc-950">

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="block w-full"
            aria-label={`Enquire about ${slides[activeSlide].title}`}
          >
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-auto object-contain"
            />
          </button>

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/75 text-yellow-400 w-11 h-11 rounded-full text-2xl hover:bg-yellow-400 hover:text-black transition"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/75 text-yellow-400 w-11 h-11 rounded-full text-2xl hover:bg-yellow-400 hover:text-black transition"
          >
            ›
          </button>

        </div>

        <p className="text-yellow-400 font-semibold mt-5">
          {slides[activeSlide].title}
        </p>

        <div className="flex justify-center gap-2 mt-5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-3 rounded-full transition-all ${
                activeSlide === index
                  ? 'w-8 bg-yellow-400'
                  : 'w-3 bg-zinc-600 hover:bg-yellow-300'
              }`}
            />
          ))}
        </div>

        <p className="text-zinc-500 text-xs mt-4">
          Select a poster to enquire about the offer.
        </p>

      </div>
    </section>
  );
}
