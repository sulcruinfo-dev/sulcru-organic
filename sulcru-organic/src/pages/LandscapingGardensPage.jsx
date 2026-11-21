
export default function LandscapingGardensPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Landscape & Turf Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Beautiful Spaces.
          <span className="text-yellow-400"> Healthier Landscapes.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          healthier soils, stronger plant growth and vibrant
          landscapes in gardens and landscaped environments.
        </p>

      </section>

      {/* LANDSCAPING IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85"
            alt="Beautiful landscaped garden"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* LANDSCAPING BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Supporting Healthy Landscapes
            </p>

            <h2 className="text-3xl lg:text-4xl font-black">
              A Stronger Foundation for Every Landscape
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Healthier Soil
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil biological activity and improve
                growing conditions for established gardens
                and landscaped areas.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Vibrant Plant Growth
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support plant health, foliage development
                and stronger growth across a variety
                of landscape plants.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Landscapes
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible landscape management
                with a focus on long-term soil and plant health.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
