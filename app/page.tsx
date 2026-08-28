import React from 'react';

export default function BookingPortal() {
  // Matriz de destinos con URLs externas 100% garantizadas
  const destinations = [
    { title: "Sídney, Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-17314768", tag: "Top 1" },
    { title: "Roma, Italia", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 2" },
    { title: "Londres, Reino Unido", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", url: "https://www.tkqlhce.com/click-101825316-14398479", tag: "Top 3" },
    { title: "París, Francia", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80", url: "https://www.dpbolvw.net/click-101825316-17301956", tag: "Oferta -15%" },
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
        </div>
      </header>

      {/* CUADRÍCULA DE 30 PRODUCTOS */}
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
                </div>
              </a>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
