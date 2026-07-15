export default function ProductList({
  products,
  openProduct,
  card,
  navigateTo,
}) {
   return (
     <>
  <button
    onClick={() => navigateTo('home')}
    className='mb-6 px-4 py-2 border rounded-xl'
  >
    ← Back Home
  </button>

  <h1 className='text-5xl font-bold mb-8'>Our Product Range</h1>

  <div className='grid md:grid-cols-2 gap-6'>
    {products.map((p) => (
      <button
        key={p.name}
        onClick={() => openProduct(p)}
        className={`${card} overflow-hidden text-left`}
      >
        <div
          className='h-40 bg-cover bg-center'
          style={{ backgroundImage: `url(${p.image})` }}
        />

        <div className='p-6'>
          <h2 className='text-2xl font-semibold mb-2'>{p.name}</h2>
          <p>{p.desc}</p>
        </div>
      </button>
    ))}
  </div>
</>
  );
}



