"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#050A24] to-[#0A1A45] text-white pt-12 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-3xl font-extrabold">
            Atithi <span className="text-[#FACC15]">Homestay</span>
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Premium hospitality with comfort, elegance, and warm service — available 24/7.
          </p>

            {/* GET DIRECTIONS BUTTON */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Atithi+Homestay,+Alokpur,+Near+Pratiksha+Hospital,+VIP+Road,+Barbari,+Guwahati"
            target="_blank"
            className="inline-block mt-5 bg-[#FACC15] text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition"
          >
            Get Directions
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FACC15]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-[#FACC15]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FACC15]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#FACC15]">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-[#FACC15]">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#FACC15]">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FACC15]">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📞 Call Us Now: +916000891365</li>
            <li>📍 Alokpur, Near Pratiksha Hospital, VIP Road, Barbari, Guwahati - 781036</li>
            <li>🕒 Open 24/7</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#FACC15]">Follow Us</h3>
        
          {/* SUB-HEADING */}
          <p className="text-gray-300 text-sm mb-4">
            Stay connected with us
          </p>
        
          <div className="flex space-x-4">
        
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-[#1877F2] transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
        
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
        
            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-red-600 transition"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
        
            {/* WhatsApp */}
            <a
              href="https://wa.me/916000891365"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-green-500 transition"
            >
              <FaWhatsapp className="text-white text-lg" />
            </a>
        
          </div>
        </div>

      </div>

     {/* COPYRIGHT */}
<div className="mt-10 border-t border-gray-600 pt-4">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
    
    {/* Left */}
    <div>
      © {new Date().getFullYear()} Atithi Homestay. All Rights Reserved.
    </div>

    {/* Right */}
    <div>
      Designed & Developed by{" "}
      <a
        href="https://digitalsolution360.com"
        target="_blank"
        className="text-[#FACC15] hover:text-yellow-400 font-semibold transition"
      >
        DigitalSolution360
      </a>
    </div>

  </div>
</div>


      {/* MOBILE FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-3 py-2 gap-3">

          {/* CTA BOX - LEFT → goes to /contact */}
          <Link
            href="/contact"
            className="bg-[#0B7A6E] text-white text-sm font-bold px-5 py-3 rounded-xl leading-none hover:bg-[#096560] transition-all shrink-0"
          >
            Book Atithi
          </Link>

          {/* ICONS - RIGHT */}
          <div className="flex items-center gap-3 ml-auto">
            {/* CALL ICON */}
            <a
              href="tel:+916000891365"
              className="w-11 h-11 bg-gray-100 text-gray-700 flex items-center justify-center rounded-full hover:bg-gray-200 transition-all border border-gray-300"
            >
              <FaPhoneAlt className="text-lg" />
            </a>

            {/* WHATSAPP ICON */}
            <a
              href="https://wa.me/916000891365"
              target="_blank"
              className="w-11 h-11 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] border-2 border-white"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>

        </div>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/916000891365"
        target="_blank"
        className="hidden md:flex fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.5)] items-center justify-center hover:bg-green-500 transition-all duration-300 z-50 animate-float border-2 border-white"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </footer>
  );
}
