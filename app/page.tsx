import React from 'react';

export default function BookingPortal() {
  return (
    <div className="w-full font-sans text-slate-900 bg-slate-50 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 w-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored">
            <img src="https://www.lduhtrp.net/image-101825316-14398479" alt="Booking.com Partner" className="h-10 object-contain" />
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Australia</a>
          </nav>
        </div>
      </header>

      {/* OFERTA FLASH */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 w-full text-center text-sm font-medium text-amber-900">
        <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="hover:underline flex flex-wrap justify-center items-center gap-2">
          <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">OFERTA FLASH</span>
          <span>Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.</span>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full bg-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover opacity-40" alt="Fondo" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Encuentra tu próximo alojamiento</h1>
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg">
            Buscar Hoteles Ahora
          </a>
        </div>
      </section>

      {/* MAIN CONTENT Y DESTINOS */}
      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Destinos Top Recomendados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* SÍDNEY */}
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="group block w-full h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
              <img src="/image_1e25a2.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" alt="Sydney Australia" />
              <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Sídney y Australia</div>
            </a>

            {/* ROMA */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block w-full h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
              <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" alt="Roma Italia" />
              <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Roma, Italia</div>
            </a>

            {/* LONDRES */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block w-full h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
              <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" alt="Londres UK" />
              <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Londres, Reino Unido</div>
            </a>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 flex flex-col gap-6 flex-shrink-0">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patrocinado Oficial</h3>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center w-full">
            <a href="https://www.anrdoezrs.net/click-101825316-17314845" target="_blank" rel="noopener sponsored" className="w-full flex justify-center">
              <img src="https://www.ftjcfx.com/image-101825316-17314845" alt="Booking Australia Banner" className="max-w-full h-auto rounded-lg shadow-sm" />
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
}
