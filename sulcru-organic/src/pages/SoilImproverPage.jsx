import ProductLayout from "../layouts/ProductLayout";
import ProductPage from "../components/ProductPage";

const soilImprover = {
  title: "Soil Improver",

  description:
    "Soil Improver is a premium organic soil conditioner developed to improve soil biology, increase microbial activity, enhance soil structure, and support healthier root development across all soil types.",

  image: null,

  whatItDoes: [
    {
      title: "Improves Soil Health",
      text: "Encourages healthier soil biology, improves microbial activity, and supports stronger root development across a wide range of soil conditions.",
    },
    {
      title: "Supports Long-Term Productivity",
      text: "Helps create better growing conditions for healthier crops, improved nutrient efficiency, and more resilient agricultural systems.",
    },
  ],

  benefits: [
    {
      title: "Healthier Soil Biology",
      text: "Supports beneficial microbial activity for improved soil function.",
    },
    {
      title: "Better Root Development",
      text: "Encourages stronger root systems for improved nutrient and water uptake.",
    },
    {
      title: "Improved Moisture Retention",
      text: "Helps soils retain moisture more effectively under varying conditions.",
    },
    {
      title: "Suitable for All Soil Types",
      text: "Designed for healthy, depleted, sandy, clay and regenerative soils.",
    },
  ],

  applications: [
    "Open Field Crops",
    "Vegetable Production",
    "Fruit Orchards",
    "Regenerative Farming",
  ],
};

export default function SoilImproverPage() {
  return (
    <ProductLayout>
      <ProductPage product={soilImprover} />
    </ProductLayout>
  );
}
