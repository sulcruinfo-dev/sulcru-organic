export default function Footer() {
  return (
    <footer className='px-10 py-10 text-center text-sm text-zinc-400 border-t border-yellow-500/20 bg-black'>
      <div className='mb-4 flex justify-center gap-6'>
        <a href='https://www.instagram.com/sulcruorganic/' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Instagram</a>
        <a href='https://facebook.com/sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Facebook</a>
        <a href='https://www.youtube.com/@SulcruOrganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>YouTube</a>
        <a href='https://www.tiktok.com/@sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>TikTok</a>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

  <div>
    <h4 className="text-white font-semibold mb-2">
      General Enquiries
    </h4>

    <a
      href="mailto:info@sulcruorganic.co.za"
      className="text-zinc-400 hover:text-yellow-400 transition"
    >
      info@sulcruorganic.co.za
    </a>
  </div>

  <div>
    <h4 className="text-white font-semibold mb-2">
      Technical & Biotechnology
    </h4>

    <a
      href="mailto:biotech@sulcruorganic.co.za"
      className="text-zinc-400 hover:text-yellow-400 transition"
    >
      biotech@sulcruorganic.co.za
    </a>
  </div>

</div>
      Sulcru Organic © 2026 • Belfast, South Africa
    </footer>
  );
}
