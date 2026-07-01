"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt, FaQuestionCircle, FaChevronDown } from "react-icons/fa";

export default function BlogContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "1. Is it possible to find a true luxury hotel in Guwahati that is affordable?",
      a: "Yes, it is possible when you book Atithi Guest House Guwahati. Here, you get a luxury stay at affordable prices in Guwahati without any delay or discomfort."
    },
    {
      q: "2. Which area is best for a budget-friendly luxury accommodation in Guwahati?",
      a: "It is advised to book an affordable luxury stay near VIP Road Guwahati, from Atithi Homes. It gives you peaceful surroundings and excellent connectivity."
    },
    {
      q: "3. Are there good options for medical travelers needing comfortable accommodation in Guwahati?",
      a: "Absolutely, with Atithi Homes, you can plan your stay near Pratiksha Hospital. We provide an affordable guest house with luxury amenities in Guwahati ensures ultimate comfort."
    },
    {
      q: "4. What makes a boutique homestay Guwahati different from a regular hotel?",
      a: "At Atithi Homes, we provide personalized, home-like warmth alongside high-end facilities. In return, this becomes the best luxury homestay in Guwahati on a budget."
    },
    {
      q: "5. Is an affordable hotel with modern amenities in Guwahati suitable for families?",
      a: "Yes, it is easy to find one. When you choose Atithi Homes, you get a spacious suite and all types of amenities."
    }
  ];

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header Section */}
      <header className="relative bg-[#1E3A8A] text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/img3.jpeg"
            alt="Atithi Home background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#1E3A8A]/90" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / <span className="font-semibold uppercase text-xs">Detail</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#1E3A8A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <FaMapMarkerAlt /> Atithi Home Guwahati
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl">
            Luxury Stay at Affordable Prices in Guwahati
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Content Column - White Background with Border */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            
            {/* Unveiling the Ultimate Luxury hotel in Guwahati */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-sans">
                Unveiling the Ultimate Luxury hotel in Guwahati: A Perfect Escape
              </h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>
                  When you are in search of a true luxury stay at affordable prices in Guwahati, then one name comes first. Yes, it is Atithi Homes. This is the best place where you can enjoy Assam’s beauty.
                </p>
                <p>
                  At Atithi Guest House Guwahati, we transform standard travel into an exquisite experience. When users choose us, they understand why we are the right budget hotel in Guwahati that offers them the best experience without compromising on elegance. 
                </p>
              </div>
            </section>

            {/* Why Choose a Luxury hotel in Guwahati */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">
                Why Choose a Luxury hotel in Guwahati for Your Next Trip?
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  When you book an affordable luxury stay near VIP Road Guwahati, it places you at the epicenter of convenience and tranquility.
                </p>
                <p>
                  At our guesthouse in Assam, you don’t feel the difference when staying. Whether you&apos;re in search of a premium stay in Guwahati equipped with high-speed Wi-Fi or a guest house in Guwahati with advanced personalized experiences and security matters, we offer it all.
                </p>
                <p className="font-bold text-gray-950">
                  Let’s discover all the facilities that Atithi Homes provides under its Luxury Stay at Affordable Prices in Guwahati:
                </p>

                <div className="grid grid-cols-1 gap-y-4 ml-2 bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                  {[
                    "Combines lavish aesthetics with highly cost-effective pricing structures.",
                    "Incorporates advanced security measures and parking benefits.",
                    "Strategic locations ensure easy access to major city hubs and transit.",
                    "Integrates high-speed connectivity for modern business travelers.",
                    "Delivers a highly personalized and warm hospitality experience."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] mt-2.5 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>

                <p>
                  Upgrade your travel experience without breaking the bank by booking our exclusive luxury suites today!
                </p>
              </div>
            </section>

            {/* Features Defining the Best luxury homestay in Guwahati */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">
                Features Defining the Best luxury homestay in Guwahati on a budget
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  Finding an affordable hotel with modern amenities in Guwahati ensures you enjoy plush bedding and spotless hygiene. There is no difficulty to find a perfect boutique homestay Guwahati.
                </p>
                <p>
                  Here, we focus strictly on bespoke experiences. That’s why medical tourism is also possible at Atithi Homes Guesthouse. You can book a luxury hotel near Pratiksha Hospital Guwahati, which brings immense peace of mind.
                </p>
                <p className="font-bold text-gray-950">
                  The following features make travellers choose Atithi Home’s secure, premium rooms at affordable prices in Guwahati, tailored for everyone:
                </p>

                <div className="grid grid-cols-1 gap-y-4 ml-2 bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                  {[
                    "Replicates a comforting, home-like atmosphere with professional service.",
                    "Maintains rigorous hygiene and immaculate room cleanliness standards.",
                    "Features ultra-plush bedding for superior overnight rest.",
                    "Delivers bespoke, highly customized guest services and daily attention.",
                    "Provides strategic proximity to top-tier local healthcare facilities."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] mt-2.5 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>

                <p>
                  In short, there is no debate or competition with Atithi Home’s affordable guest house with luxury amenities in Guwahati. We give you a luxury homestay in Guwahati without disturbing your wallet or your relaxing period.
                </p>
              </div>
            </section>

            {/* Maximizing Value: Comfortable luxury stay in Guwahati */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">
                Maximizing Value: Comfortable luxury stay in Guwahati for families
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  Getting your hands on a comfortable accommodation in Guwahati means getting the best property at a perfect value. This explains the facilities that Atithi Homes offers: expansive suites and highly secure premises.
                </p>
                <p>
                  With us, you can experience a top-rated hotel near VIP Road Guwahati. That’s why many prefer our luxury accommodation near VIP Road Guwahati. In return, they get reduced transit times and enhanced safety protocols.
                </p>
                <p>
                  Remember, the best value luxury stay in Guwahati guarantees that every family member experiences a memorable, stress-free vacation.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>
                  When you plan your stay in Guwahati, Atithi Guest House Guwahati stands out as the prime choice. Here, you get an affordable hotel in Guwahati and embrace the ultimate getaway with premium features, stunning rooms, and exceptional local service.
                </p>
                <p>
                  Book your affordable luxury room now and elevate your journey!
                </p>
              </div>
            </section>

            {/* FAQs Accordion */}
            <section className="mt-16 pt-12 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FaQuestionCircle className="text-[#1E3A8A]" /> FAQs
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#1E3A8A]/50 transition-colors">
                      <button
                        onClick={() => toggleFaq(index)}
                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? "bg-[#1E3A8A] text-white" : "text-gray-900 bg-white"}`}
                      >
                        <span className="text-lg font-bold">{faq.q}</span>
                        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0 text-[#1E3A8A]"}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="p-6 text-gray-700 leading-relaxed font-medium bg-white" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Simple Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#1E3A8A] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
                <p className="text-sm text-white/80 mb-6 font-medium">Contact us now to book your comfortable stay at Atithi Guest House Guwahati.</p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                    <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Call Us Now</p>
                    <p className="text-lg font-bold">+91 60008 91365</p>
                  </div>
                  <Link href="/contact" className="block w-full bg-[#FACC15] text-[#1E3A8A] text-center font-bold py-4 rounded-xl hover:bg-[#ebc210] transition">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-[#1E3A8A] hover:underline flex items-center gap-2 font-medium"><span>→</span> Home</Link></li>
                  <li><Link href="/about" className="text-[#1E3A8A] hover:underline flex items-center gap-2 font-medium"><span>→</span> About Us</Link></li>
                  <li><Link href="/blog" className="text-[#1E3A8A] hover:underline flex items-center gap-2 font-medium"><span>→</span> Our Blog</Link></li>
                  <li><Link href="/contact" className="text-[#1E3A8A] hover:underline flex items-center gap-2 font-medium"><span>→</span> Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
