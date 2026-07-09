"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full lg:h-[350px] h-[200px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/affordable-hotel-guwahati.webp"
            alt="Atithi Home - Hotel near Pratiksha Hospital Guwahati"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h4 className="text-[#1E3A8A] font-semibold tracking-wider uppercase">
            Your Ideal Stay
          </h4>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-2 leading-tight">
            Welcome to <span className="text-[#FACC15]">Atithi Homes</span> – Your Ideal Stay
          </h2>

          <h3 className="text-2xl font-bold mt-6 text-[#1E3A8A]">
            Choosing the Perfect Guest house in Guwahati
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            Get yourself a perfect treat by finding the right guesthouse in Guwahati. Atithi Homes comes as a prime option that completes all the requirements provided by any luxurious places at a comfortable price.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            It bridges the gaps between expensive, detached hospitality and unpredictable lodging. Time to refuse to compromise on quality and cleanliness. Get the best coziness under a budget accommodation in Guwahati from Atithi Homes.
          </p>

          <div className="mt-10">
            <a
              href="tel:+916000891365"
              className="inline-block bg-[#FACC15] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
            >
              Book Atithi Guest House Guwahati
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
