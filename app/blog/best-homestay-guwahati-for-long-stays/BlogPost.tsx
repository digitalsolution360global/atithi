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
  FaHome,
  FaWifi,
} from "react-icons/fa";

const faqs = [
  { q: "Do you offer special rates for long stays?", a: "Yes, we provide significant discounts for guests staying 7 days or longer.", icon: FaRupeeSign },
  { q: "Is Wi-Fi high-speed for working remotely?", a: "We provide dedicated high-speed Wi-Fi, perfect for business travelers and digital nomads.", icon: FaWifi },
  { q: "Is laundry service available?", a: "Yes, we have on-site laundry facilities for our long-stay guests.", icon: FaHome },
  { q: "Can we cook our own meals?", a: "Select rooms come with access to a kitchen, allowing you to prepare meals exactly the way you like.", icon: FaCheckCircle },
  { q: "How secure is the area for long stays?", a: "Atithi Home is located in a peaceful and secure residential neighborhood with 24/7 staffing.", icon: FaShieldAlt },
];

const highlights = [
  { icon: FaHome, label: "Comfort", value: "Like Home" },
  { icon: FaRupeeSign, label: "Price", value: "Budget-Friendly" },
  { icon: FaWifi, label: "Connectivity", value: "High-Speed" },
  { icon: FaShieldAlt, label: "Security", value: "24/7 Staff" },
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
      <header className="relative bg-[#1E3A8A] text-white pt-20 pb-14 md:pb-18">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/blog_homestay_comfort.png"
            alt="Long-Stay Home in Guwahati"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]/80" />

        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm text-white/80 mb-2">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / <span className="font-semibold">Detail</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#1E3A8A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
            <FaHome /> Long-Stay Priority
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
            Why Atithi Home is the Perfect Choice for Long-Stay Accommodation in Guwahati
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 mb-5 max-w-2xl">
            Stay longer, feel better. Discover the unique advantages of Atithi Home for extended stays in the heart of Guwahati.
          </p>
        </div>
      </header>

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

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 pb-8 md:pb-10">
          <div>
            <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-gray-50/80 rounded-2xl px-6 md:px-8">
              <div>
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Beyond Hotels</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Your Home Away from Home</h2>
                <div className="mt-10">
                  <p className="relative pl-20 md:pl-24 -indent-16 md:-indent-20 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <span className="absolute left-0 text-8xl md:text-9xl font-black text-[#1E3A8A]/20 leading-none select-none">H</span>
                    ome is more than just a place to sleep; it's an environment of comfort and familiarity. When you're traveling for work, family, or personal reasons, a long-stay accommodation shouldn't feel like a temporary stop.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    Traditional hotels often lack the personal touch and flexibility needed for extended visits. Atithi Home fills this gap by offering a homestay-style experience with the professional service of a premium hotel.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    From the peaceful residential setting to the availability of essential amenities like kitchens and high-speed internet, every detail is designed for longevity and comfort.
                  </p>
                  <div className="mt-12 p-8 md:p-10 rounded-2xl bg-white border-l-4 border-[#1E3A8A] shadow-md">
                    <p className="text-xl md:text-2xl font-semibold text-[#1E3A8A] leading-relaxed">
                      Stay for weeks or months without ever feeling like a guest. Atithi Home is where your journey finds its steady ground.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-10 md:py-14 px-6 overflow-hidden bg-gray-50/80 rounded-2xl">
              <div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 lg:h-[420px]">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/10 via-white to-[#FACC15]/10" />
                    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                      <Image src="/assets/blog_homestay_comfort.png" alt="Comfortable Stay" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 left-4 bg-white/90 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full shadow">Peaceful Setting</div>
                      <div className="absolute bottom-4 left-4 bg-white/95 text-gray-800 text-xs md:text-sm px-3 py-2 rounded-xl shadow flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-xs font-bold">100%</span>
                        <span>Comfort Focus</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Budget Friendly</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Cost-Effective Comfort for Long Stays</h2>
                    <div className="mt-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>Extended hotel stays can quickly become prohibitively expensive. At Atithi Home, we understand the financial considerations of long-term travel.</p>
                      <p>Our tiered pricing model means the longer you stay, the more you save. This makes premium accommodation accessible for those visiting Guwahati for medical treatments, business projects, or family events.</p>
                      <p>By providing a home-like environment at a fraction of the cost of high-end hotels, we allow you to focus your resources on what truly matters during your visit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16 px-6 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Conclusion</span>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  Choosing Atithi Home means choosing a seamless, comfortable, and affordable experience in Guwahati. Let us be your home in the Northeast.
                </p>
                <blockquote className="mt-12 relative p-10 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-5xl text-[#1E3A8A]/30 font-serif">&quot;</span>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug px-4">
                    Your extended stay deserves more than just a room; it deserves Atithi Home.
                  </p>
                </blockquote>
              </div>
            </section>

            <section className="py-12 md:py-16 px-6 bg-gray-50/80">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                  <FaQuestionCircle className="text-3xl md:text-4xl text-[#1E3A8A]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Long-Stay FAQs</h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const Icon = faq.icon;
                    const isOpen = openFaqIndex === i;
                    return (
                      <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                          className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-left transition ${isOpen ? "bg-[#1E3A8A] text-white" : "bg-white text-gray-900 hover:bg-gray-50"}`}
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-lg md:text-xl ${isOpen ? "bg-white/15 text-[#FACC15]" : "bg-[#1E3A8A]/10 text-[#1E3A8A]"}`}>
                              <Icon />
                            </div>
                            <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                          </div>
                          <span className={`ml-3 text-lg md:text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                        </button>
                        {isOpen && <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 text-sm md:text-base text-gray-700 leading-relaxed bg-white">{faq.a}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          <aside>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Stay</h3>
              <p className="text-sm text-gray-500 mb-6">Send us your enquiry — we'll respond quickly.</p>
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="blog-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input id="blog-name" type="text" name="name" value={enquiry.name} onChange={handleEnquiryChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="blog-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="blog-email" type="email" name="email" value={enquiry.email} onChange={handleEnquiryChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="blog-mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  <input id="blog-mobile" type="tel" name="mobile" value={enquiry.mobile} onChange={handleEnquiryChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="blog-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="blog-message" name="message" value={enquiry.message} onChange={handleEnquiryChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none resize-none" placeholder="Duration of stay, number of guests..." />
                </div>
                {enquiryStatus === "success" && <p className="text-sm text-green-600 font-medium">Message sent! We'll get back soon.</p>}
                {enquiryStatus === "error" && <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={enquiryLoading} className="w-full bg-[#1E3A8A] text-white font-semibold py-3 rounded-xl hover:bg-[#10275c] transition disabled:opacity-70">
                  {enquiryLoading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      <section className="relative py-12 md:py-16 px-6 bg-gray-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/assets/blog_homestay_comfort.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10 md:px-10 md:py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Plan your long stay!</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">Atithi Home — your perfect long-term base in Guwahati. Enjoy peace, comfort, and reliability.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#FACC15] text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-yellow-400 transition hover:scale-105">
            Book Now <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
