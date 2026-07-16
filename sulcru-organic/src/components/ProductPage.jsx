export default function ProductPage({
  product,
  children,
}) {
  return (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT COLUMN */}

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
          ← Back to Products
        </button>

      </div>

    </div>

    {/* RIGHT COLUMN */}

    <div className="flex justify-center">

      <div className="w-full max-w-md aspect-square rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black shadow-2xl flex items-center justify-center">

        <div className="text-center">

          <div className="text-6xl mb-4">
            🌿
          </div>

          <h3 className="text-xl font-bold text-white">
            Official Product Image
          </h3>

          <p className="text-zinc-500 mt-2">
            Available Soon
          </p>

        </div>

      </div>

    </div>

  </div>

  {children}

</section>
{children}
          </section>
  );
}


