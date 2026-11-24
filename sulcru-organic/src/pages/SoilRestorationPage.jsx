
export default function SoilRestorationPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Environmental Restoration Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Restore the Soil.
          <span className="text-yellow-400"> Renew the Land.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          soil health, improve growing conditions and encourage
          the recovery of degraded and depleted soils.
        </p>

      </section>

      {/* HERO IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
            alt="Agricultural land and natural growing environment"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="px-6 lg:px-20 pb-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Rebuilding Soil Health
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Healthy Soil Is the Foundation of a Thriving Environment.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Soil degradation and nutrient depletion can affect
            plant development, soil structure and the long-term
            productivity of land. Sulcru Organic focuses on
            biological solutions that support soil improvement,
            microbial activity and healthier growing environments.
          </p>

        </div>

      </section>

      {/* RESTORATION AREAS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Biology
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support beneficial biological activity and
                healthier soil ecosystems that contribute
                to improved growing conditions.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Improvement
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil structure, organic matter development
                and improved conditions in depleted or degraded
                growing environments.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Long-Term Soil Health
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible land management focused
                on maintaining soil health and supporting
                sustainable vegetation development.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
