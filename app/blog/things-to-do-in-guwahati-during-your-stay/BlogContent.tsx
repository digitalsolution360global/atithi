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
      q: "Why should I choose to stay at Atithi Guest House Guwahati for my vacation?",
      a: "Choosing Atithi Guest House Guwahati ensures a perfect blend of modern comfort and traditional hospitality. We offer premium features, top-tier security, and authentic Assamese cuisine. Our central location means you spend less time in traffic and more time enjoying your Guwahati holiday."
    },
    {
      q: "What are the best things to do in Guwahati for a 2-day short trip?",
      a: "You can follow this plan to get the most out of a short 2-day visit:<br/><div class=\"mt-3 space-y-2\"><p>• Visit the holy Kamakhya Temple in the morning</p><p>• Shop for traditional silk at Fancy Bazar</p><p>• Book an evening Brahmaputra sunset cruise</p></div><br/>Staying at Atithi Guest House Guwahati puts you right in the heart of the city, allowing you to enjoy these attractions seamlessly."
    },
    {
      q: "What are the most popular tourist attractions in Guwahati for families?",
      a: "Families visiting Guwahati highly recommend these two attractions:<br/><div class=\"mt-3 space-y-2\"><p><strong>1. Assam State Zoo cum Botanical Garden:</strong> Perfect for wildlife enthusiasts and children.</p><p><strong>2. Regional Science Centre:</strong> An educational and fun experience for kids of all ages.</p></div>"
    },
    {
      q: "Where can I find the best Guwahati local food places near the center?",
      a: "For authentic Assamese flavors, explore these vibrant commercial areas near the city center:<br/><div class=\"mt-3 space-y-2\"><p>• <strong>Panbazar:</strong> Famous for traditional eateries and Assamese thalis.</p><p>• <strong>Paltan Bazar:</strong> Known for its bustling atmosphere and local street food delights.</p></div>"
    },
    {
      q: "What is the best time of year to enjoy family activities in Guwahati?",
      a: "We recommend planning your Guwahati trip during the <strong>autumn and winter months (October to March)</strong>. The weather is cool and pleasant, making it perfect for outdoor activities and sightseeing."
    }
  ];

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header Section */}
      <header className="relative bg-[#1E3A8A] text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/img6.jpeg"
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
            Things to Do in Guwahati During Your Stay
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
                src="/assets/things-to-do-in-guwahati-during-your-stay.webp"
                alt="Things to Do in Guwahati During Your Stay - Atithi Homes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent" />
            </div>

            {/* Discover the Magic */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-sans">Discover the Magic: Best Things to Do in Guwahati During Your Stay</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>Guwahati is a perfect place to plan your holiday. This place is the right blend of an incredible ancient history and beautiful natural landscapes. For modern facilities and smooth comfort, you should opt for a cozy environment within the guest house.</p>
                <p>
                  Thanks to <Link href="/about" className="text-blue-600 underline hover:text-blue-800">Atithi Homes</Link> and its <Link href="/" className="text-blue-600 underline hover:text-blue-800 font-bold">best Atithi Guest House Guwahati</Link>. They are going to provide the perfect experience with a relaxing atmosphere.
                </p>
                <p>Let’s dive into the ultimate itinerary for an unforgettable trip. Understand what the Best things to do in Guwahati for tourists are from our guide now!</p>
              </div>
            </section>

            {/* Kamakhya Temple */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Seek Blessings at the Holy Kamakhya Temple</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>This ancient temple is deeply spiritual and a perfect attraction in Guwahati. It is among the Best places to visit in Guwahati.</p>
                <p className="font-bold text-gray-900">True highlights that you need to learn before visiting these tourist attractions in Guwahati:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ml-2">
                  {[
                    "Stunning Hill Views",
                    "Deep Spiritual Roots",
                    "Unique Architecture",
                    "Festive Energy",
                    "Hidden Shrines",
                    "Easy Local Transport"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* River Cruise */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Enjoy a Romantic Evening Cruise on the Brahmaputra River</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>Witnessing the perfect sunset over the mighty Brahmaputra River is a perfect addition to your plan for Guwahati. You can enjoy traditional live music and hot Assamese tea while floating along one of the widest rivers in the world.</p>
                <p className="font-bold text-gray-900">True highlights that you need to learn before visiting this place:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ml-2">
                  {[
                    "Stunning Sunsets",
                    "Cultural Programs",
                    "Delicious Dinners",
                    "Umananda Views",
                    "Perfect Photography",
                    "Relaxing Atmosphere"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p>Plan your holiday and stay at Atithi Guest House Guwahati for the ultimate relaxation after your river adventures.</p>
              </div>
            </section>

            {/* Assam State Zoo */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Plan a Fun-Filled Day at the Assam State Zoo cum Botanical Garden</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>Among many other Family activities in Guwahati, this one is interesting. The zoo is home to the majestic one-horn rhinoceros, royal Bengal tigers, and vibrant birds.</p>
                <p className="font-bold text-gray-900">Let’s explore the key highlights first:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ml-2">
                  {[
                    "Iconic Wildlife",
                    "Kid-Friendly Paths",
                    "Rich Birdwatching",
                    "Natural Forest Canopy",
                    "Lush Botanical Space",
                    "Central Location"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p>Give your children an exciting wildlife experience they will remember forever – Get more tips on Family activities in Guwahati from our experts now!</p>
              </div>
            </section>

            {/* Local Food */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Indulge in Traditional Delicacies at Guwahati Local Food Places</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>Try a traditional Assamese thali – well, you will always love these Assamese flavours. Yes, any journey you are planning to do in Guwahati, you shouldn’t stop enjoying its local cuisine.</p>
                <p>&quot;Khaar&quot; (a traditional alkaline dish) and &quot;Masor Tenga&quot; (a delicious, refreshing sour fish curry) are the most popular choices among visitors.</p>
                <p className="font-bold text-gray-900">For expert guidance, do follow the given highlights:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ml-2">
                  {[
                    "Authentic Flavors",
                    "Street Food Delights",
                    "Traditional Assamese Thali",
                    "Fresh Ingredients",
                    "Unique Sweet Treats",
                    "Comforting Cafes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p>Experience premium hospitality and stay at Atithi Guest House Guwahati and enjoy more home-friendly dishes too!</p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>Guwahati is a beautiful city. From the sacred steps of Kamakhya Temple to the banks of the Brahmaputra River, you will find endless sights to explore. So, planning for a comfortable stay is essential to enjoy all the natural beauty.</p>
                <p>
                  Choose to <strong>stay at Atithi Guest House Guwahati</strong> to enjoy excellent comfort – <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">book your slot now!</Link>
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
