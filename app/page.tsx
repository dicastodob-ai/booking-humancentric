import React from 'react';

export default function BookingPortal() {
  // Generamos dinámicamente los 30 productos alternando los enlaces oficiales de CJ Affiliate
  const products = Array.from({ length: 30 }).map((_, i) => {
    if (i % 3 === 0) {
      return { id: i, title: "Destinos Australia", url: "https://www.tkqlhce.com/click-101825316-17314768", img: "https://www.tqlkg.com/image-101825316-17314768", tag: "Top Destino" };
    } else if (i % 3 === 1) {
      return { id: i, title: "Ofertas Italia", url: "https://www.tkqlhce.com/click-101825316-14398479", img: "https://www.ftjcfx.com/image-101825316-17314845", tag: "Oferta Especial" };
    } else {
      return { id: i, title: "Escapadas Globales", url: "https://www.dpbolvw.net/click-101825316-17301956", img: "https://www.tqlkg.com/image-101825316-17314768", tag: "-15% Descuento" };
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
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

      {/* HERO SECTION */}
      <section className="relative w-full bg-blue-900 text-white py-16 px-4">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover opacity-30" alt="Fondo" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Elige entre miles de destinos</h1>
          <a href="https://www.tkqlhce.com/click-101825316-14398479" target="_blank" rel="noopener sponsored" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md">
            Buscar Hoteles
          </a>
        </div>
      </section>

      {/* CUADRÍCULA DE 30 PRODUCTOS CORREGIDA */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Nuestros 30 Destinos y Ofertas Destacadas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener sponsored" className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden">
              
              {/* Contenedor de Imagen ajustado con object-contain y fondo blanco para no recortar banners */}
              <div className="w-full h-56 bg-white flex items-center justify-center p-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300" 
                />
              </div>
              
              <div className="p-4 border-t border-slate-100 flex justify-between items-center bg-slate-50">
                <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {item.tag}
                </span>
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
