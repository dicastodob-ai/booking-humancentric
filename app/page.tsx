import React from 'react';

export default function BookingPortal() {
  return (
    <div className="w-full">
      
      {/* 1. HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 w-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored">
              <img src="https://www.lduhtrp.net/image-101825316-14398479" alt="Booking.com Official Partner" className="h-10 object-contain" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Australia</a>
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="text-blue-600 hover:text-blue-700 transition">Ofertas -15%</a>
          </nav>
        </div>
      </header>

      {/* 2. BARRA OFERTAS */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 w-full">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm font-medium text-amber-900">
           <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="hover:underline flex flex-col md:flex-row justify-center items-center gap-2">
              <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">OFERTA FLASH</span>
              <span>Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.</span>
              <img src="https://www.awltovhc.com/image-101825316-17301956" width="1" height="1" alt="" className="hidden" />
           </a>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative w-full bg-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" alt="Viajes y Alojamientos" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Encuentra tu próximo alojamiento</h1>
          <p className="text-lg text-slate-200">Compara millones de hoteles y apartamentos con cancelación gratuita.</p>
          <div className="mt-8">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition">
              Buscar Hoteles Ahora
            </a>
          </div>
        </div>
      </section>

      {/* 4. CUADRÍCULA Y DESTINOS */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Destinos Top Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="group block w-full">
                <div className="h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
                  <img src="https://www.tqlkg.com/image-101825316-17314768" alt="Sydney Australia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90" />
                  <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Sydney y Australia (Top 1)</div>
                </div>
              </a>

              <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block w-full">
                <div className="h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" alt="Roma Italia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
                  <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Roma, Italia (Top 2)</div>
                </div>
              </a>

              <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block w-full">
                <div className="h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" alt="Londres UK" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
                  <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Londres, Reino Unido (Top 3)</div>
                </div>
              </a>

              <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="group block w-full">
                <div className="h-64 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-4 border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" alt="Escapadas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
                  <div className="relative z-10 bg-white/95 px-3 py-1.5 rounded shadow text-blue-900 font-bold text-sm">Escapadas - 15% Descuento</div>
                </div>
              </a>

            </div>
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-6 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patrocinado Oficial</h3>
            
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center w-full">
              <a href="https://www.anrdoezrs.net/click-101825316-17314845" target="_blank" rel="noopener sponsored" className="w-full flex justify-center">
                <img src="https://www.ftjcfx.com/image-101825316-17314845" alt="Booking Australia Banner" className="max-w-full h-auto rounded-lg shadow-sm" />
              </a>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md text-center space-y-4 w-full">
              <h4 className="font-bold text-lg leading-tight">¿Necesitas asistencia en tu reserva?</h4>
              <p className="text-sm text-blue-200">Accede al catálogo global con total garantía.</p>
              <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold px-4 py-3 rounded-lg text-sm transition w-full shadow">
                Ver Todas las Ofertas
              </a>
            </div>
          </aside>

        </div>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-xs border-t border-slate-800 w-full mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <p className="max-w-3xl mx-auto">
            * Aviso de Afiliación: Este sitio web participa en el programa de afiliados de Booking.com a través de CJ Affiliate. Las reservas completadas a través de nuestros enlaces generan una comisión sin coste adicional para ti.
          </p>
          <p>© {new Date().getFullYear()} Humancentric.online — Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}