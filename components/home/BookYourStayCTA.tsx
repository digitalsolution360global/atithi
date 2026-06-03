"use client";

export default function BookYourStayCTA() {
  return (
    <section className="py-0">
      <div className="w-full">
        <div className="bg-[#1E3A8A] w-full overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 md:px-12 lg:px-16 py-10 md:py-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Book Atithi Guest House Guwahati for an Unmatched Stay
              </h2>
              <p className="mt-3 md:mt-4 text-white/95 text-base md:text-lg leading-relaxed max-w-xl">
                Time to accept the best comfort and ignore other aspects – Book your slot at Atithi Homes and personalized hospitality packages.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/contact"
                className="inline-block bg-[#FACC15] text-black font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 min-w-[220px] text-center"
              >
                Book Atithi Guest House Guwahati Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
