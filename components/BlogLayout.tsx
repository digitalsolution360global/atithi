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
  introTitle?: string;
}

export default function BlogLayout({
  title,
  date,
  mainImage,
  introduction,
  sections,
  faqs,
  heroImage = "/assets/images/home-img1.jpg",
  introTitle,
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



  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero banner for blog detail */}
      <header className="relative bg-[#1E3A8A] text-white pt-4 pb-5 md:pb-18">
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

        <div className="relative max-w-7xl mx-auto px-6 p-10">
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-3xl">
            {title}
          </h1>

        </div>
      </header>

      {/* Highlight bar – white card */}


      {/* Main content + right sidebar enquiry */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-16">

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 pb-8 md:pb-10">
          {/* Main content - White Background with Border (All in one box) */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Blog Main Image */}
            <div className="relative -mx-8 -mt-8 md:-mx-12 md:-mt-12 h-64 md:h-80 lg:h-105 rounded-t-2xl overflow-hidden mb-10 shadow-md">
              <Image
                src={mainImage}
                alt={title}
                fill
                className={`object-cover ${mainImage.includes("top-reasons-budget-hotel") ? "object-top" : ""
                  }`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent" />
            </div>

            {/* Intro */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{introTitle || "Why your stay matters"}</h2>
              <div className="mt-6">
                <p
                  className="text-gray-700 leading-relaxed text-lg md:text-xl italic"
                  dangerouslySetInnerHTML={{ __html: introduction }}
                />
              </div>
            </section>

            {/* Dynamic Sections */}
            {sections.map((section, index) => (
              <section key={index} className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">{section.title}</h3>
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
                    <div dangerouslySetInnerHTML={{ __html: section.content as string }} />
                  )}
                </div>
              </section>
            ))}

            {/* FAQ Sections */}
            <section className="mt-16 pt-12 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <FaQuestionCircle className="text-3xl md:text-4xl text-[#1E3A8A]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>/
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left transition ${isOpen ? "bg-[#1E3A8A] text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                          }`}
                      >
                        <span className="font-semibold">{faq.q}</span>
                        <span className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                      </button>
                      {isOpen && (
                        <div
                          className="px-6 py-4 text-gray-700 leading-relaxed bg-white"
                          dangerouslySetInnerHTML={{ __html: faq.a }}
                        />
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
