export default function ProductPage({ product }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

      {/* ================= HERO ================= */}

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Sulcru Organic
          </p>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            {product.title}
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4">

            <button
              type="button"
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
            >
              Request a Quote
            </button>

            <button
              type="button"
              className="px-8 py-4 rounded-2xl border border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Download Brochure
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-full max-w-md aspect-square rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black shadow-2xl flex items-center justify-center">

            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-8"
              />
            ) : (
              <div className="text-center">

                <div className="text-6xl mb-4">
                  🌿
                </div>

                <h3 className="text-xl font-bold text-white">
                  Product Image
                </h3>

                <p className="text-zinc-500 mt-2">
                  Coming Soon
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* ================= WHAT IT DOES ================= */}

      {product.whatItDoes?.length > 0 && (
        <section className="mt-20">

          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            What It Does
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {product.whatItDoes.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8"
              >

                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* ================= BENEFITS ================= */}

      {product.benefits?.length > 0 && (
        <section className="mt-20">

          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {product.benefits.map((benefit) => (

              <div
                key={benefit.title}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 hover:border-yellow-400 transition"
              >

                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {benefit.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* ================= APPLICATIONS ================= */}

      {product.applications?.length > 0 && (
        <section className="mt-20">

          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Recommended Applications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {product.applications.map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 text-center hover:border-yellow-400 transition"
              >

                <div className="text-5xl mb-4">
                  🌱
                </div>

                <h3 className="text-xl font-bold text-yellow-400">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </section>
      )}

    </section>
  );
}
