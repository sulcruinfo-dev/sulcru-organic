
export default function NurseryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Nursery Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Grow Stronger.
          <span className="text-yellow-400"> Grow Healthier.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic growing solutions designed
          to support healthier nursery plants, stronger root
          systems and vibrant, sustainable plant production.
        </p>

      </section>

      {/* NURSERY IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=85"
            alt="Healthy plants growing in a nursery"
            className="w-full h-72 lg:h-[450px] object-cover"
          />

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="px-6 lg:px-20 py-16">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-5">
            Healthier Plants Start Below the Surface
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Supporting Better Nursery Production
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Healthy nursery plants begin with a balanced growing
            environment. Sulcru Organic provides biological
            solutions designed to support soil health, root
            development and overall plant performance throughout
            the nursery production process.
          </p>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="px-6 lg:px-20 py-16 bg-zinc-950">

        <div className="text-center mb-12">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            The Sulcru Approach
          </p>

          <h2 className="text-3xl lg:text-4xl font-black">
            Supporting Every Stage of Growth
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              Root Development
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support healthy root systems and stronger
              plant establishment.
            </p>
          </div>

          <div className="border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              Soil Biology
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support biological soil activity and healthier
              growing environments.
            </p>
          </div>

          <div className="border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              Plant Health
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Support vibrant foliage and consistent
              plant development.
            </p>
          </div>

        </div>

      </section>

      {/* RECOMMENDED PRODUCTS */}
      <section className="px-6 lg:px-20 py-24">

        <div className="text-center mb-12">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Sulcru Product Solutions
          </p>

          <h2 className="text-3xl lg:text-4xl font-black">
            Products for Nursery Production
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            A complementary approach to supporting growing
            environments and plant health.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* SOIL IMPROVER */}
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
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

            <span className="inline-block text-yellow-400 font-semibold border border-yellow-500/30 rounded-full px-5 py-2">
              Soil Drench
            </span>

          </div>

          {/* PLANT GRO+ */}
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
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

            <span className="inline-block text-yellow-400 font-semibold border border-yellow-500/30 rounded-full px-5 py-2">
              Foliar Spray
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}
