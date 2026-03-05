import type { Metadata } from "next";
import BlogPost from "./BlogPost";

export const metadata: Metadata = {
  title: "Experience top-tier hospitality at Atithi Hotel VIP Road",
  description:
    "Save more on your trip! Find the ultimate cheap hotel in Guwahati near VIP Road with Atithi Homes. Comfortable bedding and private kitchens are available for long stays.",
  keywords:
    "budget hotel in guwahati near vip road, cheap hotel guwahati vip road, atithi homes guwahati, affordable hotel near vip road barbari, hotel near guwahati airport, long stay hotel guwahati",
  alternates: {
    canonical:
      "https://www.atithihome.com/blog/top-reasons-budget-hotel-guwahati-near-vip-road",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}
