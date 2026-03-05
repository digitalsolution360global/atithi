"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaClock,
  FaShieldAlt,
  FaQuestionCircle,
  FaParking,
  FaPhone,
  FaCheckCircle,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const faqs = [
  { q: "Do you own hotels near Guwahati Airport?", a: "Yes, communication between Atithi Homes hotels and the airport is easy and quick.", icon: FaMapMarkerAlt },
  { q: "Do users get free Wi-Fi at Atithi Homes?", a: "Yes, fellow travelers get all the facilities, including high-speed internet, at our Budget Hotel in Guwahati.", icon: FaWifi },
  { q: "Can any tourist get access to a private kitchen?", a: "Yes, for a unique or strict diet plan, we let our guests access the private kitchen.", icon: FaUtensils },
  { q: "Is there parking available at the hotel?", a: "Even though we have the Affordable hotel in Guwahati, we do provide a subtle parking space for the automobiles of our guests.", icon: FaParking },
  { q: "Can I book a Hotel near VIP Road Guwahati for a long-term stay?", a: "Yes, of course, you can get the best and the right Cheap hotel in Guwahati near VIP Road, which will help you in your long-term stay.", icon: FaClock },
];

const highlights = [
  { icon: FaMapMarkerAlt, label: "VIP Road Location", value: "Prime Area" },
  { icon: FaClock, label: "Open", value: "24/7" },
  { icon: FaRupeeSign, label: "Budget", value: "Friendly" },
  { icon: FaShieldAlt, label: "Safe", value: "Stay" },
];

