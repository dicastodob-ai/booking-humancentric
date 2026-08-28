import React from 'react';

export default function BookingPortal() {
  // Matriz con URLs externas 100% garantizadas para evitar fallos de imágenes locales
  const destinations = [
    { title: "Sídney, Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-17314768", tag: "Top 1" },
    { title: "Roma, Italia", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 2" },
    { title: "Londres, Reino Unido", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 3" },
    { title: "París, Francia", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80", url: "https://www.dpbolvw.net/click-101825316-17301956", tag: "Oferta -15%" },
    { title: "Costa Amalfitana", img: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cb3a?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Tendencia" },
    { title: "Melbourne, Australia", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-17314768", tag: "Recomendado" }
  ];

  // Generamos los 30 productos para rellenar la cuadrícula
  const products = Array.from({ length: 30 }).map((_, i) => ({
    ...destinations[i % destinations.length],
    id: i
  }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="flex items-center">
            <img src="https://www.lduhtrp.net/image-101825316-14398479" alt="Booking.com Official Partner" className="h-10 md:h-12 object-contain" />
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-bold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Australia</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" alt="Fondo Viajes" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Encuentra tu próximo alojamiento</h1>
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition">
            Buscar Hoteles
          </a>
        </div>
      </section>

      {/* CUADRÍCULA DE 30 PRODUCTOS SEGURA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Nuestros 30 Destinos Destacados</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener sponsored" className="group flex flex-col bg-slate-900 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden relative h-64">
              
              {/* Foto Externa Garantizada */}
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
              
              {/* Textos */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-white text-lg drop-shadow-md">{item.title}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-600 text-white px-2 py-1 rounded shadow">
                    {item.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-xs border-t border-slate-800 text-center">
        <p>* Aviso de Afiliación: Este sitio web participa en el programa de afiliados de Booking.com a través de CJ Affiliate.</p>
      </footer>
    </div>
  );
}
