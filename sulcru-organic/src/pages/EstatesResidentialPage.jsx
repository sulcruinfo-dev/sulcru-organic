
export default function EstatesResidentialPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Landscape & Turf Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Beautiful Estates.
          <span className="text-yellow-400"> Healthier Living.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Organic and biological solutions designed to support
          healthier gardens, greener lawns and thriving outdoor
          environments across residential estates and properties.
        </p>

      </section>

      {/* ESTATES IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="/walkersons-hotel-spa.webp"
            alt="Beautiful Hotel & Spa with landscaped gardens and lawns"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* ESTATES BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Supporting Better Outdoor Environments
            </p>

            <h2 className="text-3xl lg:text-4xl font-black">
              Healthier Grounds. Better Living Spaces.
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Healthier Gardens
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil biology and healthier growing
                conditions for ornamental plants, shrubs
                and established gardens.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Greener Lawns
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support turf health, root development and
                consistent growth across residential lawns
                and communal green spaces.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Landscapes
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible landscape management
                focused on long-term soil health and
                thriving outdoor environments.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
