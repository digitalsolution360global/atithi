import Image from "next/image";
import Link from "next/link";

const warrantyPromises = [
  {
    title: "Room Readiness Warranty",
    description:
      "Every booked room is cleaned, sanitized, and ready before your confirmed check-in time.",
  },
  {
    title: "Booking Security Warranty",
    description:
      "Confirmed direct bookings are protected against overbooking. If unavailable due to an internal error, we arrange an equivalent nearby stay.",
  },
  {
    title: "Service Response Warranty",
    description:
      "Urgent in-stay requests are acknowledged promptly by our support team at the property desk or phone line.",
  },
  {
    title: "Essential Amenities Warranty",
    description:
      "Your stay includes access to core amenities listed at booking, including Wi-Fi, clean linen, and basic room utilities.",
  },
];

const coveredItems = [
  "Confirmed reservation details (date, room category, guest count)",
  "Basic room hygiene and clean bedding at check-in",
  "Availability of listed core amenities in the booked room category",
  "Prompt support for operational room issues reported during your stay",
  "Rate transparency for direct bookings made on official channels",
];

const excludedItems = [
  "Third-party platform pricing differences and external service fees",
  "Delays caused by force majeure events (weather, natural events, outages)",
  "Issues not reported during the stay window",
  "Guest-caused damages or misuse of room/property facilities",
  "Promotional perks not included in the selected booking plan",
];

const claimSteps = [
  {
    title: "Report within 24 hours",
    description:
      "Inform the front desk or contact us via phone/WhatsApp/email with your booking reference.",
  },
  {
    title: "Share supporting details",
    description:
      "Provide photos, timestamps, screenshots, or relevant proof so we can validate the concern quickly.",
  },
  {
    title: "Resolution and follow-up",
    description:
      "After verification, we provide an appropriate remedy such as room correction, service recovery, or booking adjustment.",
  },
];

export default function WarrantySection() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="Warranty policy banner"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Warranty Policy
          </h1>
          <p className="text-white mt-3 text-lg md:text-xl max-w-3xl">
            Clear protection for your booking, room quality, and essential stay
            experience at Atithi Homestay.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Our Guest Stay Warranty
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to making every stay reliable and comfortable.
              This warranty outlines what we guarantee, what is outside scope,
              and how to request support if expectations are not met.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {warrantyPromises.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1E3A8A]">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-green-100 bg-green-50 p-7">
            <h3 className="text-2xl font-bold text-green-800">What is Covered</h3>
            <ul className="mt-5 space-y-3">
              {coveredItems.map((item) => (
                <li key={item} className="text-gray-700 flex gap-3">
                  <span className="text-green-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-7">
            <h3 className="text-2xl font-bold text-amber-800">What is Not Covered</h3>
            <ul className="mt-5 space-y-3">
              {excludedItems.map((item) => (
                <li key={item} className="text-gray-700 flex gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            How to Raise a Warranty Request
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            For faster resolution, please share complete details with your
            reservation ID and concern summary as soon as possible.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {claimSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              >
                <span className="inline-flex w-10 h-10 rounded-full items-center justify-center bg-[#1E3A8A] text-white font-bold">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-black">{step.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Need immediate help with your booking?
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl leading-relaxed">
              Contact our support team and we will guide you through the
              warranty process quickly.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
