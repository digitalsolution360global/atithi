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
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

interface Section {
  title: string;
  content: string | string[];
}

interface FAQ {
  q: string;
  a: string;
  icon?: any;
}

interface BlogLayoutProps {
  title: string;
  date: string;
  mainImage: string;
  introduction: string;
  sections: Section[];
  faqs: FAQ[];
  heroImage?: string;
}

export default function BlogLayout({
  title,
  date,
  mainImage,
  introduction,
  sections,
  faqs,
  heroImage = "/assets/images/home-img1.jpg",
}: BlogLayoutProps) {
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
      } else {
        setEnquiryStatus("error");
      }
    } catch {
      setEnquiryStatus("error");
    }
    setEnquiryLoading(false);
  };

  const highlights = [
    { icon: FaMapMarkerAlt, label: "Walking distance", value: "2–5 min" },
    { icon: FaClock, label: "Open", value: "24/7" },
    { icon: FaRupeeSign, label: "Budget", value: "Friendly" },
    { icon: FaShieldAlt, label: "Safe", value: "Families" },
  ];

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero banner for blog detail */}
      <header className="relative bg-[#1E3A8A] text-white pt-20 pb-14 md:pb-18">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroImage}
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
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 mb-5 max-w-2xl">
            Updated: {date} — Stay at Atithi Home with 24/7 service and comfortable rooms near Pratiksha Hospital.
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

      {/* Main content + right sidebar enquiry */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 pb-8 md:pb-10">
          {/* Main content */}
          <div className="space-y-10">
            {/* Intro – white background, drop cap */}
            <section className="relative p-10 md:p-14 bg-gray-50/80 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-[#1E3A8A] font-bold tracking-[0.2em] uppercase text-sm">Introduction</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Why your stay matters</h2>
              <div className="mt-8">
                 <p className="text-gray-700 leading-relaxed text-lg md:text-xl italic border-l-4 border-[#FACC15] pl-6">
                   {introduction}
                 </p>
              </div>
            </section>

            {/* Dynamic Sections */}
            {sections.map((section, index) => (
              <section key={index} className="relative p-10 md:p-14 bg-gray-50/80 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <div className="text-gray-700 leading-relaxed text-lg">
                   {Array.isArray(section.content) ? (
                     <ul className="space-y-3 pt-2">
                       {section.content.map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <FaCheckCircle className="text-[#1E3A8A] mt-1 shrink-0" />
                           <span>{item}</span>
                         </li>
                       ))}
                     </ul>
                   ) : (
                     <p>{section.content}</p>
                   )}
                </div>
              </section>
            ))}

            {/* FAQ Sections */}
            <section className="py-12 px-10 bg-gray-50/80 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <FaQuestionCircle className="text-3xl md:text-4xl text-[#1E3A8A]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left transition ${
                          isOpen ? "bg-[#1E3A8A] text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span className="font-semibold">{faq.q}</span>
                        <span className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 text-gray-700 leading-relaxed bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Stay</h3>
              <p className="text-sm text-gray-500 mb-6">Send us your enquiry — we&apos;ll respond quickly.</p>
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={enquiry.name}
                  onChange={handleEnquiryChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 outline-none"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={enquiry.mobile}
                  onChange={handleEnquiryChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 outline-none"
                />
                <textarea
                  name="message"
                  value={enquiry.message}
                  onChange={handleEnquiryChange}
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1E3A8A]/30 outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-xl hover:bg-[#10275c] transition disabled:opacity-70"
                >
                  {enquiryLoading ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
