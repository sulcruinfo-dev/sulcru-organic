
export default function GolfCoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 lg:px-20 py-24 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
          Landscape & Turf Solutions
        </p>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          Exceptional Turf.
          <span className="text-yellow-400"> Healthier Greens.</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Biological and organic solutions designed to support
          soil health, strong turf development and the
          maintenance of high-quality golf course environments.
        </p>

      </section>

      {/* GOLF COURSE IMAGE */}
      <section className="px-6 lg:px-20 pb-16">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20">

          <img
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1800&q=85"
            alt="Professionally maintained golf course"
            className="w-full h-[350px] lg:h-[500px] object-cover"
          />

        </div>

      </section>

      {/* GOLF COURSE BENEFITS */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Supporting Quality Turf
            </p>

            <h2 className="text-3xl lg:text-4xl font-black">
              A Stronger Foundation for Better Playing Surfaces
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Soil Health
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support soil biological activity and healthier
                growing conditions beneath golf course turf.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Stronger Turf
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support root development, plant health and
                consistent turf growth across playing areas.
              </p>

            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Sustainable Management
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Encourage responsible turf management with
                a focus on long-term soil and plant health.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
