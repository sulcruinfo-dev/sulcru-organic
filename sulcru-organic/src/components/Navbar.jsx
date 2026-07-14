export default function Navbar({
  navigateTo,
  page,
  setMobileMenuOpen,
}) {
return (
  <nav className='sticky top-0 z-20 bg-black/75 md:bg-black/95 backdrop-blur-md border-b border-yellow-500/10 px-8 py-5 flex justify-between items-center'>        <button onClick={() => navigateTo('home')} className='flex items-center gap-4'>
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
 );
}
