"use client";

import Image from "next/image";
import { FaHeart, FaPlane, FaBusinessTime, FaUserGraduate, FaUsers } from "react-icons/fa";

export default function AtithiHomeContent() {
  return (
    <>
      {/* ========== AFFORDABLE HOMESTAY SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
              Your Go-To <span className="text-[#1E3A8A]">Affordable Homestay</span> in Guwahati
            </h2>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Seeking a productive business stay in Guwahati or a peaceful resting stop? Explore all the options at Atithi Homes and enjoy your trip by exploring more of the landscapes of Northeast India.
            </p>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-[#FACC15] rounded-r-xl">
              <p className="text-xl font-bold text-[#1E3A8A] italic flex items-center gap-3">
                {/* <FaHeart className="text-red-500" /> */}
                “Atithi Devo Bhava” – Treat Every Visitor as our Family!
              </p>
              <p className="mt-2 text-gray-600">
                We prioritize our philosophy, ensuring every guest feels at home with warmth and personalized care.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl w-32 shadow-sm border border-gray-100">
                <FaBusinessTime className="text-3xl text-[#1E3A8A] mb-2" />
                <span className="text-xs font-semibold text-gray-700">Business Stay</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl w-32 shadow-sm border border-gray-100">
                <FaPlane className="text-3xl text-[#1E3A8A] mb-2" />
                <span className="text-xs font-semibold text-gray-700">Resting Stop</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/affordable-hotel-guwahati.webp"
              alt="Affordable Homestay at Atithi Homes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ========== VERSATILE LODGING SECTION ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
              Versatile Lodging for Every Traveler
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We offer tailored experiences for families, students, and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FAMILY STAY */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#FACC15] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <FaUsers className="text-3xl text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Family Stay in Guwahati</h3>
              <p className="text-gray-600 leading-relaxed">
                Our flexible property layouts are the perfect choice for a family stay in Guwahati. Kids, elders, or any other members can get perfect accommodation here!
              </p>
            </div>

            {/* STUDENT ACCOMMODATION */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <FaUserGraduate className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Student Accommodation</h3>
              <p className="text-gray-600 leading-relaxed">
                Also, the environment is suitable for students. Our student accommodation in Guwahati is helpful for aspirants during their academic transitions or competitive examinations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
