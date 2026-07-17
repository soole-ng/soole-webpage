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
    description: "Enter your departure city, destination, travel date, and available seats. Set your fare and publish your ride for passengers to see."
  },
  {
    title: "Review Bookings",
    description: "Check incoming ride requests, review passenger profiles, and confirm bookings. You'll receive notifications and contact info."
  },
  {
    title: "Drive and Get Rated",
    description: "Meet your passengers at the pickup point, complete the trip, and receive ratings to build your reputation in the Soole community."
  }
];

type NavLink = { label: string; href: string };
type ContactItem = { type: "location" | "phone" | "email"; label: string; href?: string; meta?: string };

export const companyLinks: NavLink[] = [
  { label: "Products", href: "/drivers" },
  { label: "Drive", href: "/drivers" },
  { label: "Organizations", href: "/organizations" },
  { label: "About us", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact-us" },
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
  },
  {
    "section": "Free Business Dashboard",
    "text": "Manage your fleet, dispatch trips, and track earnings, all from one free dashboard, no developers needed.",
    "imageUrl": "/images/dashboard-mockup.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  },
  {
    "section": "Live Trip Tracking",
    "text": "Follow every ride in real time on the map, from pickup to drop-off, for total peace of mind.",
    "imageUrl": "/images/steps.png",
    "backgroundColor": "#C9EC7C",
    "textColor": "#292D32"
  },
  {
    "section": "Nationwide Coverage",
    "text": "Soole connects major cities and routes across Nigeria, growing every day as more drivers join.",
    "imageUrl": "/images/soole-organization.png",
    "backgroundColor": "#0C1316",
    "textColor": "#C1C1C1"
  }
];

export const faqs = [
  {
    "question": "What is Soole and how does it work?",
    "answer": "Soole is a peer-to-peer intercity ride-sharing platform that connects everyday travelers with verified drivers heading in the same direction. Users can book seats, share rides, and travel safely across Nigeria."
  },
  {
    "question": "Who can become a Soole driver?",
    "answer": "Anyone traveling between cities in Nigeria can offer seats on Soole. You don't need to be a Commercial driver, just verified, responsible, and heading out of town."
  },
  {
    "question": "Is my personal data safe with Soole?",
    "answer": "Yes. We use encryption, secure storage, and strict access controls to protect your data. We do not sell your information and only share it with trusted partners or authorities when required."
  },
  {
    "question": "What kind of data does Soole collect?",
    "answer": "We collect account details, trip history, location data, payment information, and verification documents to ensure safety, improve service, and comply with regulations."
  },
  {
    "question": "Is Soole a bus service or a taxi app?",
    "answer": "No, Soole is neither a bus service nor a taxi app. We're a smarter way to travel a platform that connects people going the same way. By sharing rides with everyday drivers already on the move, you can save time, reduce costs, and avoid the stress of terminals or long waits."
  },
  {
    "question": "Can I use Soole without internet access?",
    "answer": "Yes, to an extent. If you lose network connection mid-trip, your location is logged offline and automatically synced once you're back online, so your trip history and tracking stay accurate. However, you'll need an internet connection to book a ride, make payments, or contact support."
  },
  {
    "question": "How does the SOS feature work?",
    "answer": "If you ever feel unsafe during a trip, you can trigger an SOS alert directly from the app. This instantly shares your live location, trip details, and an optional audio recording with your emergency contacts and our safety team, who can review the flagged trip and step in if needed."
  },
  {
    "question": "How are fares determined?",
    "answer": "Fares are set based on the distance and route of the trip, with drivers able to set competitive prices for the seats they offer. This keeps costs fair and significantly cheaper than traditional taxis or bus fares."
  },
  {
    "question": "What happens if I want to delete my account?",
    "answer": "You can request account deletion at any time from within the app or by contacting our support team. We'll remove your personal data in line with our Privacy Policy, except where we're legally required to retain certain records, such as tax or safety documentation."
  },
  {
    "question": "Does Soole work with transport unions?",
    "answer": "Yes. We collaborate with transport unions and government agencies to stay compliant with local regulations, and we may share relevant trip and vehicle data with them for planning, tax, and regulatory purposes."
  },
  {
    "question": "How do I contact Soole support?",
    "answer": "You can reach our support team by phone or WhatsApp at 07032220043 (7 days a week, 8am - 10pm), by email at info@soole.ng, or through the in-app support chat."
  }
];

export const org_steps = [
  {
    title: "Register your Organization",
    description: "Sign up your transport company on our web dashboard and provide business details for approval."
  },
  {
    title: "Add Vehicles and Drivers",
    description: "Register vehicle documents and add verified drivers to build your company fleet."
  },
  {
    title: "Create and Dispatch Trips",
    description: "Schedule route schedules, set passenger fares, and dispatch drivers for booking."
  },
  {
    title: "Track Live & Earn",
    description: "Monitor trips in real-time on the map and receive passenger booking payouts directly to your secure wallet."
  }
];

export const orgFeatures = [
  {
    id: 1,
    heading: "Fleet Control",
    description: "Register vehicles, approve drivers, and monitor dashboard analytics in real-time."
  },
  {
    id: 2,
    heading: "Live Trip Tracking",
    description: "Monitor driver routes, track vehicle speeds, and view trip progress on an interactive live map."
  },
  {
    id: 3,
    heading: "Secure Wallets & Payouts",
    description: "Review booking revenue, process commissions, and perform instant bank payouts."
  },
  {
    id: 4,
    heading: "Free Business Visibility",
    description: "Give your business instant visibility. No need to develop, monitor, and manage your own app, simply register your organization with us free of charge."
  }
];