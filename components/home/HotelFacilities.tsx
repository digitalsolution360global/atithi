"use client";

import { 
  FaParking,
  FaWifi,
  FaPlug,
  FaTv,
  FaUtensils,
  FaCheckCircle
} from "react-icons/fa";

export default function HotelFacilities() {
  const facilities = [
    { title: "Secure, complimentary on-site parking for all guests.", icon: FaParking },
    { title: "Complimentary high-speed, unlimited Wi-Fi access.", icon: FaWifi },
    { title: "24/7 power backup and continuous hot/cold running water.", icon: FaPlug },
    { title: "TV access with all satellite channels.", icon: FaTv },
    { title: "Hygienic and freshly home-cooked local meals available on demand.", icon: FaUtensils },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner/b3.jpg"
          alt="Facilities Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001F3F]/80"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            <FaCheckCircle /> Amenities
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 drop-shadow-lg">
            Key Amenities Checklist
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            We provide everything you need for a comfortable and stress-free stay at Atithi Homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#FACC15]/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#FACC15] text-black shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="text-2xl" />
                </div>
                <p className="text-white text-lg font-medium leading-snug pt-1">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-[#FACC15] text-xl font-semibold italic">
            “Feel the warmth of home with every amenity you deserve.”
          </p>
        </div>
      </div>
    </section>
  );
}
