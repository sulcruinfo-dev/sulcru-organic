export default function Footer() {
  return (
    <footer className='px-10 py-10 text-center text-sm text-zinc-400 border-t border-yellow-500/20 bg-black'>
      <div className='mb-4 flex justify-center gap-6'>
        <a href='https://www.instagram.com/sulcruorganic/' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Instagram</a>
        <a href='https://facebook.com/sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>Facebook</a>
        <a href='https://www.youtube.com/@SulcruOrganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>YouTube</a>
        <a href='https://www.tiktok.com/@sulcruorganic' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>TikTok</a>
      </div>
      <div className="mt-6 text-zinc-400 space-y-1">

  <p>
    General Enquiries:
    <br />
    <a
      href="mailto:info@sulcruorganic.co.za"
      className="hover:text-yellow-400"
    >
      info@sulcruorganic.co.za
    </a>
  </p>

  <p>
    Biotechnology & Research:
    <br />
    <a
      href="mailto:biotech@sulcruorganic.co.za"
      className="hover:text-yellow-400"
    >
      biotech@sulcruorganic.co.za
    </a>
  </p>

</div>
      Sulcru Organic © 2026 • Belfast, South Africa
    </footer>
  );
}
