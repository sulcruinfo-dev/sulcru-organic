import { Link } from "react-router-dom";

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Agriculture Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Growing Stronger
          <span className="text-yellow-400"> Together</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          healthier growing environments, stronger plant
          development and sustainable agricultural production.
        </p>

      </section>

      {/* INDUSTRY SECTIONS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* NURSERIES */}
<Link to="/solutions/agriculture/nurseries" className="block">
<div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
              alt="Healthy plants growing in a commercial nursery"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                INDUSTRY 01
              </p>

              <h2 className="text-3xl font-black mb-5">
                Nurseries
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Biological growing solutions supporting plant
                health, root development and vigorous growth
                in commercial nurseries and garden centres.
              </p>

            </div>
          </div>
</Link>
          
          {/* SEEDLING PRODUCTION */}
          <Link to="/solutions/agriculture/seedling-production">
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85"
              alt="Young green seedlings and developing plants"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                INDUSTRY 02
              </p>

              <h2 className="text-3xl font-black mb-5">
                Seedling Production
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Supporting healthy seedling establishment,
                root development and consistent plant growth
                throughout the early stages of production.
              </p>

            </div>
            </Link>
          </div>

          {/* COMMERCIAL FARMING */}
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

            <img
              src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=85"
              alt="Commercial agricultural crop production"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                INDUSTRY 03
              </p>

              <h2 className="text-3xl font-black mb-5">
                Commercial Farming
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Organic biological solutions supporting soil
                health, crop development and sustainable
                agricultural production systems.
              </p>

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
