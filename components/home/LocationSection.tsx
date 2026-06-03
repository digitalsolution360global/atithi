"use client";

import Image from "next/image";
import { FaMapMarkedAlt, FaPlaneArrival, FaRoad, FaChurch } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
               <Image 
                 src="/assets/img1.jpeg" 
                 alt="Atithi Homes Location" 
                 width={600} 
                 height={450} 
                 className="w-full h-auto object-cover"
               />
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FACC15]/20 rounded-full blur-3xl z-0"></div>
             <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#1E3A8A]/10 rounded-full blur-3xl z-0"></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold uppercase tracking-widest text-sm mb-4">
              <FaMapMarkedAlt /> Discover Guwahati
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-6">
              Location Advantage & <span className="text-[#1E3A8A]">Seamless Connectivity</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1E3A8A] border border-gray-100">
                  <FaPlaneArrival className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Strategic Position Near Major Traffic Hubs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Travelers who are looking for a guest house near Guwahati Airport can join Atithi Homes. This is an exceptional place that gives you better connectivity. That’s how travellers can minimize travel stress and enjoy their sessions within a perfect and peaceful environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1E3A8A] border border-gray-100">
                  <FaRoad className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Comfortable Accommodation Near VIP Road Guwahati</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Either early morning or late night flights, staying at a comfortable accommodation near VIP Road Guwahati can be super useful.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1E3A8A] border border-gray-100">
                  <FaChurch className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Easy Access to Landmarks</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Anyone planning to explore the beauty of Guwahati or its nearby places, Atithi Home’s tourist accommodation in Guwahati is the ideal choice. It is easy to explore more landmarks, like the historic Kamakhya Temple and the scenic Brahmaputra Riverfront, when you stay at our place.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
