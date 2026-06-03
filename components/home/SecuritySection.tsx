"use client";

import { FaShieldAlt, FaUserShield, FaUserCheck, FaAward, FaLock } from "react-icons/fa";

export default function SecuritySection() {
  const securityAbilities = [
    { title: "24/7 Security Presence", icon: FaShieldAlt },
    { title: "Reliable Management", icon: FaUserShield },
    { title: "Trusted Reputation", icon: FaAward },
  ];

  return (
    <section className="py-24 bg-[#0A1128] text-white overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <FaShieldAlt /> Certified Safe Stay
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-white">
              Safety, Security, <span className="text-[#FACC15]">and Trust</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Want a certified safe stay in Guwahati for solo female travelers? It is none other than Atithi Homes that provides ultimate safety and comfort at its place when you plan for a solo or family-friendly stay.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 border-l-4 border-[#FACC15] pl-6 py-2 italic font-medium">
              "With the strong and prominent security protocols, you can focus entirely on your work or vacation while we handle the rest."
            </p>

            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaUserCheck className="text-[#FACC15] text-xl" />
                  <span className="font-semibold">Solo-female Friendly</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaLock className="text-[#FACC15] text-xl" />
                  <span className="font-semibold">Secure Protocols</span>
               </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-[#FACC15] border-b border-white/10 pb-4">
              Major Security Abilities
            </h3>
            <div className="space-y-6">
              {securityAbilities.map((ability, index) => {
                const Icon = ability.icon;
                return (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 shrink-0 bg-[#FACC15] rounded-2xl flex items-center justify-center text-[#0A1128] shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-3xl" />
                    </div>
                    <span className="text-xl font-bold tracking-wide group-hover:text-[#FACC15] transition-colors">
                      {ability.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
