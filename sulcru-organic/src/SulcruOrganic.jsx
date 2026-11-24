        href="mailto:biotech@sulcruorganic.co.za"
        className="text-zinc-300 hover:text-yellow-400 transition"
      >
        biotech@sulcruorganic.co.za
      </a>
    </div>

  </div>

  <div>
    <p>Monday - Friday: 09:00 - 17:00</p>
    <p>Saturday: By Appointment</p>
    <p>Sunday / Holiday: Closed</p>
  </div>

</div>
            <a href={`https://wa.me/${whatsappNumber}`} target='_blank' rel='noreferrer' className='inline-block mt-1 px-6 py-3 rounded-2xl bg-green-500 text-white hover:bg-green-400'>Chat on WhatsApp</a>
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
             <button onClick={() => {navigateTo('solutions'); setMobileMenuOpen(false);}}>Solutions</button>
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
