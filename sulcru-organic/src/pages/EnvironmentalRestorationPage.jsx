import { Link } from "react-router-dom";

export default function EnvironmentalRestorationPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Environmental Restoration Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Restoring Land.
          <span className="text-yellow-400"> Rebuilding Nature.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions supporting soil
          rehabilitation, vegetation establishment and the
          restoration of degraded environments.
        </p>

      </section>

      
      {/* INDUSTRY SECTIONS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* MINING REHABILITATION */}
          <Link
            to="/solutions/environmental-restoration/mining-rehabilitation"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial land and environmental rehabilitation"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 01
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Mining Rehabilitation
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Biological soil improvement and vegetation
                  establishment solutions supporting the
                  rehabilitation of disturbed mining land
                  and degraded environments.
                </p>

              </div>
            </div>
          </Link>

          {/* SOIL RESTORATION */}
          <Link
            to="/solutions/environmental-restoration/soil-restoration"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
                alt="Agricultural land and healthy growing environment"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 02
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Soil Restoration
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Biological solutions supporting soil health,
                  organic matter development and the recovery
                  of degraded or depleted growing environments.
                </p>

              </div>
            </div>
          </Link>

          {/* VEGETATION ESTABLISHMENT */}
          <Link
            to="/solutions/environmental-restoration/vegetation-establishment"
            className="block"
          >
            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
                alt="Established vegetation and natural green landscape"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
                  INDUSTRY 03
                </p>

                <h2 className="text-3xl font-black mb-5">
                  Vegetation Establishment
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Supporting plant establishment, vegetation
                  development and sustainable revegetation
                  across restoration and rehabilitation projects.
                </p>

              </div>
            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}
