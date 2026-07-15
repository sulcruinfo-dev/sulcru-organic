'use client';
 
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function SulcruOrganic() {
  const location = useLocation();
  const navigate = useNavigate();

  const page =
    location.pathname === '/'
      ? 'home'
      : location.pathname.substring(1);

  const [showQuote, setShowQuote] = useState(false);
const [quoteSuccess, setQuoteSuccess] = useState(false);
const [loading, setLoading] = useState(false);
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
    
  ];

  const card = 'bg-zinc-950 rounded-3xl shadow-2xl border border-yellow-500/20';
  const soft = 'bg-zinc-900 rounded-2xl border border-yellow-500/20';

  function openProduct(product) {
  setSelectedProduct(product);
  navigate('/product');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  function navigateTo(pageName) {
  const route = pageName === 'home' ? '/' : `/${pageName}`;
  navigate(route);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  function submitQuote(e) {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const name = form.get('name');
const phone = form.get('phone');
const userEmail = form.get('email');
const product = form.get('product');
const hectares = form.get('hectares');
const message = form.get('message');

  setLoading(true);
   emailjs.send(
  'service_lznck7j',
  'template_5yedwhb',
  {
    name: name,
    phone: phone,
    email: userEmail,
    product: product,
    hectares: hectares,
    message: message,
  },
  'uiD8dtDSIdfEYu9Ik'
)
  .then(() => {
   emailjs.send(
  'service_lznck7j',
  'template_uvmqgih',
  {
    name: name,
    email: userEmail,
    phone: phone,
    product: product,
    hectares: hectares,
    message: message,
  },
  'uiD8dtDSIdfEYu9Ik'
);
    setLoading(false); 
    setShowQuote(false);
    setQuoteSuccess(true);
  })
  .catch((error) => {
   setLoading(false);
    console.error(error);
    alert('Failed to send quote request.');
  });
}

  function QuoteForm() {
    return (
      <form onSubmit={submitQuote} className="space-y-4">

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  />

  <select
    name="product"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  >
    <option value="">Select Product</option>
    <option>Crop Boost</option>
    <option>Soil Improver</option>
    <option>Plant Gro+</option>
    <option>Compost Boost</option>
    <option>Other</option>
  </select>

  <input
    type="text"
    name="hectares"
    placeholder="Farm Size / Hectares"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Tell us about your crop, farm, or requirements..."
    required
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500/20"
  />

  <button
    type="submit"
   disabled={loading}
    className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl"
  >
    {loading ? "Sending..." : "Request Quote"}
  </button>

</form>
    );
  }

  return (
   <>
    <div className='min-h-screen font-sans bg-black text-white'>
<Navbar
  navigateTo={navigateTo}
  page={page}
  setMobileMenuOpen={setMobileMenuOpen}
/>

      {page === 'home' && (
        <main className='overflow-hidden bg-black'>
         <Hero navigateTo={navigateTo} />
          <section className='px-6 lg:px-20 py-20 bg-gradient-to-b from-black to-zinc-950 border-t border-yellow-500/10'>
            <div className='text-center mb-12'>
              <p className='text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4'>Real Agricultural Results</p>
              <h2 className='text-4xl lg:text-5xl font-black'>Results From Healthy Soil & Stronger Growth</h2>
            </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    className='group relative w-full overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950 text-left hover:border-yellow-400/60 transition'
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
          </section>


          <section className='px-6 lg:px-20 py-16 text-center bg-black'>
            <h2 className='text-3xl lg:text-4xl font-black mb-4'>Ready to Grow With Sulcru Organic?</h2>
            <p className='text-zinc-400 max-w-2xl mx-auto mb-8'>
              Contact us today for pricing, product recommendations and application guidance.
            </p>
            <button onClick={() => setShowQuote(true)} className='px-10 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition'>
              REQUEST A QUOTE
            </button>
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

      <Footer />
    </div>

{quoteSuccess && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="bg-zinc-900 border border-yellow-400 rounded-2xl p-8 max-w-md text-center">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Thank You!
      </h2>

      <p className="text-zinc-300 mb-6">
        Your quote request has been received successfully.
        A member of the Sulcru Organic team will contact you shortly.
      </p>

      <button
        onClick={() => setQuoteSuccess(false)}
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300"
      >
        Close
      </button>
    </div>
  </div>
)}
<FloatingWhatsApp />
</>
); 
}
