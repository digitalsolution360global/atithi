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
  FaPlusCircle,
  FaUtensils,
  FaLock,
  FaUserShield,
  FaCamera,
} from "react-icons/fa";

const faqs = [
  { 
    q: "Is Atithi Homes really a hotel open 24 hours in Guwahati?", 
    a: "Yes, we have staff that operate for 24 hrs at the reception to give you the right guidance during the check-ins and check-outs.", 
    icon: FaClock 
  },
  { 
    q: "How close is Atithi Homes to Pratiksha Hospital?", 
    a: "Atithi Homes hotels are near to Pratiksha Hospital, a few minutes to drive to the desired hospital.", 
    icon: FaMapMarkerAlt 
  },
  { 
    q: "What should I do if I need an emergency stay near Pratiksha Hospital Guwahati?", 
    a: "Call to our Atithi Home contact number immediately if you want any kind of support you require at any point of time.", 
    icon: FaPhone 
  },
  { 
    q: "Can I get food at your 24 hours hotel in Guwahati after midnight?", 
    a: "Yes! At Atithi Homes, you get food services active after midnight, making us the perfect choice for travelers of the night.", 
    icon: FaUtensils 
  },
  { 
    q: "Are your rooms at Atithi Home Guwahati safe for solo female travelers?", 
    a: "Yes, our 24/7 hotel near Pratiksha Hospital is safe for female travelers all the time as we monitor every security work through skilled professionals and take major precautions for the safety of every passenger, including female members.", 
    icon: FaUserShield 
  },
];