export default function BlogPost() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [enquiry, setEnquiry] = useState({ name: "", email: "", mobile: "", message: "" });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryLoading(true);
    setEnquiryStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiryStatus("success");
        setEnquiry({ name: "", email: "", mobile: "", message: "" });
      } else setEnquiryStatus("error");
    } catch {
      setEnquiryStatus("error");
    }
    setEnquiryLoading(false);
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero banner for blog detail */}
      <header className="relative bg-[#1E3A8A] text-white pt-20 pb-14 md:pb-18">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/home-img1.jpg"
            alt="Atithi Home"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]/80" />

        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm text-white/80 mb-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            /{" "}
            <span className="font-semibold">Detail</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#1E3A8A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
            <FaMapMarkerAlt /> Atithi Home Guwahati
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
            Best Budget Hotel near VIP Road Guwahati for Comfortable & Affordable Stay
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 mb-5 max-w-2xl">
            Stay at Atithi Home — 24/7 service, affordable rooms, and prime location near VIP Road Guwahati. Know why guests choose us for their Guwahati visit.
          </p>
        </div>
      </header>

      {/* Highlight bar – white card */}
      <section className="relative z-10 -mt-20 mx-4 md:mx-8 lg:mx-16">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1E3A8A] text-[#FACC15] flex items-center justify-center text-2xl mb-3">
                <h.icon />
              </div>
              <p className="font-bold text-lg text-gray-900">{h.value}</p>
              <p className="text-sm text-gray-500">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-column: main content + right sidebar enquiry */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 pb-8 md:pb-10">
          {/* LEFT: Main content */}
          <div>
            {/* Intro – white background, drop cap */}
            <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-gray-50/80 rounded-2xl px-6 md:px-8">
              <div>
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Introduction</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Welcome to Guwahati</h2>
                <div className="mt-10">
                  <p className="relative pl-20 md:pl-24 -indent-16 md:-indent-20 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <span className="absolute left-0 text-8xl md:text-9xl font-black text-[#1E3A8A]/20 leading-none select-none">W</span>
                    elcome to the destination, where the Brahmaputra is the source of joy. The river flows to show its grace upon the city of Guwahati, Assam. The uniqueness of Guwahati can be clearly visible when you plan your stay at a beautiful place.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    However, finding a Budget Hotel in Guwahati is a challenging part. Mostly, new travelers fall into a maze made of different options. Among all the searches, VIP Road is the only area that has evolved rapidly and become a traveler&apos;s favorite spot.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    At the forefront of this hospitality revolution is Atithi Homes. We give you the right hotel near VIP Road, Guwahati, that offers the best city views and easy access to all tourist spots.
                  </p>
                  <div className="mt-12 p-8 md:p-10 rounded-2xl bg-white border-l-4 border-[#1E3A8A] shadow-md">
                    <p className="text-xl md:text-2xl font-semibold text-[#1E3A8A] leading-relaxed">
                      Time to your visit to Guwahati is truly unforgettable – Get seamless connectivity and save more time & money with Atithi Hotel VIP Road!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why VIP Road – image with LIGHT overlay, text on white card over it */}
            <section className="relative py-10 md:py-14 px-6 overflow-hidden bg-gray-50/80 rounded-2xl">
              <div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* LEFT: Enhanced image card */}
                  <div className="relative h-80 lg:h-[420px]">
                    {/* soft gradient behind */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/10 via-white to-[#FACC15]/10" />

                    {/* main image card */}
                    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                      <Image
                        src="/assets/banner/b4.jpg"
                        alt="Hotel near VIP Road Guwahati"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />

                      {/* Top-left badge */}
                      <div className="absolute top-4 left-4 bg-white/90 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full shadow">
                        Near VIP Road
                      </div>

                      {/* Bottom-left info chip */}
                      <div className="absolute bottom-4 left-4 bg-white/95 text-gray-800 text-xs md:text-sm px-3 py-2 rounded-xl shadow flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-xs font-bold">
                          Prime
                        </span>
                        <span>Location • Easy Access</span>
                      </div>
                    </div>

                    {/* small secondary photo overlay for richer UI */}
                    <div className="hidden sm:block absolute -bottom-4 right-4 w-32 h-24 md:w-40 md:h-28 rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
                      <Image
                        src="/assets/img1.jpeg"
                        alt="Comfortable rooms at Atithi Home"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Why VIP Road</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      Why VIP Road is Your Best Bet for Your Stay in Guwahati
                    </h2>
                    <div className="mt-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>The way to get a Budget Hotel in Guwahati is through Atithi Homes. We provide all the basic to advanced facilities that a traveller seeks all the time when they visit a new place. One of the most important facts about the Atithi Home Barbari is that we provide kitchens and dining areas to complete all the requirements.</p>
                      <p>We also provide essential services like laundry, 24/7 caretaker assistance, and secure parking. Also, we do not charge more than others who never provide the best, but charge more for unnecessary luxury services.</p>
                      <p>That&apos;s why we offer a premium stay experience at a fraction of the cost. By saving your money, you can invest it in the right ways to explore more during your Northeast adventure.</p>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-3 bg-[#1E3A8A] text-white font-bold px-8 py-4 rounded-2xl">
                      <FaCheckCircle className="text-xl text-[#FACC15]" />
                      Why pay more for luxury when you can get all the essentials here?
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Local Experience – bento: image + white text side */}
            <section className="py-10 md:py-14 px-6 bg-white rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative h-80 lg:h-auto lg:min-h-[520px]">
                  <Image src="/assets/img1.jpeg" alt="Local Food Experience" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 rounded-xl shadow">
                    <p className="text-[#1E3A8A] font-bold">Authentic Assamese • Home-cooked Meals</p>
                  </div>
                </div>
                <div className="bg-white p-10 md:p-14 lg:p-16 flex flex-col justify-center border border-gray-100">
                  <div className="flex items-center gap-2 text-[#1E3A8A] mb-4">
                    <FaUtensils className="text-2xl" />
                    <span className="font-bold uppercase tracking-wider text-sm">Local Experience</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Get the Most Local Experience: The Food and Culture
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>There is no way you will find a budget and comfortable stay at a hotel near VIP road Guwahati, without Atithi Homes. Our stay is in the middle of the authentic neighbourhood of Assam.</p>
                    <p>During your stay, we give the best vibe to our fellow guests and give you a comfortable stay in a beautiful place. Here at Atithi Homes, we prepare all the most delicious food at a minimal expense.</p>
                    <p>Let&apos;s enjoy the most authentic Northeastern food within a modern comfort, as we have a textured travel experience that traditional hotels simply cannot match.</p>
                  </div>
                  <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <p className="text-gray-900 font-bold text-lg">Never forget to book your rooms from the Affordable hotel near VIP Road Barbari, managed by Atithi Homes Barbari.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Amenities – white section with blue accent strip */}
            <section className="py-10 md:py-14 px-6 bg-gray-50/80 rounded-2xl">
              <div>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="shrink-0 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-[#1E3A8A] bg-[#1E3A8A]/5 text-[#1E3A8A]">
                      <span className="text-5xl md:text-6xl font-black">24/7</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      All Essential Amenities at Budget Prices
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                      We provide essential services like laundry, 24/7 caretaker assistance, and secure parking. Also, we do not charge more than others who never provide the best, but charge more for unnecessary luxury services. Check out our room rates and save more in the Budget Hotel in Guwahati!
                    </p>
                    <div className="inline-flex items-center gap-3 bg-[#1E3A8A] text-white font-bold px-8 py-4 rounded-2xl">
                      <FaClock className="text-xl text-[#FACC15]" />
                      Experience premium comfort at budget prices — book today!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion – white, big quote */}
            <section className="py-12 md:py-16 px-6 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Conclusion</span>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  Whether you are here for a quick business trip or coming with your family to enjoy the beauty of Guwahati and other territories of Assam, the stay at Atithi Homes will always be worth it.
                </p>
                <blockquote className="mt-12 relative p-10 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-5xl text-[#1E3A8A]/30 font-serif">&quot;</span>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug px-4">
                    Experience the perfect blend of home-like comfort and premium service from a Cheap hotel in Guwahati near VIP Road.
                  </p>
                </blockquote>
              </div>
            </section>

            {/* FAQs – accordion dropdown */}
            <section className="py-12 md:py-16 px-6 bg-gray-50/80">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                  <FaQuestionCircle className="text-3xl md:text-4xl text-[#1E3A8A]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const Icon = faq.icon;
                    const isOpen = openFaqIndex === i;

                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : i)
                          }
                          className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-left transition ${
                            isOpen
                              ? "bg-[#1E3A8A] text-white"
                              : "bg-white text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div
                              className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-lg md:text-xl ${
                                isOpen
                                  ? "bg-white/15 text-[#FACC15]"
                                  : "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                              }`}
                            >
                              <Icon />
                            </div>
                            <span className="font-semibold text-sm md:text-base">
                              {faq.q}
                            </span>
                          </div>
                          <span
                            className={`ml-3 text-lg md:text-xl transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 text-sm md:text-base text-gray-700 leading-relaxed bg-white">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: Enquiry form sidebar – scrolls with page */}
          <aside>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Stay</h3>
              <p className="text-sm text-gray-500 mb-6">Send us your enquiry — we&apos;ll respond quickly.</p>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="blog-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="blog-name"
                    type="text"
                    name="name"
                    value={enquiry.name}
                    onChange={handleEnquiryChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="blog-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="blog-email"
                    type="email"
                    name="email"
                    value={enquiry.email}
                    onChange={handleEnquiryChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="blog-mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  <input
                    id="blog-mobile"
                    type="tel"
                    name="mobile"
                    value={enquiry.mobile}
                    onChange={handleEnquiryChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="blog-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="blog-message"
                    name="message"
                    value={enquiry.message}
                    onChange={handleEnquiryChange}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none resize-none"
                    placeholder="Check-in date, number of guests, or any question..."
                  />
                </div>

                {enquiryStatus === "success" && (
                  <p className="text-sm text-green-600 font-medium">Message sent! We&apos;ll get back soon.</p>
                )}
                {enquiryStatus === "error" && (
                  <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="w-full bg-[#1E3A8A] text-white font-semibold py-3 rounded-xl hover:bg-[#10275c] transition disabled:opacity-70"
                >
                  {enquiryLoading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA – light section */}
      <section className="relative py-12 md:py-16 px-6 bg-gray-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/assets/images/home-img1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10 md:px-10 md:py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Ready to Experience Guwahati?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Atithi Home — trusted budget hotel near VIP Road Guwahati. 24/7 service, clean rooms and a peaceful stay in the heart of the city.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#FACC15] text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-yellow-400 transition hover:scale-105"
          >
            Book Now
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
