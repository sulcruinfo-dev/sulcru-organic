export default function ProductPage({
  title,
  description,
  children,
}) {
  return (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
    <p className="text-yellow-400 uppercase tracking-[0.25em] font-semibold mb-4">
        Sulcru Organic
      </p>

      <h1 className="text-5xl lg:text-6xl font-black mb-6">
        {title}
      </h1>

      <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
        {description}
      </p>
      <div className="mt-10">
  <button
       type="button"
       className="px-8 py-4 rounded-2xl border border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
>
    Request a Quote
</button>
</div>

          <div className="flex justify-center items-center">
  <div className="w-full max-w-md h-96 rounded-3xl border border-yellow-500/20 bg-zinc-900 flex items-center justify-center text-zinc-500">
     Coming Soon
  </div>
</div>

</div>

{children}
          </section>
  );
}
