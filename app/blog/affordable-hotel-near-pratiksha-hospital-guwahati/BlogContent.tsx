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
      q: "Is the hotel far from the Pratiksha Hospital in Guwahati?",
      a: "No, you can easily reach the hospital as it lies within a very convenient short walking distance."
    },
    {
      q: "Does Atithi Homes provide appropriate family accommodation in Guwahati?",
      a: "Yes, family accommodations are clean and secured with Atithi Homes. We have excellent child-friendly and elderly-friendly features."
    },
    {
      q: "What makes Atithi Guest House the best budget hotel near Pratiksha Hospital?",
      a: "At Atithi Homes, we provide the following services, making us the best choice for a comfortable stay for guests near Pratiksha Hospital:<br/><div class=\"mt-3 space-y-2\"><p>• High-quality amenities</p><p>• 24/7 client support</p><p>• Premium stay experience</p><p>• Affordable price</p></div>"
    },
    {
      q: "Is parking available at Atithi Guest House near VIP Road Guwahati?",
      a: "Yes, we have the standard on-site parking. For assistance, we have also safe parking alternatives."
    },
    {
      q: "Can I book comfortable rooms at Atithi Guest House online in advance?",
      a: "Yes, Atithi Homes accepts online room booking payments in advance. Now, you can get your preferred room during busy medical peak seasons."
    }
  ];

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header Section */}
      <header className="relative bg-[#1E3A8A] text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/img1.jpeg"
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
            Affordable Hotel near Pratiksha Hospital Guwahati
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Content Column - White Background with Border */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Stay Smartly */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Affordable Hotel near Pratiksha Hospital Guwahati: Stay Smartly at Atithi Homes</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>The best place is not that hard to find when you have the right area to explore. You can get your pocket-friendly place for family or medical travel easily.</p>
                <p>
                  Your search ends perfectly with <Link href="/about" className="text-blue-600 underline hover:text-blue-800">Atithi Homes</Link>. We provide the best options on <strong>Affordable Hotel near pratiksha hospital Guwahati</strong>. Our property combines budget-friendly pricing with absolute peace of mind.
                </p>
                <p>
                  Enjoy unparalleled comfort – <Link href="/" className="text-blue-600 underline hover:text-blue-800 font-bold">Book Atithi Guest House Guwahati today!</Link>
                </p>
              </div>
            </section>

            {/* Trusted Hotel */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Your Trusted Hotel near Pratiksha Hospital Guwahati</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>As a top-rated hotel near Pratiksha Hospital Guwahati, we provide the finest experience for patients, corporate travelers, and families. The services are customizable as we focus more on comfort and well-being.</p>
                <p>If you are hunting for an affordable hotel in Guwahati, here you can get the right services and avail the requirements. We understand how crucial clean environments are, especially when traveling for medical checkups.</p>
                <p>Choosing Aithi Homes is a perfect move. Within our services, travellers can get easy access to emergency services without enduring stressful traffic jams.</p>
                <p>Stay near Pratiksha Hospital with us and experience unmatched local hospitality!</p>
              </div>
            </section>

            {/* Best Budget Hotel */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Discover the Best Budget hotel near Pratiksha Hospital</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>A few reliable budget hotel near Pratiksha Hospital are available. Among them, Atithi Homes is the best and stands out as a unique solution. We provide a comfortable stay near Pratiksha Hospital that allows you to relax fully.</p>
                <p>Here, you get affordable and the best type of guest house near Pratiksha Hospital and a personalized homestay near Pratiksha Hospital.</p>
                <p className="font-bold text-gray-900">With Atithi Homes, you get:</p>
                <div className="grid grid-cols-1 gap-y-4 ml-2">
                  {[
                    "Premium guest experience",
                    "Keep your medical journey safer",
                    "Suitable for medical or casual trips, easy, safe, and entirely practical"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Reserving your spot online now – <Link href="/contact" className="text-blue-600 underline hover:text-blue-800 font-bold">Grab the best deals at Atithi Guest House!</Link>
                </p>
              </div>
            </section>

            {/* Affordable stay */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Affordable stay at Atithi Guest House near VIP Road Guwahati</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>Atithi Homes is proud to be a highly recommended family accommodation in Guwahati when it comes to providing extra space, privacy, and safety. Our well-maintained rooms near Pratiksha Hospital will easily cater to your specific demands.</p>
                <p>If you want to grab the benefits and plan an ideal family trip, you can go ahead with a premium stay near Pratiksha Hospital.</p>
                <p>Our history of serving thousands. Yes, we have a huge number of trusted accommodations by Atithi Guest House. Our strategically situated Atithi Guest House near VIP Road Guwahati has grabbed the attention of many visitors.</p>
                <p>When you stay at Atithi Home’s guest house, you focus strictly on what matters most to your family. We handle the rest from boarding to checkout.</p>
                <p>
                  Reserve your affordable stay at Atithi Guest House instantly – <Link href="/contact" className="text-blue-600 underline hover:text-blue-800 font-bold uppercase">Book Now!</Link>
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>A quality Affordable Hotel near pratiksha hospital Guwahati is rare to find. Atithi Homes doesn't make any false claims. We have bridged the gap between luxury and affordability. We provide the ultimate solution.</p>
                <p>Make your reservation today and enjoy a stress-free trip to Guwahati!</p>
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
