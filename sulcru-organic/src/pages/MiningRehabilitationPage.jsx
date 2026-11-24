
export default function MiningRehabilitationPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Environmental Restoration Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Restoring Disturbed Land.
          <span className="text-yellow-400"> Rebuilding Potential.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          soil rehabilitation, vegetation establishment and
          the recovery of disturbed mining environments.
        </p>

      </section>

      {/* HERO IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=85"
            alt="Mining and industrial land rehabilitation environment"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="px-6 lg:px-20 pb-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Supporting Environmental Recovery
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Building Healthier Foundations for Land Rehabilitation.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Mining and industrial activities can significantly
            disturb natural soil conditions and vegetation.
            Sulcru Organic focuses on biological solutions
            that support soil improvement, plant establishment
            and the progressive recovery of degraded land.
          </p>

        </div>

      </section>

      {/* REHABILITATION AREAS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Rehabilitation
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support the recovery of disturbed soil environments
                through biological soil improvement and the
                development of healthier growing conditions.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Vegetation Establishment
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support vegetation establishment and plant
                development across rehabilitated land and
                restoration project areas.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Long-Term Restoration
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage sustainable land management through
                improved soil conditions, biological activity
                and ongoing vegetation development.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
