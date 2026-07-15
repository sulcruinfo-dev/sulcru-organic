export default function ProductPage({
  title,
  description,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <p className="text-yellow-400 uppercase tracking-[0.25em] font-semibold mb-4">
        Sulcru Organic
      </p>

      <h1 className="text-5xl lg:text-6xl font-black mb-6">
        {title}
      </h1>

      <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
        {description}
      </p>
    </section>
  );
}
