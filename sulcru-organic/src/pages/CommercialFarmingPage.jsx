
export default function CommercialFarmingPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Agriculture Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Stronger Crops.
          <span className="text-yellow-400"> Healthier Soil.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          soil health, crop development and sustainable
          agricultural production across commercial farming systems.
        </p>

      </section>

      {/* COMMERCIAL FARMING IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
            alt="Commercial agricultural fields"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* FARMING BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Supporting Modern Agriculture
            </p>

            <h2 className="text-3xl lg:text-4xl font-black">
              Building Better Growing Conditions
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Health
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil biological activity and improve
                growing conditions for productive agricultural systems.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Crop Development
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support healthy plant development throughout
                important stages of crop growth.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Production
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible agricultural practices
                focused on long-term soil and plant health.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
