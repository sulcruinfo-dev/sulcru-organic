import ProductLayout from "../layouts/ProductLayout";
import ProductPage from "../components/ProductPage";

export default function SoilImproverPage() {
  return (
    <ProductLayout>
       <ProductPage
  title="Soil Improver"
  description="Soil Improver is a premium organic soil conditioner developed to improve soil biology, increase microbial activity, enhance soil structure, and support healthier root development across all soil types."
>
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
