import React from "react";
export default function Page() {
 return (
  <div className="min-h-screen bg-gray-50">
   <header className="bg-white shadow-sm p-4 text-center"><h1 className="text-2xl font-bold text-blue-900">Booking.com Partner</h1></header>
   <div className="relative w-full h-[600px] flex items-center justify-center bg-blue-900">
    <img src="https://www.lduhtrp.net/image-101825316-14398479" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Booking Italy" />
    <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center shadow-lg px-4">Encuentra tu próximo alojamiento</h2>
   </div>
  </div>
 );
}