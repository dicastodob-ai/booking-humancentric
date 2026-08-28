import React from 'react';

export default function BookingPortal() {
  // Generamos la matriz de 30 productos utilizando los enlaces oficiales proporcionados
  const products = Array.from({ length: 30 }).map((_, i) => {
    // Alternamos entre las creatividades y destinos que nos pasaste para rellenar los 30 espacios
    if (i % 3 === 0) {
      return {
        id: i,
        title: "Destinos Australia",
        url: "https://www.tkqlhce.com/click-101825316-17314768",
        img: "https://www.tqlkg.com/image-101825316-17314768",
        tag: "Top Destino"
      };
    } else if (i % 3 === 1) {
      return {
        id: i,
        title: "Escapadas Italia",
        url: "https://www.tkqlhce.com/click-101825316-14398479",
        img: "https://www.ftjcfx.com/image-101825316-17314845", 
        tag: "Oferta Especial"
      };
    } else {
      return {
        id: i,
        title: "Reino Unido y Global",
        url: "https://www.dpbolvw.net/click-101825316-17301956",
        img: "https://www.tqlkg.com/image-101825316-17314768",
        tag: "-15% Descuento"
      };
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="flex items-center">
            <img 
              src="https://www.lduhtrp.net/image-101825316-14398479" 
              alt="Booking.com Official Partner" 
              className="h-10 md:h-12 object-contain"
            />
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-bold text-slate-700">
            <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Italia</a>
            <a href="https://www.tkqlhce.com/click-101825316-17314768" target="_blank" rel="noopener sponsored" className="hover:text-blue-600">Australia</a>
            <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="text-blue-600">Ofertas</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" 
            alt="Fondo Viajes" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Elige entre miles de destinos</h1>
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition">
            Buscar Hoteles
          </a>
        </div>
      </section>

      {/* BARRA DE OFERTA FLASH */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm font-medium text-amber-900">
           <a href="https://www.dpbolvw.net/click-101825316-17301956" target="_blank" rel="noopener sponsored" className="hover:underline inline-flex items-center gap-2">
              <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">OFERTA FLASH</span>
              Save with a Getaway Deal. Lock in at least 15% off select stays for your next trip.
              <img src="https://www.awltovhc.com/image-101825316-17301956" width="1" height="1" alt="" className="hidden" />
           </a>
        </div>
      </div>

      {/* CUADRÍCULA DE 30 PRODUCTOS CORREGIDA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Nuestros 30 Destinos y Ofertas Destacadas</h2>
        </div>

        {/* Grid Responsive para que los banners no se aplasten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener sponsored" className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden">
              
              {/* Contenedor de Imagen con object-contain para no recortar el banner */}
              <div className="w-full h-48 bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-300" 
                />
              </div>
              
              <div className="p-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>* Aviso de Afiliación: Este sitio web participa en el programa de afiliados de Booking.com a través de CJ Affiliate.</p>
        </div>
      </footer>

    </div>
  );
}
