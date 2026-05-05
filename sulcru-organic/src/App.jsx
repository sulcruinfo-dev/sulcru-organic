import { useState } from 'react';

export default function SulcruOrganic() {
  const [page, setPage] = useState('home');
  const [showQuote, setShowQuote] = useState(false);
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
      <nav className='sticky top-0 z-20 bg-black/90 backdrop-blur border-b border-yellow-500/20 px-6 py-4 flex justify-between items-center'>
        <button onClick={() => setPage('home')} className='flex items-center gap-3 text-2xl font-bold text-yellow-400'>
          <img src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png' className='w-10 h-10 object-contain' />
          <span>Sulcru Organic</span>
        </button>
        <div className='flex gap-4'>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Products</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </div>
      </nav>

      {page === 'home' && (
        <main className='p-10 space-y-10 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.08),transparent_30%)]'>
          <p className='text-xl text-yellow-400 text-center'>Premium Organic Agricultural Solutions</p>
          <section className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='text-center'>
              <img src='https://plain-eeur-prod-public.komododecks.com/202605/04/rOjpVcKC9rFmXFlCuWxE/image.png' className='w-[24rem] h-[24rem] object-contain mx-auto mb-6 drop-shadow-2xl' />
              
              
              <div className='flex gap-4 justify-center flex-wrap'>
                <button onClick={() => setShowQuote(true)} className='px-6 py-3 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300'>Request Quote</button>
                <button onClick={() => setPage('products')} className='px-6 py-3 rounded-2xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'>View Products</button>
                <a href={`https://wa.me/${phone}`} target='_blank' rel='noreferrer' className='px-6 py-3 rounded-2xl bg-green-500 text-white hover:bg-green-400'>WhatsApp</a>
              </div>
            </div>
            <div className='rounded-3xl overflow-hidden shadow-2xl min-h-[420px] border border-yellow-500/20'>
              <img src='https://plain-eeur-prod-public.komododecks.com/202605/04/WS8LS4W0zblKmnAuu0v1/image.jpg' className='w-full h-full object-cover' />
            </div>
            
          </section>

          <section className='max-w-4xl mx-auto'>
            <div className={`${card} p-8`}>
              <h2 className='text-3xl font-semibold mb-4'>About Us</h2>
              <p className='mb-4'>Sulcru Organic is dedicated to supplying premium organic agricultural solutions that improve soil health, strengthen plant development, and support long-term sustainable productivity across all farming systems.</p>
              <p className='mb-4'>Our products are developed for commercial farms, nurseries, home growers, landscapers, and agricultural operations seeking reliable performance through environmentally responsible methods.</p>
              <p className='mb-4'>We focus on restoring natural balance in the soil, enhancing crop vitality, and helping growers achieve stronger yields with healthier land stewardship.</p>
              <p>With a commitment to quality, innovation, and practical field results, Sulcru Organic aims to be a trusted partner in modern regenerative agriculture.</p>
            </div>
          </section>
        </main>
      )}

      {page === 'products' && (
        <main className='p-10'>
          <button onClick={() => setPage('home')} className='mb-6 px-4 py-2 border rounded-xl'>← Back Home</button>
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

      {page === 'contact' && (
        <main className='p-10'>
          <button onClick={() => setPage('home')} className='mb-6 px-4 py-2 border rounded-xl'>← Back Home</button>
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
            <button onClick={() => setPage('products')} className='px-4 py-2 border rounded-xl'>← Back to Products</button>
            <button onClick={() => setPage('home')} className='px-4 py-2 border rounded-xl'>Home</button>
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
