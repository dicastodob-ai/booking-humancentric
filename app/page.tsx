import React from 'react';

export default function BookingPortal() {
  // Matriz de 5 destinos con URLs externas 100% garantizadas (Sídney corregido)
  const destinations = [
    { title: "Sídney, Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-17314768", tag: "Top 1" },
    { title: "Roma, Italia", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 2" },
    { title: "Londres, Reino Unido", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 3" },
    { title: "París, Francia", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", url: "https://www.dpbolvw.net/click-101825316-17301956", tag: "Oferta -15%" },
    { title: "Melbourne, Australia", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-17314768", tag: "Recomendado" }
  ];

  // Generamos los 30 productos automáticamente
  const products = Array.from({ length: 30 }).map((_, i) => ({
    ...destinations[i % destinations.length],
    id: i
  }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="flex items-center">
              <img src="https://www.lduhtrp.net/image-101825316-14398479" alt="Booking.com Official Partner" className="h-10 md:h-12 object-contain" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Australia</a>
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="text-blue-600 hover:text-blue-700 transition">Ofertas -15%</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" alt="Viajes y Alojamientos" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Garantía de Mejor Precio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Encuentra tu próximo alojamiento ideal</h1>
          
          <div className="bg-white p-4 rounded-2xl shadow-2xl max-w-2xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <div className="w-full text-left px-4 py-2 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium">
                📍 ¿A dónde quieres viajar?
              </div>
              <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition text-center shadow-md whitespace-nowrap">
                Buscar Hoteles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA FLASH */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 px-4 text-center text-sm font-medium text-amber-900">
         <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="hover:underline inline-flex flex-wrap justify-center items-center gap-2">
            <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">OFERTA FLASH</span>
            Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.
            <img src="https://www.awltovhc.com/image-101825316-17301956" width="1" height="1" alt="" className="hidden" />
         </a>
      </div>

      {/* CUADRÍCULA DE 30 PRODUCTOS Y SIDEBAR */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Nuestros 30 Destinos Recomendados</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noopener sponsored" className="group block w-full h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" 
                />
                <div className="relative z-10 w-full flex justify-between items-center">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">
                    {item.title}
                  </div>
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SIDEBAR PATROCINADO */}
        <aside className="w-full lg:w-[350px] flex flex-col gap-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patrocinado Oficial</h3>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center">
            <a href="https://www.anrdoezrs.net/click-101825316-17314845" target="_blank" rel="noopener sponsored">
              <img src="https://www.ftjcfx.com/image-101825316-17314845" width="336" height="280" alt="Booking Australia Banner" className="rounded-lg shadow-sm" />
            </a>
          </div>
        </aside>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-xs border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p>* Aviso de Afiliación: Este sitio web participa en el programa de afiliados de Booking.com a través de CJ Affiliate.</p>
        </div>
      </footer>

    </div>
  );
}
