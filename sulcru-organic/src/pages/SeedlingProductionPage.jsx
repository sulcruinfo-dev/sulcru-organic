
export default function SeedlingProductionPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Seedling Production Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Stronger Starts.
          <span className="text-yellow-400"> Healthier Growth.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          healthy seedling establishment, stronger root systems
          and consistent early plant development.
        </p>

      </section>

      {/* HERO IMAGE */}
      <section className="px-6 lg:px-20 pb-20">

        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1800&q=85"
          alt="Healthy young green plants and seedlings"
          className="w-full h-[350px] lg:h-[500px] object-cover rounded-3xl"
        />

      </section>

      {/* INTRODUCTION */}
      <section className="px-6 lg:px-20 py-20 text-center">

        <p className="text-yellow-400 font-semibold tracking-widest mb-5">
          HEALTHIER ROOTS. STRONGER PLANTS.
        </p>

        <h2 className="text-3xl lg:text-4xl font-black mb-6">
          Supporting Better Seedling Development
        </h2>

        <p className="text-zinc-400 text-lg max-w-4xl mx-auto leading-relaxed">
          Successful crop production begins with healthy,
          well-established seedlings. Sulcru Organic provides
          biological solutions designed to support growing
          environments, root development and overall plant
          health throughout early production.
        </p>

      </section>

      {/* DEVELOPMENT STAGES */}
      <section className="bg-zinc-950 px-6 lg:px-20 py-24">

        <div className="text-center mb-14">

          <p className="text-yellow-400 font-semibold tracking-widest mb-4">
            THE SULCRU APPROACH
          </p>

          <h2 className="text-3xl lg:text-4xl font-black">
            Supporting Every Stage of Growth
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Early Establishment
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support healthy growing environments and
              successful early seedling establishment.
            </p>
          </div>

          <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Root Development
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support stronger root systems and improved
              growing conditions throughout development.
            </p>
          </div>

          <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Plant Health
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support healthy foliage, balanced development
              and vigorous young plants.
            </p>
          </div>

        </div>

      </section>

      {/* PRODUCT SOLUTIONS */}
      <section className="px-6 lg:px-20 py-24">

        <div className="text-center mb-14">

          <p className="text-yellow-400 font-semibold tracking-widest mb-4">
            SULCRU PRODUCT SOLUTIONS
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mb-5">
            Products for Seedling Production
          </h2>

          <p className="text-zinc-400 text-lg">
            A complementary approach to supporting healthy growing environments.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400 transition">

            <p className="text-yellow-400 font-semibold tracking-widest mb-4">
              SOIL HEALTH
            </p>

            <h3 className="text-3xl font-black mb-5">
              Soil Improver
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A biological soil solution designed to support
              soil biology, improve growing environments
              and support healthier root development.
            </p>

            <span className="inline-block border border-yellow-500/30 rounded-full px-5 py-2 text-yellow-400 font-semibold">
              Soil Drench
            </span>

          </div>

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400 transition">

            <p className="text-yellow-400 font-semibold tracking-widest mb-4">
              PLANT HEALTH
            </p>

            <h3 className="text-3xl font-black mb-5">
              Plant Gro+
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A biological plant health solution designed
              to support vigorous growth, healthy foliage
              and overall plant development.
            </p>

            <span className="inline-block border border-yellow-500/30 rounded-full px-5 py-2 text-yellow-400 font-semibold">
              Foliar Spray
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}
