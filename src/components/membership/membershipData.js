import { Check } from "lucide-react";

const membershipData = [
  {
    id: 1,
    name: "Bronze",
    price: "£8",
    duration: "/hour",
    description:
      "Perfect for casual players looking for premium tables and a relaxed atmosphere.",
    features: [
      "Professional Tables",
      "Free Wi-Fi",
      "Premium Seating",
      "Refreshment Access",
    ],
    popular: false,
    accent: "#8C6239",
    icon: Check,
  },
  {
    id: 2,
    name: "Gold",
    price: "£12",
    duration: "/hour",
    description:
      "The complete Cue Club experience with priority booking and exclusive member benefits.",
    features: [
      "Priority Booking",
      "VIP Lounge",
      "Tournament Access",
      "Member Discounts",
      "Premium Tables",
    ],
    popular: true,
    accent: "#D4AF37",
    icon: Check,
  },
  {
    id: 3,
    name: "Elite",
    price: "£20",
    duration: "/hour",
    description:
      "Designed for professionals and enthusiasts who want the very best experience.",
    features: [
      "Private Tables",
      "VIP Events",
      "Unlimited Priority",
      "Elite Lounge",
      "Exclusive Tournaments",
    ],
    popular: false,
    accent: "#0D7C3E",
    icon: Check,
  },
];

export default membershipData;
