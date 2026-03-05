import type { Metadata } from "next";
import BlogPost from "./BlogPost";

export const metadata: Metadata = {
  title: "Experience Top-Tier Hospitality at Atithi Hotel VIP Road Guwahati | Budget Stay",
  description:
    "Save more on your trip! Discover the ultimate cheap hotel in Guwahati near VIP Road with Atithi Homes. Enjoy comfortable bedding, private kitchens, free Wi-Fi, and easy access to the city's top attractions.",
  keywords:
    "budget hotel in guwahati near vip road, cheap hotel guwahati vip road, atithi homes guwahati, affordable hotel near vip road barbari, hotel near guwahati airport, long stay hotel guwahati",
  alternates: {
    canonical:
      "https://www.atithihome.com/blog/budget-hotel-in-guwahati-near-vip-road",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}
