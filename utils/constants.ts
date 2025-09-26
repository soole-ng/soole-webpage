export const features = [
  {
    id: 1,
    heading: "Safe Rides",
    description:
      "Your peace of mind matters. That’s why we verify every user’s information and driver’s license before a trip is booked or a ride request is accepted.",
  },
  {
    id: 2,
    heading: "Booking Made Simple",
    description:
      "With just a few taps, you can find a ride going your way or share your own trip with others.",
  },
  {
    id: 3,
    heading: "Travel for Less, together",
    description:
      "Why pay more to move around? Share your ride, split the costs fairly, and make every journey lighter on your pocket.",
  },
];

export const steps = [
  {
    title: "Download the app",
    description:
      "Go to the Google Play Store or Apple App Store and install the Soole app on your smartphone.",
  },
  {
    title: "Sign up and verify your profile",
    description:
      "Sign up with your phone number or email, then complete your profile with basic details for verification.",
  },
  {
    title: "Search for rides",
    description:
      "Enter your departure city, destination, and preferred travel date. Browse available rides from verified drivers.",
  },
  {
    title: "Book your seat",
    description:
      "Select a ride, review the fare and driver details, then confirm your booking. You’ll receive updates and contact info.",
  },
  {
    title: "Meet your driver and enjoy the trip",
    description:
      "Arrive at the pickup point, enjoy your trip, and rate your driver afterward to help build trust in the community.",
  },
];
export const driver_steps = [
  {
    title: "Download the app",
    description: "Install the Soole app from the Google Play Store or Apple App Store on your smartphone."
  },
  {
    title: "Register as a Driver",
    description: "Sign up using your phone number or email, then choose the driver option and complete your profile with vehicle and ID details."
  },
  {
    title: "List Your Ride",
    description: "Enter your departure city, destination, travel date, and available seats. Set your fare and publish your ride for riders to see."
  },
  {
    title: "Review Bookings",
    description: "Check incoming ride requests, review rider profiles, and confirm bookings. You'll receive notifications and contact info."
  },
  {
    title: "Drive and Get Rated",
    description: "Meet your riders at the pickup point, complete the trip, and receive ratings to build your reputation in the Soole community."
  }
];

type NavLink = { label: string; href: string };
type ContactItem = { type: "location" | "phone" | "email"; label: string; href?: string; meta?: string };

export const companyLinks: NavLink[] = [
  { label: "Products", href: "#" },
  { label: "Ride", href: "#" },
  { label: "Drive", href: "#" },
  { label: "About us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const moreLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Downloads", href: "#" },
  { label: "Services", href: "#" },
  { label: "Support", href: "#" },
];

export const socialLinks: NavLink[] = [
  { label: "facebook", href: "#" },
  { label: "instagram", href: "#" },
  { label: "twitter", href: "#" },
  { label: "linkedin", href: "#" },
  { label: "youtube", href: "#" },
];

export const contactDetails: ContactItem[] = [
  { type: "location", label: "No 5, Victory Close, Dawaki, Abuja FCT." },
  { type: "phone", label: "07032220043", meta: "7 Days (8am - 10pm)", href: "tel:07032220043" },
  { type: "email", label: "info@soole.ng", href: "mailto:info@soole.ng" },
];



export const aboutfeatures=  [
  {
    "section": "No terminals, no delays",
    "text": "Share trips with everyday vehicles going your way, simple, affordable, and convenient.",
    "imageUrl": "/images/about-1.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  },
  {
    "section": "Verified Community of Drivers and Passengers",
    "text": "Every user is KYC-verified with ID, facial recognition, and emergency contacts for safer rides.",
    "imageUrl": "/images/about-2.png",
    "backgroundColor": "#C9EC7C",
    "textColor": "#292D32"
  },
  {
    "section": "Smart Matching & Route Mapping",
    "text": "In the ride sharing and parcel delivery user app, customers receive important updates timely through notifications.",
    "imageUrl": "/images/about-3.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  },
  {
    "section": "Flexible Pricing with Transparency",
    "text": "Drivers set fares, passengers negotiate—no hidden fees, just fair travel.",
    "imageUrl": "/images/about-4.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  },
  {
    "section": "Earn While You Travel",
    "text": "Drivers don’t need to be commercial only, they can simply use their way and earn.",
    "imageUrl": "/images/about-5.png",
    "backgroundColor": "#C9EC7C",
    "textColor": "#292D32"
  },
  {
    "section": "SOS & Emergency Support",
    "text": "SOS alerts work online and offline, capturing key trip data and notifying emergency contacts—adding real-time protection for every ride.",
    "imageUrl": "/images/about-6.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  }
]