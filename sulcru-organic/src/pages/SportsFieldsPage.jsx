
export default function SportsFieldsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Landscape & Turf Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Stronger Turf.
          <span className="text-yellow-400"> Better Playing Fields.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          soil health, healthy turf development and sustainable
          sports field maintenance.
        </p>

      </section>

      {/* SPORTS FIELD IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1800&q=85"
            alt="Green sports field with professionally maintained turf"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* SPORTS FIELD BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Supporting Quality Playing Surfaces
            </p>

            <h2 className="text-3xl lg:text-4xl font-black">
              Building Healthier Sports Fields
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Condition
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil biological activity and healthier
                growing conditions beneath sports field turf.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Turf Development
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support root development, plant health and
                consistent turf growth across playing surfaces.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Maintenance
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible sports field management
                focused on long-term soil and turf health.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
