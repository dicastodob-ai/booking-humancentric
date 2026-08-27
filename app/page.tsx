import React from 'react';

export default function BookingPortal() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. HEADER / CABECERA CON EL LOGO / ENLACE PANORÁMICO DE ITALIA */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a 
              href="https://www.tkqlhce.com/click-101825316-14398479" 
              target="_blank" 
              rel="noopener sponsored"
              className="flex items-center"
            >
              <img 
                src="https://www.lduhtrp.net/image-101825316-14398479" 
                alt="Booking.com Official Partner - Italy" 
                className="h-10 md:h-12 object-contain"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Australia</a>
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="text-blue-600 hover:text-blue-700 transition">Ofertas -15%</a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION CON FONDO INMERSIVO Y BUSCADOR */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" 
            alt="Viajes y Alojamientos" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Garantía de Mejor Precio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Encuentra tu próximo alojamiento ideal
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Compara millones de hoteles, resorts y apartamentos en todo el mundo con cancelación gratuita.
          </p>
          
          <div className="bg-white p-4 rounded-2xl shadow-2xl max-w-2xl mx-auto text-slate-900 mt-8">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <div className="w-full text-left px-4 py-2 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium">
                📍 ¿A dónde quieres viajar? (Roma, Sídney, Londres...)
              </div>
              <a 
                href="https://www.tkqlhce.com/click-101825316-14398479" 
                target="_blank" 
                rel="noopener sponsored"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition text-center shadow-md whitespace-nowrap"
              >
                Buscar Hoteles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BARRA DE OFERTAS: GETAWAY DEAL (Australia - ID: 17301956 con píxel 1x1) */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm font-medium text-amber-900">
           <a 
             href="https://www.dpbolvw.net/click-101825316-17301956" 
             target="_blank" 
             rel="noopener sponsored" 
             className="hover:underline inline-flex items-center gap-2"
           >
              <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">OFERTA FLASH</span>
              Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.
              <img src="https://www.awltovhc.com/image-101825316-17301956" width="1" height="1" alt="" className="hidden" />
           </a>
        </div>
      </div>

      {/* 4. CONTENIDO PRINCIPAL: CUADRÍCULA DE ANUNCIANTES Y DESTINOS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Destinos Top y Anunciantes</h2>
            <span className="text-sm text-slate-500">Actualizado hoy</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Australia Banner Oficial (ID: 17314768) */}
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-72 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-6 border border-slate-200">
                <img 
                  src="https://www.tqlkg.com/image-101825316-17314768" 
                  alt="Booking Australia" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85" 
                />
                <div className="relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow text-blue-900 font-bold text-sm">
                  Sídney y Australia (Top 1)
                </div>
              </div>
            </a>

            {/* Italia (ID: 14398479) */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-72 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-6 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" 
                  alt="Roma Italia" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85" 
                />
                <div className="relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow text-blue-900 font-bold text-sm">
                  Roma, Italia (Top 2)
                </div>
              </div>
            </a>

            {/* Reino Unido */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-72 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-6 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" 
                  alt="Londres UK" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85" 
                />
                <div className="relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow text-blue-900 font-bold text-sm">
                  Londres, Reino Unido (Top 3)
                </div>
              </div>
            </a>

            {/* Escapadas Getaway Deals */}
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-72 rounded-xl relative overflow-hidden shadow-md bg-slate-900 flex items-end p-6 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" 
                  alt="Escapadas" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85" 
                />
                <div className="relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow text-blue-900 font-bold text-sm">
                  Escapadas - 15% Descuento
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Sidebar con Banner Oficial de Australia (ID: 17314845) */}
        <aside className="w-full lg:w-[350px] flex flex-col gap-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patrocinado Oficial</h3>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center">
            <a href="https://www.anrdoezrs.net/click-101825316-17314845" target="_blank" rel="noopener sponsored">
              <img 
                src="https://www.ftjcfx.com/image-101825316-17314845" 
                width="336" 
                height="280" 
                alt="Booking Australia Banner" 
                className="rounded-lg shadow-sm"
              />
            </a>
          </div>

          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md text-center space-y-3">
            <h4 className="font-bold text-lg">¿Necesitas asistencia en tu reserva?</h4>
            <p className="text-xs text-blue-200">Accede directamente al catálogo global de alojamientos con total garantía y seguridad oficial.</p>
            <a 
              href="https://www.tkqlhce.com/click-101825316-14398479" 
              target="_blank" 
              rel="noopener sponsored"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold px-4 py-2.5 rounded-lg text-sm transition w-full shadow"
            >
              Ver Todas las Ofertas
            </a>
          </div>
        </aside>

      </main>

      {/* 5. FOOTER LEGAL */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="max-w-3xl mx-auto leading-relaxed">
            * Aviso de Afiliación: Este sitio web participa en el programa de afiliados de Booking.com a través de CJ Affiliate. Las reservas completadas a través de nuestros enlaces de seguimiento generan una comisión para apoyar este portal sin ningún coste adicional para ti.
          </p>
          <p>© {new Date().getFullYear()} Humancentric.online — Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}