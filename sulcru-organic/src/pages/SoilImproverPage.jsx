import ProductLayout from "../layouts/ProductLayout";
import ProductPage from "../components/ProductPage";

const soilImprover = {
  title: "Soil Improver",
  description:
    "Soil Improver is a premium organic soil conditioner developed to improve soil biology, increase microbial activity, enhance soil structure, and support healthier root development across all soil types.",
};

export default function SoilImproverPage() {
  return (
    <ProductLayout>
       <ProductPage product={soilImprover}>
         <section className="mt-20">
  <h2 className="text-3xl lg:text-4xl font-bold mb-8">
    What It Does
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">
      <h3 className="text-2xl font-bold mb-4">
        Improves Soil Health
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Encourages healthier soil biology, improves microbial activity,
        and supports stronger root development across a wide range of soil
        conditions.
      </p>
    </div>

    <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">
      <h3 className="text-2xl font-bold mb-4">
        Supports Long-Term Productivity
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Helps create better growing conditions for healthier crops,
        improved nutrient efficiency, and more resilient agricultural
        systems.
      </p>
    </div>

  </div>
</section>
         <section className="mt-20">
  <h2 className="text-3xl lg:text-4xl font-bold mb-8">
    Key Benefits
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    {[
      {
        title: "Healthier Soil Biology",
        text: "Supports beneficial microbial activity for improved soil function."
      },
      {
        title: "Better Root Development",
        text: "Encourages stronger root systems for improved nutrient and water uptake."
      },
      {
        title: "Improved Moisture Retention",
        text: "Helps soils retain moisture more effectively under varying conditions."
      },
      {
        title: "Suitable for All Soil Types",
        text: "Designed for healthy, depleted, sandy, clay and regenerative soils."
      }
    ].map((benefit) => (
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
  <section className="mt-16">
    <h2 className="text-3xl font-bold mb-6">
      Key Benefits
    </h2>

    <p className="text-zinc-300">
      This is a temporary test section to verify that ProductPage correctly renders child content.
    </p>
  </section>
</ProductPage>
    </ProductLayout>
  );
}
