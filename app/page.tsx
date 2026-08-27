import React from "react";
export default function Page() {
 return (
  <div className="min-h-screen bg-gray-50">
   <header className="bg-white shadow-sm p-4 flex justify-center"><img src="https://www.lduhtrp.net/image-101825316-14398479" className="h-12 object-contain" alt="Booking Logo" /></header>
   <div className="relative w-full h-[600px] flex items-center justify-center bg-blue-900">
    <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Fondo Italia" />
    <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-2xl">Encuentra tu próximo alojamiento</h2>
   </div>
  </div>
 );
}