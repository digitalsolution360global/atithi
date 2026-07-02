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
      q: "How can I easily find a highly rated budget hotel in Guwahati with modern amenities?",
      a: "Before you go for any booking, always look for amenities like managed boutique spaces and premium guest houses. Also, free Wi-Fi, full power backups, and private parking are coming under the requirement list."
    },
    {
      q: "Why should tourists consider booking a hotel near VIP Road Guwahati?",
      a: "When you choose to stay near the VIP road at Atithi Homes, you get an upscale, peaceful environment. This is also a perfect destination that gives lightning-fast access to the airport and regional attractions."
    },
    {
      q: "What key features make an accommodation option truly family-friendly in Guwahati?",
      a: "A perfect family-friendly stay at Atithi Homes can offer you the following:<br/><div class=\"mt-3 space-y-2\"><p>• Large & multi-bed executive spaces</p><p>• Customizable in-house dining menus</p><p>• Round-the-clock security monitoring</p></div>"
    },
    {
      q: "Are there reliable hotels near Pratiksha Hospital with comfortable rooms for medical travelers?",
      a: "Yes, it is Atithi Homes Guest House that has specialized boutique accommodations and peaceful environments with 24/7 guest services."
    },
    {
      q: "What is the most effective way to secure the best seasonal room rates in Guwahati?",
      a: "You get the best rooms at marginal rates when you plan your trip during the low-season months of April or June."
    }
  ];

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header Section */}
      <header className="relative bg-[#1E3A8A] text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/best_hotel_guwahati_guide.png"
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
            How to Choose the Best Hotel in Guwahati : A Complete Guide for Travelers
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Content Column - White Background with Border */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Blog Main Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image
                src="/assets/best-hotel-in-guwahati-travelers-guide.webp"
                alt="Best Hotel in Guwahati Travelers Guide - Atithi Homes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent" />
            </div>
            
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-100 pb-2">Introduction</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>It is a wise decision to find the <a href="https://www.atithihome.com/services" className="text-blue-600 hover:underline inline">best hotel in Guwahati</a>, as it shapes your entire travel experience. The right experience always elevates the mood and prepares everyone for the smooth journey.</p>
                <p>Whether you want the local hospitality market or the premium boutique settings, the guest house of <a href="https://www.atithihome.com/" className="text-blue-600 hover:underline inline">Atithi Homes</a> has it all. This is the right place where travellers find the sweet spot between optimal location, value, and stellar service.</p>
                <p>Going with Atithi Guest House Guwahati can give you the sweet spot. It bridges between optimal location, value, and stellar service, which requires a strategic approach.</p>
              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Tips for Choosing the Right Hotel in Guwahati</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>When searching for a Hotel in Guwahati, travellers struggle with the sprawling geography of the city. That’s a fact they must overcome first.</p>
                <p>You should prepare a checklist that prioritizes safe neighborhoods, proximity to central transit hubs, and transparent pricing structures. At Atithi Guest House, there is no issue at all.</p>
                <p>This is the right hotel that emphasizes modern amenities while delivering authentic, warm Assamese hospitality.</p>
                <p className="font-bold text-gray-900">Still, there are some facts that you need to consider first before booking a hotel in Guwahati:</p>
                <div className="grid grid-cols-1 gap-y-4 ml-2">
                  {[
                    "Properties like a hotel near Pratiksha Hospital with comfortable rooms offer massive advantages for medical tourists.",
                    "Ensure easy transit to the main railway station or airport",
                    "Look for verified properties",
                    "Prioritize locations with 24/7 guarded premises",
                    "Make sure the property has CCTV-monitored common areas.",
                    "Check for dynamic in-house restaurants serving local and healthy cuisines.",
                    "Always evaluate verified cross-platform travelers."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Decoding Your Budget: From Luxury Stays to Pocket-Friendly Gems</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>It is always a dream to be in a luxury hotel in Guwahati, and the high-end commercial hubs will fit perfectly. Yes, this dream is going to be true when you book your rooms at Atithi Homes.</p>
                <p>We end the debate on affordable hotel in Guwahati and evaluate how to find a budget hotel in Guwahati smoothly. Yes, we are the best affordable hotel in Guwahati for families by providing large, executive multi-bed options</p>
                <p>Get family-friendly accommodation in Guwahati easily under value packages and strategic family spaces. There will be no hidden charges or space adjustments during your stay. Also, you can grab customized laundry and vehicle rental concessions.</p>
                <p>
                  Claim premium comfort at a price you will love—<Link href="/contact" className="text-blue-600 underline hover:text-blue-800 font-bold">Explore Our Affordable Luxury Rooms Today!</Link>
                </p>
              </div>
            </section>
            
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Location Strategy: Staying Near VIP Road and Key Landmarks</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>Selecting a hotel near VIP Road Guwahati places you and your family members in the right facility without any buzz. That’s why it is better to learn how to choose accommodation in Guwahati for tourists strategically.</p>
                <p>The best hotel near VIP Road Guwahati, always gives you clear of city-center bottlenecks.</p>
                <p className="font-bold text-gray-900">Strategic Location Highlights for Savvy Travelers:</p>
                <div className="grid grid-cols-1 gap-y-4 ml-2">
                  {[
                    "A hotel near Pratiksha Hospital with comfortable rooms eliminates stressful medical commute times.",
                    "Offer a serene getaway from noisy, high-density market centers.",
                    "Secure direct, hassle-free routes to the airport and outward state highways.",
                    "Cut down travel times to iconic sites like the regional science centers and state museums.",
                    "Ensure peace of mind for late-night family arrivals."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p>When researching the best hotel in Guwahati with modern amenities, do not look just at the aesthetic decor. A dedicated hotel with 24/7 guest services in Guwahati is always ready to handle midnight requests or early-morning transport setups.</p>
                <p>
                  Experience premium hospitality designed completely around your schedule—<a href="tel:+916000891365" className="text-blue-600 underline hover:text-blue-800 font-bold">Book Our 24/7 Serviced Rooms Today!</a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-100 pb-2">Conclusion</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>The question: how to choose the best hotel in Guwahati? Won’t bother anyone anymore. Yes, now you can turn an ordinary trip into a truly memorable experience with Atithi Guest House Guwahati.</p>
                <p>We are the ones who ensure you get a clean, secure, and incredibly comfortable stay without breaking the bank. Reserve Your Premium Stay at Atithi Guest House Now!</p>
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
                <p className="text-sm text-white/80 mb-6">Contact us now to book your comfortable stay at Atithi Guest House Guwahati.</p>
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
                  <li><Link href="/" className="text-[#1E3A8A] hover:underline flex items-center gap-2"><span>→</span> Home</Link></li>
                  <li><Link href="/about" className="text-[#1E3A8A] hover:underline flex items-center gap-2"><span>→</span> About Us</Link></li>
                  <li><Link href="/blog" className="text-[#1E3A8A] hover:underline flex items-center gap-2"><span>→</span> Our Blog</Link></li>
                  <li><Link href="/contact" className="text-[#1E3A8A] hover:underline flex items-center gap-2"><span>→</span> Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
