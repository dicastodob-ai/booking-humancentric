import React from 'react';

export default function BookingPortal() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* 1. HEADER / CABECERA OFICIAL BOOKING.COM */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 tracking-tight flex items-center gap-2">
            {/* Booking.com Italy - Logo / Enlace Panorámico (ID: 4347401) */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored">
              <img 
                src="https://www.lduhtrp.net/image-101825316-14398479" 
                alt="Booking.com Italy - Partner" 
                className="h-10 md:h-12 object-contain"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Destinos Australia</a>
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="hover:text-blue-600 transition">Ofertas y Descuentos</a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION & MOTOR DE RESERVAS */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80" 
            alt="Fondo Viajes Booking" 
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Encuentra tu próximo alojamiento al mejor precio
          </h1>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl w-full">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
              <p className="font-bold text-blue-900 mb-2">Motor de Reservas Oficial - Booking.com</p>
              <a 
                href="https://www.tkqlhce.com/click-101825316-14398479" 
                target="_blank" 
                rel="noopener sponsored"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow transition"
              >
                Buscar Hoteles y Disponibilidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BARRA DE OFERTAS Y GETAWAY DEALS (Australia - ID: 17301956) */}
      <div className="bg-blue-50 border-b border-blue-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <a 
             href="https://www.dpbolvw.net/click-101825316-17301956" 
             target="_blank" 
             rel="noopener sponsored" 
             className="text-blue-800 font-medium hover:underline inline-flex justify-center items-center gap-2"
           >
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">OFERTA ESPECIAL</span>
              Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.
              <img src="https://www.awltovhc.com/image-101825316-17301956" width="1" height="1" alt="" className="hidden" />
           </a>
        </div>
      </div>

      {/* 4. CUADRÍCULA DE DESTINOS Y BANNERS DE CJ */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Columna con los productos/destinos principales */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Destinos Top Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Producto 1: Australia (ID: 17314768) */}
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-64 bg-blue-900 rounded-lg relative overflow-hidden shadow-sm flex items-end p-4 border">
                <img src="https://www.tqlkg.com/image-101825316-17314768" alt="Booking Australia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-80" />
                <span className="relative z-10 bg-white/90 backdrop-blur px-3 py-1 font-semibold rounded text-sm shadow text-blue-900">Sídney y Australia (Top 1)</span>
              </div>
            </a>

            {/* Producto 2: Italia (ID: 14398479) */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-64 bg-blue-900 rounded-lg relative overflow-hidden shadow-sm flex items-end p-4 border">
                <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" alt="Roma Italia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-80" />
                <span className="relative z-10 bg-white/90 backdrop-blur px-3 py-1 font-semibold rounded text-sm shadow text-blue-900">Roma, Italia (Top 2)</span>
              </div>
            </a>

            {/* Producto 3: Reino Unido */}
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-64 bg-blue-900 rounded-lg relative overflow-hidden shadow-sm flex items-end p-4 border">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" alt="Londres UK" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-80" />
                <span className="relative z-10 bg-white/90 backdrop-blur px-3 py-1 font-semibold rounded text-sm shadow text-blue-900">Londres, Reino Unido (Top 3)</span>
              </div>
            </a>

            {/* Producto 4: Escapadas (Getaway Deal ID: 17301956) */}
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="group block">
              <div className="h-64 bg-blue-900 rounded-lg relative overflow-hidden shadow-sm flex items-end p-4 border">
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" alt="Escapadas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-80" />
                <span className="relative z-10 bg-white/90 backdrop-blur px-3 py-1 font-semibold rounded text-sm shadow text-blue-900">Escapadas con 15% Descuento</span>
              </div>
            </a>

          </div>
        </div>

        {/* Sidebar con Banners Patrocinados Oficiales de CJ */}
        <aside className="w-full lg:w-[336px] flex flex-col gap-6">
          <h3 className="text-gray-400 uppercase text-xs tracking-wider font-bold">Patrocinado Oficial</h3>
          
          {/* Banner 336x280 - Australia (ID: 17314845) */}
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 flex justify-center">
            <a href="https://www.anrdoezrs.net/click-101825316-17314845" target="_blank" rel="noopener sponsored">
              <img src="https://www.ftjcfx.com/image-101825316-17314845" width="336" height="280" alt="Booking Australia Banner" className="rounded"/>
            </a>
          </div>
        </aside>

      </main>

      {/* 5. FOOTER / AVISO LEGAL */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          <p>
            * Aviso de Afiliación: Este sitio participa en el programa de afiliados de Booking.com a través de CJ Affiliate. 
            Las reservas realizadas a través de nuestros enlaces generan una comisión sin coste adicional para ti.
          </p>
          <p>© {new Date().getFullYear()} Humancentric.online — Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}