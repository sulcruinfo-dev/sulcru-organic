'use client';

import { useState } from 'react';

export default function SulcruOrganic() {
  const [page, setPage] = useState('home');
  const [showQuote, setShowQuote] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const email = 'sulcru.info@gmail.com';
  const phone = '27615141042';

  const products = [
    {
      name: 'Crop Boost',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
      desc: 'Growth enhancer for stronger roots and yield.',
      benefits: ['Stimulates vigorous vegetative growth', 'Supports root mass development', 'Improves nutrient uptake efficiency'],
      performance: ['Promotes faster establishment', 'Supports flowering and fruit set', 'Contributes to higher production potential'],
      use: 'Ideal for vegetables, grains, orchards and general crop programs.'
    },
    {
      name: 'Plant Gro+',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
      desc: 'Balanced nutrition for vigorous plants.',
      benefits: ['Promotes balanced plant growth', 'Supports greener foliage', 'Encourages stronger stems'],
      performance: ['Improves plant uniformity', 'Supports canopy development', 'Enhances resilience'],
      use: 'Suitable for gardens, nurseries and production farms.'
    },
    {
      name: 'Soil Improver',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Enhances soil biology and structure across all soil types.',
      benefits: ['Enhances microbial activity', 'Improves moisture retention', 'Supports fertility'],
      performance: ['Improves workability', 'Supports root-zone conditions', 'Optimises nutrient efficiency'],
      use: 'Suitable for healthy soils, depleted soils and regenerative systems.'
    },
    {
      name: 'Compost Boost',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
      desc: 'Accelerates composting naturally.',
      benefits: ['Speeds decomposition', 'Reduces odour', 'Produces richer compost'],
      performance: ['Shortens compost cycles', 'Improves consistency', 'Boosts waste management efficiency'],
      use: 'Best for compost yards and organic waste recycling.'
    },
    {
      name: 'Sulcru Insect Repel',
      image: 'https://images.openai.com/static-rsc-4/hu3F6cP_bHCqi2xAxQ76WmtXL2cSPz5rp1gK5SedCvcHVP_DBI53zm62RdpCXx4Lq_OxNP8Jt40pTTniCbbdhGaGvnXJzK_Uq3Jvq9VQfq_qtqOG_dklcrL0BEjTZyAt0hHBhQRgCGr5aPeabBIJQXxDAQyYJZ3Zr-UGwtfg1EgPCNRNwuFbVV5Sye6wTf_Z?purpose=fullsize',
      desc: 'Natural insect repellent designed to protect crops without harming plants or beneficial biology.',
      benefits: [
        'Repels a wide range of common crop pests',
        'Safe for plants, pollinators (when used correctly), and soil biology',
        'Supports organic and regenerative farming programs'
      ],
      performance: [
        'Rapid reduction in visible pest pressure',
        'Maintains plant vigor during infestations',
        'Supports consistent crop quality and marketability'
      ],
      use: 'Apply as a foliar spray across vegetables, orchards, and general agricultural crops. Repeat at intervals based on pest pressure.',
      pests: ['Aphids','Whiteflies','Thrips','Spider mites','Leafhoppers','And many other common agricultural pests (not limited to this list)'],
      application: [
        'Preventative: Apply every 7–10 days',
        'Active infestation: Apply every 3–5 days until controlled',
        'Best applied early morning or late afternoon'
      ],
      safety: [
        'Shake well before use',
        'Do not spray during peak sunlight to avoid leaf stress',
        'Test on a small area before full application'
      ]
    }
  ];

  const card = 'bg-zinc-950 rounded-3xl shadow-2xl border border-yellow-500/20';
  const soft = 'bg-zinc-900 rounded-2xl border border-yellow-500/20';

  function openProduct(product) {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateTo(pageName) {
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submitQuote(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const userEmail = form.get('email');
    const message = form.get('message');
    window.location.href = `mailto:${email}?subject=Quote Request from ${name}&body=Name: ${name}%0AEmail: ${userEmail}%0AMessage: ${message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent('Quote Request - ' + name)}`, '_blank');
    setShowQuote(false);
  }

  function QuoteForm() {
    return (
      <form onSubmit={submitQuote} className='grid gap-4 mt-4'>
        <input name='name' placeholder='Your Name' required className='p-3 rounded-xl bg-zinc-900 text-white border border-yellow-500/20 focus:outline-none focus:border-yellow-400' />
        <input name='email' type='email' placeholder='Your Email' required className='p-3 rounded-xl bg-zinc-900 text-white border border-yellow-500/20 focus:outline-none focus:border-yellow-400' />
        <textarea name='message' rows={4} placeholder='What do you need?' required className='p-3 rounded-xl bg-zinc-900 text-white border border-yellow-500/20 focus:outline-none focus:border-yellow-400 resize-none' />
        <button type='submit' className='px-5 py-3 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition'>Request Quote</button>
      </form>
    );
  }

  return (
    <div className='min-h-screen font-sans bg-black text-white'>
      <nav className='sticky top-0 z-20 bg-black/95 backdrop-blur border-b border-yellow-500/10 px-8 py-5 flex justify-between items-center'>
        <button onClick={() => navigateTo('home')} className='flex items-center gap-4'>
          <img
                    src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png'
                    alt='Sulcru Organic Logo' className='w-20 h-20 object-contain drop-shadow-2xl' />
        </button>

        <div className='hidden md:flex gap-10 text-sm font-semibold tracking-wide uppercase'>
          <button onClick={() => navigateTo('home')} className={`hover:text-yellow-400 transition pb-1 ${page === 'home' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>Home</button>
          <button onClick={() => navigateTo('about')} className={`hover:text-yellow-400 transition pb-1 ${page === 'about' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>About Us</button>
          <button onClick={() => navigateTo('products')} className={`hover:text-yellow-400 transition pb-1 ${page === 'products' || page === 'product' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>Shop</button>
          <button onClick={() => navigateTo('ingredients')} className={`hover:text-yellow-400 transition pb-1 ${page === 'ingredients' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>Ingredients</button>
          <button onClick={() => navigateTo('benefits')} className={`hover:text-yellow-400 transition pb-1 ${page === 'benefits' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>Benefits</button>
          <button onClick={() => navigateTo('contact')} className={`hover:text-yellow-400 transition pb-1 ${page === 'contact' ? 'border-b-2 border-yellow-400 text-yellow-400' : ''}`}>Contact</button>
        </div>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className='md:hidden text-yellow-400 text-3xl px-2'
          >
            ☰
          </button>
          <button onClick={() => navigateTo('products')} className='hidden md:block px-6 py-3 rounded-2xl border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold'>SHOP NOW →</button>
        </div>
      </nav>

      {page === 'home' && (
        <main className='overflow-hidden bg-black'>
          <section className='relative min-h-[92vh] border-b border-yellow-500/10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_30%),linear-gradient(to_right,#000000,#050505,#000000)]'>
            <div className='absolute inset-0 opacity-20 bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80)] bg-cover bg-center'></div>

            <div className='relative z-10 grid lg:grid-cols-2 gap-10 items-center px-10 lg:px-20 py-16 lg:py-24'>
              <div className='max-w-2xl'>
                <p className='text-yellow-400 uppercase tracking-[0.25em] font-semibold mb-6 text-sm'>Pure By Nature. Powered By Science.</p>

                <h1 className='text-5xl md:text-7xl font-black leading-[0.95] mb-8'>
                  Premium Organic
                  <br />
                  Agricultural Solutions
                  <br />
                  <span className='text-yellow-400'>for Better Growth</span>
                </h1>

                <p className='text-zinc-300 text-xl leading-relaxed max-w-xl mb-10'>
                  High-performance organic agricultural products developed to improve soil health, strengthen plant development, increase crop productivity, and support sustainable farming systems.
                </p>

                <div className='flex flex-wrap gap-5'>
                  <button onClick={() => setShowQuote(true)} className='px-10 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition'>REQUEST A QUOTE</button>

                  <button onClick={() => navigateTo('benefits')} className='px-10 py-4 rounded-2xl border border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition'>LEARN MORE</button>
                </div>
              </div>

              <div className='relative flex justify-center items-center'>
                <div className='absolute w-[32rem] h-[32rem] rounded-full bg-yellow-400/20 blur-3xl'></div>

                <img
                  src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png'
                  alt='Sulcru Organic Premium Agriculture'
                  className='relative z-10 w-full max-w-3xl object-contain drop-shadow-[0_0_60px_rgba(255,215,0,0.35)]'
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

          <section className='px-6 lg:px-20 py-20 bg-gradient-to-b from-black to-zinc-950 border-t border-yellow-500/10'>
            <div className='text-center mb-12'>
              <p className='text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4'>Real Agricultural Results</p>
              <h2 className='text-4xl lg:text-5xl font-black'>Results From Healthy Soil & Stronger Growth</h2>
            </div>

            <div className='overflow-x-auto pb-4'>
              <div className='flex gap-8 min-w-max'>
                {[
                  {
                    title: 'Improved Vegetable Growth',
                    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
                    text: 'Healthier crop development supported through biologically balanced growing systems.'
                  },
                  {
                    title: 'Stronger Root Zones',
                    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
                    text: 'Improved soil vitality contributes to stronger plant establishment and resilience.'
                  },
                  {
                    title: 'Healthier Crop Production',
                    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
                    text: 'Balanced agricultural support for vigorous crop performance and productivity.'
                  },
                  {
                    title: 'Improved Soil Performance',
                    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
                    text: 'Enhanced biological activity and healthier growing environments.'
                  }
                ].map((slide) => (
                  <div
                    key={slide.title}
                    className='group relative w-[340px] overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950 text-left hover:border-yellow-400/60 transition'
                  >
                    <div
                      className='h-72 bg-cover bg-center transition duration-500 group-hover:scale-105'
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />

                    <div className='p-6'>
                      <h3 className='text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition'>
                        {slide.title}
                      </h3>

                      <p className='text-zinc-400 leading-relaxed'>
                        {slide.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      )}

      {page === 'products' && (
        <main className='p-10'>
          <button onClick={() => navigateTo('home')} className='mb-6 px-4 py-2 border rounded-xl'>← Back Home</button>
          <h1 className='text-5xl font-bold mb-8'>Our Product Range</h1>
          <div className='grid md:grid-cols-2 gap-6'>
            {products.map((p) => (
              <button key={p.name} onClick={() => openProduct(p)} className={`${card} overflow-hidden text-left`}>
                <div className='h-40 bg-cover bg-center' style={{ backgroundImage: `url(${p.image})` }} />
                <div className='p-6'>
                  <h2 className='text-2xl font-semibold mb-2'>{p.name}</h2>
                  <p>{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </main>
      )}

      {page === 'about' && (
        <main className='bg-black min-h-screen px-6 lg:px-12 py-20'>
          <div className='max-w-7xl mx-auto'>
            <button onClick={() => navigateTo('home')} className='mb-10 px-5 py-3 border border-yellow-500/30 rounded-2xl hover:border-yellow-400 hover:text-yellow-400 transition'>← Back Home</button>

            <div className={`${card} p-10 lg:p-14`}>
              <h1 className='text-5xl lg:text-6xl font-black mb-10 text-white'>About Sulcru Organic</h1>

              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <img
                    src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png'
                    alt='About Sulcru Organic'
                    className='w-full max-w-2xl mx-auto object-contain drop-shadow-[0_0_60px_rgba(255,215,0,0.25)]'
                  />
                </div>

                <div className='text-zinc-300 leading-relaxed text-lg space-y-6'>
                  <p>
                    Sulcru Organic supplies premium organic agricultural products developed to support healthier soils, stronger plant growth, improved crop resilience, and sustainable long-term productivity.
                  </p>

                  <p>
                    Our solutions are trusted by commercial farms, nurseries, landscapers, home growers, and agricultural operations seeking effective organic performance with modern regenerative practices.
                  </p>

                  <p>
                    We focus on restoring natural balance within agricultural systems through biologically supportive formulations that work alongside nature rather than against it.
                  </p>

                  <p>
                    With a commitment to quality, consistency, and practical field results, Sulcru Organic continues building reliable agricultural solutions for modern farming environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {page === 'ingredients' && (
        <main className='bg-black min-h-screen px-6 lg:px-12 py-20'>
          <div className='max-w-7xl mx-auto'>
            <button onClick={() => navigateTo('home')} className='mb-10 px-5 py-3 border border-yellow-500/30 rounded-2xl hover:border-yellow-400 hover:text-yellow-400 transition'>← Back Home</button>

            <div className={`${card} p-10 lg:p-14`}>
              <h1 className='text-5xl lg:text-6xl font-black mb-10 text-white'>Ingredients & Formulation Philosophy</h1>

              <div className='grid lg:grid-cols-3 gap-8'>
                <div className={`${soft} p-8`}>
                  <h3 className='text-2xl font-bold text-yellow-400 mb-4'>Organic Inputs</h3>
                  <p className='text-zinc-300 leading-relaxed'>Sulcru Organic products are developed using carefully selected organic-compatible ingredients designed to support soil biology, plant vitality, and sustainable agricultural systems.</p>
                </div>

                <div className={`${soft} p-8`}>
                  <h3 className='text-2xl font-bold text-yellow-400 mb-4'>Biological Support</h3>
                  <p className='text-zinc-300 leading-relaxed'>Our formulations are designed to work alongside natural biological processes to improve nutrient cycling, soil activity, plant resilience, and overall crop performance.</p>
                </div>

                <div className={`${soft} p-8`}>
                  <h3 className='text-2xl font-bold text-yellow-400 mb-4'>Sustainable Agriculture</h3>
                  <p className='text-zinc-300 leading-relaxed'>We prioritise environmentally responsible agricultural practices that support long-term soil health, reduced chemical dependency, and regenerative farming principles.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {page === 'benefits' && (
        <main className='bg-black min-h-screen px-6 lg:px-12 py-20'>
          <div className='max-w-7xl mx-auto'>
            <button onClick={() => navigateTo('home')} className='mb-10 px-5 py-3 border border-yellow-500/30 rounded-2xl hover:border-yellow-400 hover:text-yellow-400 transition'>← Back Home</button>

            <div className={`${card} p-10 lg:p-14`}>
              <h1 className='text-5xl lg:text-6xl font-black mb-10 text-white'>Why Choose Sulcru Organic</h1>

              <div className='grid lg:grid-cols-2 gap-8'>
                <div className={`${soft} p-8`}>
                  <h3 className='text-3xl font-bold text-yellow-400 mb-4'>Healthier Soil Systems</h3>
                  <p className='text-zinc-300 leading-relaxed text-lg'>Our products are developed to support soil biology, improve nutrient availability, and encourage healthier root-zone environments for long-term agricultural sustainability.</p>
                </div>

                <div className={`${soft} p-8`}>
                  <h3 className='text-3xl font-bold text-yellow-400 mb-4'>Improved Plant Performance</h3>
                  <p className='text-zinc-300 leading-relaxed text-lg'>Sulcru Organic formulations help support stronger vegetative growth, improved resilience, and more consistent crop development throughout the growing cycle.</p>
                </div>

                <div className={`${soft} p-8`}>
                  <h3 className='text-3xl font-bold text-yellow-400 mb-4'>Organic & Regenerative Focus</h3>
                  <p className='text-zinc-300 leading-relaxed text-lg'>We prioritise environmentally responsible agricultural practices that align with regenerative farming systems and sustainable crop production.</p>
                </div>

                <div className={`${soft} p-8`}>
                  <h3 className='text-3xl font-bold text-yellow-400 mb-4'>Trusted Across Farming Systems</h3>
                  <p className='text-zinc-300 leading-relaxed text-lg'>Our solutions are suitable for commercial farms, nurseries, home growers, landscaping applications, and a wide range of agricultural environments.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {page === 'contact' && (
        <main className='p-10'>
          <button onClick={() => navigateTo('home')} className='mb-6 px-4 py-2 border rounded-xl'>← Back Home</button>
          <div className={`${card} max-w-4xl mx-auto p-8`}>
            <h1 className='text-5xl font-bold mb-6'>Contact Us</h1>
            <p>Phone / WhatsApp: 061 514 1042</p>
            <p>Email: {email}</p>
            <p className='mt-4'>Monday - Friday: 09:00 - 17:00</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday / Holiday: Closed</p>
            <a href={`https://wa.me/${phone}`} target='_blank' rel='noreferrer' className='inline-block mt-6 px-6 py-3 rounded-2xl bg-green-500 text-white hover:bg-green-400'>Chat on WhatsApp</a>
            <QuoteForm />
          </div>
        </main>
      )}

      {page === 'product' && selectedProduct && (
        <main className='p-10'>
          <div className='flex gap-3 mb-6'>
            <button onClick={() => navigateTo('products')} className='px-4 py-2 border rounded-xl'>← Back to Products</button>
            <button onClick={() => navigateTo('home')} className='px-4 py-2 border rounded-xl'>Home</button>
          </div>
          <div className={`${card} max-w-4xl mx-auto overflow-hidden`}>
            <div className='h-72 bg-cover bg-center' style={{ backgroundImage: `url(${selectedProduct.image})` }} />
            <div className='p-8'>
              <h1 className='text-5xl font-bold mb-4'>{selectedProduct.name}</h1>
              <p className='text-xl mb-6'>{selectedProduct.desc}</p>

              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className={`${soft} p-5`}>
                  <h3 className='text-xl font-semibold mb-3'>Key Benefits</h3>
                  <ul className='list-disc pl-5 space-y-2'>
                    {selectedProduct.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>

                <div className={`${soft} p-5`}>
                  <h3 className='text-xl font-semibold mb-3'>Recommended Use</h3>
                  <p>{selectedProduct.use}</p>
                </div>
              </div>

              <div className={`${soft} p-5 mb-8`}>
                <h3 className='text-xl font-semibold mb-3'>Performance</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  {selectedProduct.performance.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>

              {selectedProduct.name === 'Compost Boost' && (
                <div className={`${soft} p-5 mb-8`}>
                  <h3 className='text-xl font-semibold mb-3'>Recommended Dilutions</h3>
                  <p>Compost: 1:20</p>
                  <p>Heavy Waste Piles: 1:10</p>
                  <p>Maintenance: 1:30</p>
                </div>
              )}

              {selectedProduct.name === 'Sulcru Insect Repel' && (
                <>
                  <div className={`${soft} p-5 mb-8`}>
                    <h3 className='text-xl font-semibold mb-3'>Target Pests</h3>
                    <ul className='list-disc pl-5 space-y-2'>
                      {selectedProduct.pests.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>

                  <div className={`${soft} p-5 mb-8`}>
                    <h3 className='text-xl font-semibold mb-3'>Application Guide</h3>
                    <ul className='list-disc pl-5 space-y-2'>
                      {selectedProduct.application.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>

                  <div className={`${soft} p-5 mb-8`}>
                    <h3 className='text-xl font-semibold mb-3'>Safety & Best Practice</h3>
                    <ul className='list-disc pl-5 space-y-2'>
                      {selectedProduct.safety.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </>
              )}

              <button onClick={() => setShowQuote(true)} className='px-6 py-3 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300'>Request Quote</button>
            </div>
          </div>
        </main>
      )}

      {showQuote && (
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4'>
          <div className='bg-zinc-950 text-white rounded-3xl shadow-2xl border border-yellow-500/20 max-w-xl w-full p-8 relative'>
            <button onClick={() => setShowQuote(false)} className='absolute top-4 right-4 text-zinc-400 hover:text-yellow-400 text-2xl'>×</button>
            <h3 className='text-3xl font-bold text-yellow-400 mb-2'>Request a Quote</h3>
            <p className='text-zinc-400 mb-6'>Tell us what you need and we will contact you promptly.</p>
            <QuoteForm />
          </div>
        </div>
      )}


      {mobileMenuOpen && (
        <>
          <div className='fixed inset-0 bg-black/70 z-40' onClick={() => setMobileMenuOpen(false)} />
          <div className='fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-yellow-500/20 z-50 p-8'>
            <button onClick={() => setMobileMenuOpen(false)} className='text-3xl text-yellow-400 mb-8'>×</button>
            <div className='flex flex-col gap-6 text-lg uppercase font-semibold'>
              <button onClick={() => {navigateTo('home'); setMobileMenuOpen(false);}}>Home</button>
              <button onClick={() => {navigateTo('about'); setMobileMenuOpen(false);}}>About Us</button>
              <button onClick={() => {navigateTo('products'); setMobileMenuOpen(false);}}>Shop</button>
              <button onClick={() => {navigateTo('ingredients'); setMobileMenuOpen(false);}}>Ingredients</button>
              <button onClick={() => {navigateTo('benefits'); setMobileMenuOpen(false);}}>Benefits</button>
              <button onClick={() => {navigateTo('contact'); setMobileMenuOpen(false);}}>Contact</button>
            </div>
          </div>
        </>
      )}

      <footer className='px-10 py-10 text-center text-sm text-zinc-400 border-t border-yellow-500/20 bg-black'>
        <div className='mb-4 flex justify-center gap-6'>
          <a href='https://www.instagram.com/sulcruorganic/' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Instagram</a>
          <a href='https://facebook.com/sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Facebook</a>
          <a href='https://www.youtube.com/@SulcruOrganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>YouTube</a>
          <a href='https://www.tiktok.com/@sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>TikTok</a>
        </div>
        Sulcru Organic © 2026 • Belfast, South Africa
      </footer>
    </div>
  );
}
