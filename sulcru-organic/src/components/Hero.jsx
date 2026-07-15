export default function Hero({ navigateTo }) {
  return (
    <section className='relative min-h-[92vh] border-b border-yellow-500/10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_30%),linear-gradient(to_right,#000000,#050505,#000000)]'>
            <div className='absolute inset-0 opacity-20 bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80)] bg-cover bg-center'></div>

            <div className='relative z-10 grid lg:grid-cols-2 gap-10 items-center px-10 lg:px-20 py-16 lg:py-24'>
              <div className='max-w-2xl'>
                <p className='text-yellow-400 uppercase tracking-[0.25em] font-semibold mb-6 text-sm'>Pure By Nature. Powered By Science.</p>

                <h1 className='text-5xl sm:text-6xl md:text-7xl font-black leading-tight md:leading-[0.95] mb-8 md:mb-8 text-center lg:text-left'>
                  Premium Organic
                  <br />
                  Agricultural Solutions
                  <br />
                  <span className='text-yellow-400'>for Better Growth</span>
                </h1>

                <p className='text-zinc-300 text-lg md:text-xl leading-relaxed max-w-xl mb-8 md:mb-10 text-center lg:text-left'>
                  High-performance organic agricultural products developed to improve soil health, strengthen plant development, increase crop productivity, and support sustainable farming systems.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center lg:items-start'>
                  

                  <button onClick={() => navigateTo('benefits')} className='hidden md:inline-block px-10 py-4 rounded-2xl border border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition'>LEARN MORE</button>
                </div>
              </div>

              <div className='relative flex justify-center items-center'>
                <div className='absolute w-[32rem] h-[32rem] rounded-full bg-yellow-400/20 blur-3xl'></div>

                <img
                  src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png'
                  alt='Sulcru Organic Premium Agriculture'
                  className='relative z-10 w-full max-w-sm sm:max-w-lg lg:max-w-3xl object-contain drop-shadow-[0_0_60px_rgba(255,215,0,0.35)]'
                />
              </div>
            </div>

            <div className='relative z-10 px-6 lg:px-20 pb-14'>
              <div className='grid md:grid-cols-4 gap-6 border border-yellow-500/20 rounded-3xl bg-zinc-950/90 backdrop-blur p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-14 h-14 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-400 text-2xl'>🌿</div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>100% Organic</h3>
                    <p className='text-zinc-400 text-sm'>Pure, natural & chemical-free agricultural support.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-14 h-14 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-400 text-2xl'>🧪</div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Science Backed</h3>
                    <p className='text-zinc-400 text-sm'>Formulated for real agricultural field performance.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-14 h-14 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-400 text-2xl'>🛡️</div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Field Tested</h3>
                    <p className='text-zinc-400 text-sm'>Designed for commercial farms, nurseries, and growers.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-14 h-14 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-400 text-2xl'>♻️</div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Sustainable</h3>
                    <p className='text-zinc-400 text-sm'>Supports regenerative and environmentally responsible farming.</p>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}



