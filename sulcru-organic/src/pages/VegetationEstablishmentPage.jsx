
export default function VegetationEstablishmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Environmental Restoration Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Bring Back the Green.
          <span className="text-yellow-400"> Restore Natural Growth.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          plant establishment, root development and sustainable
          vegetation growth across restoration and rehabilitation projects.
        </p>

      </section>

      {/* HERO IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85"
            alt="Healthy established vegetation and natural green landscape"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="px-6 lg:px-20 pb-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Supporting Vegetation Recovery
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Establishing Vegetation for a Healthier Landscape.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Successful vegetation establishment plays an important
            role in restoring disturbed landscapes and improving
            the long-term condition of rehabilitated land.
            Sulcru Organic focuses on biological solutions that
            support plant development, root establishment and
            sustainable vegetation growth.
          </p>

        </div>

      </section>

      {/* VEGETATION BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Plant Establishment
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support the establishment of vegetation across
                restored land, disturbed environments and
                rehabilitation project areas.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Root Development
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage healthy root development and improved
                growing conditions to support plant establishment
                and ongoing vegetation growth.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Vegetation
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support long-term vegetation development and
                responsible revegetation as part of broader
                environmental restoration programmes.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
