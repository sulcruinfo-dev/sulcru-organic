
export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="px-6 lg:px-20 py-24 text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Industries & Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Organic Solutions for a
          <span className="text-yellow-400"> Growing World</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Discover biological and organic solutions designed
          to support healthier soils, stronger plant growth,
          productive landscapes and environmental restoration.
        </p>
      
      </section>

      <section className="px-6 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

  <img
    src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=85"
    alt="Commercial agricultural crop production"
    className="w-full h-56 object-cover"
  />

  <div className="p-8">
            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
              DIVISION 01
            </p>
            <h2 className="text-3xl font-black mb-5">
              Agriculture
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Biological and organic solutions for commercial
              farming, nurseries, seedling production and
              sustainable crop development.
            </p>
          </div>
            
<div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400 transition">

  <img
    src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=85"
    alt="Professionally maintained golf course and green turf"
    className="w-full h-56 object-cover"
  />

  <div className="p-8">

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400 transition">
            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
              DIVISION 02
            </p>
            <h2 className="text-3xl font-black mb-5">
              Landscape & Turf
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Professional growing and maintenance solutions
              for landscaping, gardens, golf courses, sports
              fields and residential estates.
            </p>
          </div>
    </div>

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400 transition">
            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4">
              DIVISION 03
            </p>
            <h2 className="text-3xl font-black mb-5">
              Environmental Restoration
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Biological soil improvement, land rehabilitation
              and vegetation establishment for restoration
              and environmental recovery projects.
            </p>
          </div>

        </div>
      </section>

    </main>

  );
}
