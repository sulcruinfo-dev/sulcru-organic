import ProductLayout from "../layouts/ProductLayout";

export default function SoilImproverPage() {
  return (
    <ProductLayout>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
  <p className="text-yellow-400 uppercase tracking-[0.25em] font-semibold mb-4">
    Sulcru Organic
  </p>

  <h1 className="text-5xl lg:text-6xl font-black mb-6">
    Soil Improver
  </h1>

  <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
    Soil Improver is a premium organic soil conditioner developed to
    improve soil biology, increase microbial activity, enhance soil
    structure, and support healthier root development across all soil
    types.
  </p>
</section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
  <h2 className="text-3xl font-bold mb-6">
    What Soil Improver Does
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold text-yellow-400 mb-3">
        Restores Soil Biology
      </h3>
      <p className="text-zinc-300">
        Supports beneficial microbial activity to help create healthier,
        more biologically active soil.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold text-yellow-400 mb-3">
        Improves Soil Structure
      </h3>
      <p className="text-zinc-300">
        Helps improve soil condition, encouraging better root penetration,
        moisture retention, and nutrient availability.
      </p>
    </div>
  </div>
</section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
  <h2 className="text-3xl font-bold mb-6">
    Key Benefits
  </h2>

  <ul className="grid md:grid-cols-2 gap-4 text-zinc-300">
    <li className="rounded-xl border border-yellow-500/20 bg-zinc-900 p-5">
      ✓ Supports beneficial soil microorganisms
    </li>

    <li className="rounded-xl border border-yellow-500/20 bg-zinc-900 p-5">
      ✓ Improves soil structure across a wide range of soil types
    </li>

    <li className="rounded-xl border border-yellow-500/20 bg-zinc-900 p-5">
      ✓ Encourages stronger root development
    </li>

    <li className="rounded-xl border border-yellow-500/20 bg-zinc-900 p-5">
      ✓ Supports improved water retention and nutrient availability
    </li>
  </ul>
</section>
    </ProductLayout>
  );
}
