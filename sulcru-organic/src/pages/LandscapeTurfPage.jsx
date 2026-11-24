
import { Link } from "react-router-dom";

export default function LandscapeTurfPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Landscape & Turf Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Beautiful Spaces.
          <span className="text-yellow-400"> Healthier Growth.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          healthier landscapes, stronger turf and sustainable
          green spaces across residential and commercial environments.
        </p>

      </section>

      {/* INDUSTRY SECTIONS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LANDSCAPING & GARDENS */}
          <Link
            to="/solutions/landscape-turf/landscaping-gardens"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
                alt="Landscaped garden with healthy plants"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 01
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Landscaping & Gardens
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Professional biological solutions supporting
                  healthy lawns, vibrant gardens, stronger plants
                  and sustainable landscape maintenance.
                </p>

              </div>
            </div>
          </Link>

          {/* GOLF COURSES */}
          <Link
            to="/solutions/landscape-turf/golf-courses"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=85"
                alt="Professionally maintained golf course"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 02
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Golf Courses
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Biological turf and soil support solutions
                  designed for golf greens, fairways and
                  high-performance playing surfaces.
                </p>

              </div>
            </div>
          </Link>

          {/* SPORTS FIELDS */}
          <Link
            to="/solutions/landscape-turf/sports-fields"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
                alt="Green sports playing field"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 03
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Sports Fields
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Supporting healthy turf, soil condition
                  and sustainable maintenance of sports
                  fields and recreational surfaces.
                </p>

              </div>
            </div>
          </Link>

          {/* ESTATES & RESIDENTIAL */}
<Link
  to="/solutions/landscape-turf/estates-residential"
  className="block"
>
  <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

    <img
      src="/walkersons-hotel-spa.webp"
      alt="Walkersons Hotel & Spa with landscaped gardens and lawns"
      className="w-full h-64 object-cover"
    />

    <div className="p-8">

      <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
        INDUSTRY 04
      </p>

      <h2 className="text-3xl font-black mb-5">
        Estates & Residential
      </h2>

      <p className="text-zinc-400 leading-relaxed">
        Organic solutions for residential estates,
        communal gardens, lawns and professionally
        maintained outdoor environments.
      </p>

    </div>
  </div>
</Link>
        </div>

      </section>

    </main>
  );
}