const highlights = [
  { icon: FaClock, label: "Availability", value: "24/7" },
  { icon: FaPlusCircle, label: "Priority", value: "Emergency" },
  { icon: FaShieldAlt, label: "Security", value: "Verified" },
  { icon: FaCheckCircle, label: "Standard", value: "Hygienic" },
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
            src="/assets/blog_24h_hotel.png"
            alt="Atithi Homes 24/7"
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
            <FaClock /> Emergency & 24/7 Access
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
            Looking for a 24 Hours Hotel in Guwahati? Here’s What You Should Know
          </h1>
          <p className="mt-2 text-sm font-semibold text-white/70">Published on: 31 Mar 2026</p>
          <p className="mt-4 text-base md:text-lg text-white/90 mb-5 max-w-2xl">
            Atithi Homes provides immediate check-in for medical families needing a safe, quiet, and clean place to rest.
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
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Introduction</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Looking for a 24 Hours Hotel in Guwahati? Here’s What You Should Know</h2>
                <div className="mt-10">
                  <p className="relative pl-20 md:pl-24 -indent-16 md:-indent-20 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <span className="absolute left-0 text-8xl md:text-9xl font-black text-[#1E3A8A]/20 leading-none select-none">H</span>
                    owever, in any medical emergency that appears uncertain, many hotels are not located near the finest hospitals of Guwahati to attend to these cases. But the case of Atithi Homes is different.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    As a premier 24-hour hotel in Guwahati, Atithi Homes bridges the gaps between standard lodging and finest hospitality. We offer the flexibility that contributes to our services in on-time check-ins and check-outs.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    Worries no more about any medical emergency – contact Atithi Home Guwahati today and book your stay without the clock-watching!
                  </p>
                </div>
              </div>
            </section>

            <section className="relative py-10 md:py-14 px-6 overflow-hidden bg-white rounded-2xl border border-gray-100 mt-10">
              <div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 lg:h-[420px]">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/10 via-white to-[#FACC15]/10" />
                    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                      <Image src="/assets/blog_24h_hotel.png" alt="24/7 Hotel Near Pratiksha Hospital" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 left-4 bg-white/90 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full shadow">Strategic Location</div>
                      <div className="absolute bottom-4 left-4 bg-white/95 text-gray-800 text-xs md:text-sm px-3 py-2 rounded-xl shadow flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-xs font-bold">24/7</span>
                        <span>Near Pratiksha Hospital</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Strategic Location</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Strategic Location: 24/7 Hotel Near Pratiksha Hospital</h2>
                    <div className="mt-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>The primary advantage of booking your hotels in Guwahati with Atithi Homes is that we are close to Pratiksha Hospital, Guwahati. So, choosing a 24 Hours Hotel in Guwahati, the Atithi Homes, can be effective during any emergency.</p>
                      <p>Our hotel is always open and close to the best hospital. So, patients and their relatives will always get a second home feeling all the time. We categorize our services effectively to maintain the inner peace of patients and attendants. We provide a peaceful retreat for those navigating the challenges of hospital visits.</p>
                      <p className="font-semibold text-[#1E3A8A]">
                        Reach out via the <Link href="/contact" className="underline hover:text-[#10275c]">Atithi Home contact number</Link> for immediate room availability near the hospital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10 md:py-14 px-6 bg-gray-50/80 rounded-2xl mt-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="shrink-0 text-center lg:text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-24 h-24 rounded-2xl bg-white shadow flex items-center justify-center text-3xl text-[#1E3A8A]"><FaCamera /></div>
                    <div className="w-24 h-24 rounded-2xl bg-white shadow flex items-center justify-center text-3xl text-[#1E3A8A]"><FaLock /></div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Safety and Security</span>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900 mb-6">Safety and Security: Your Secure Hotel Open Now in Guwahati</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Atithi Homes implements rigorous standards to enhance the security and safety of every person. If you require any type of medical emergency during your trip to Guwahati, there will be no difficulty at all when you choose us.
                  </p>
                  <p className="font-bold text-gray-900 mb-4">Let’s take a look at the important takeaways of getting the right Hotel open 24 hours in Guwahati:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700"><FaCheckCircle className="text-[#FACC15]" /> 24/7 Surveillance</li>
                    <li className="flex items-center gap-3 text-gray-700"><FaCheckCircle className="text-[#FACC15]" /> Verified Staff with background checks</li>
                    <li className="flex items-center gap-3 text-gray-700"><FaCheckCircle className="text-[#FACC15]" /> Secure check-ins with ID verification</li>
                  </ul>
                  <p className="mt-6 text-gray-700 italic">Travel with confidence knowing a safe room awaits you. Securing a 24/7 hotel near Pratiksha Hospital is easy to find with Atithi Homes now!</p>
                </div>
              </div>
            </section>

            <section className="py-10 md:py-14 px-6 bg-white rounded-2xl border border-gray-100 mt-10">
              <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Emergency Stay</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Why Atithi Homes is the Top Emergency Stay Near Pratiksha Hospital Guwahati</h2>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                The Atithi Home Guwahati is the right choice for any type of top medical case in any hour. With our hotel rooms, where we offer a level of cleanliness and hygiene, it is always easy to keep your mind relaxed and get the best level of treatment for your patients.
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: "Flexible extensions", icon: FaPlusCircle },
                  { title: "Compassionate pricing", icon: FaRupeeSign },
                  { title: "Hygienic standards", icon: FaCheckCircle },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#1E3A8A] text-[#FACC15] flex items-center justify-center text-xl mb-4">
                      <item.icon />
                    </div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-8 rounded-2xl bg-[#1E3A8A] text-white text-center">
                <p className="text-xl font-semibold mb-6">Wait no further during any medical emergency? <Link href="/contact" className="hover:text-[#FACC15] underline decoration-[#FACC15]">Contact the Atithi Home</Link> immediately for priority booking and empathetic service.</p>
                <Link href="/contact" className="inline-block bg-[#FACC15] text-[#1E3A8A] font-bold px-8 py-3 rounded-full hover:scale-105 transition">Priority Booking Now</Link>
              </div>
            </section>

            <section className="py-12 md:py-16 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Conclusion</span>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  Whether you are seeking a 24/7 hotel near Pratiksha Hospital for medical reasons or simply need a hotel open now in Guwahati after a late-night adventure, choose <Link href="/" className="text-[#1E3A8A] font-bold hover:underline">Atithi Homes</Link>.
                </p>
                <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed font-semibold">
                  Check out the <Link href="/services" className="text-[#1E3A8A] underline hover:text-[#10275c]">full amenity list</Link> at <Link href="/" className="text-[#1E3A8A] underline hover:text-[#10275c]">Atithi Home Guwahati</Link> and upgrade your stay.
                </p>
              </div>
            </section>

            <section className="py-12 md:py-16 px-6 bg-gray-50/80 rounded-2xl mt-10">
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
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Emergency Booking</h3>
              <p className="text-sm text-gray-500 mb-6">Contact Atithi Home Guwahati for priority medical stays.</p>
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
                  <textarea id="blog-message" name="message" value={enquiry.message} onChange={handleEnquiryChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] outline-none resize-none" placeholder="Medical emergency stay request..." />
                </div>
                {enquiryStatus === "success" && <p className="text-sm text-green-600 font-medium">Priority request sent!</p>}
                {enquiryStatus === "error" && <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={enquiryLoading} className="w-full bg-[#1E3A8A] text-white font-semibold py-3 rounded-xl hover:bg-[#10275c] transition disabled:opacity-70">
                  {enquiryLoading ? "Sending..." : "Request Priority Access"}
                </button>
              </form>
              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-3">
                <FaPhone className="text-[#1E3A8A]" />
                <p className="text-sm font-bold text-gray-900">+91 6000891365</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="relative py-12 md:py-16 px-6 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/assets/blog_24h_hotel.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10 md:px-10 md:py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Safe Hallway Awaits</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">Atithi Homes — trusted emergency stay near Pratiksha Hospital. Secure your room now without clock-watching.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#FACC15] text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-yellow-400 transition hover:scale-105">
            Book Stay Now <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
