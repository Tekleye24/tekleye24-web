// Address, phone, and clergy are still placeholders — replace with the parish's real details.

export const siteConfig = {
  name: "Tekleye 24",
  fullName: "Mesrake Tsehay Kidus Teklehaymanot Ethiopian Orthodox Tewahedo Church",
  archdiocese: "Washington DC and Its Surroundings Archdiocese",
  tagline: "A house of prayer for the Tewahedo faithful",
  description:
    "Mesrake Tsehay Kidus Teklehaymanot Ethiopian Orthodox Tewahedo Church, under the Washington DC and Its Surroundings Archdiocese, is a parish rooted in the ancient Tewahedo faith, welcoming all to worship, fellowship, and grow in Christ.",
  address: {
    line1: "123 Faith Avenue",
    line2: "Your City, ST 00000",
  },
  phone: "(000) 000-0000",
  email: "info@tekleye24.org",
  social: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export type ServiceTime = {
  name: string;
  amharicName?: string;
  day: string;
  time: string;
  note?: string;
};

export const serviceTimes: ServiceTime[] = [
  {
    name: "Divine Liturgy (Qeddase)",
    day: "Sunday",
    time: "4:00 AM – 10:00 AM",
    note: "Matins (Wazema) begins at 4:00 AM, followed by the Divine Liturgy.",
  },
  {
    name: "Sunday School",
    day: "Sunday",
    time: "10:00 AM – 11:30 AM",
  },
  {
    name: "Evening Prayer",
    day: "Wednesday",
    time: "6:30 PM – 8:00 PM",
  },
  {
    name: "Feast Day Services",
    day: "Varies",
    time: "See events calendar",
    note: "Held according to the Ethiopian Orthodox calendar.",
  },
];

export type ChurchEvent = {
  title: string;
  date: string;
  /** Fixed Gregorian month/day for feasts that land on the calendar grid. Omit for movable feasts. */
  month?: number;
  day?: number;
  description: string;
};

export const upcomingEvents: ChurchEvent[] = [
  {
    title: "Meskel (Finding of the True Cross)",
    date: "September 27",
    month: 9,
    day: 27,
    description: "Celebration with the traditional bonfire (Demera) and procession.",
  },
  {
    title: "Genna (Ethiopian Christmas)",
    date: "January 7",
    month: 1,
    day: 7,
    description: "Divine Liturgy followed by a community fellowship meal.",
  },
  {
    title: "Timkat (Epiphany)",
    date: "January 19",
    month: 1,
    day: 19,
    description: "Commemoration of the baptism of Christ, with a procession of the Tabot.",
  },
  {
    title: "Fasika (Ethiopian Easter)",
    date: "Date varies",
    description: "The Feast of the Resurrection, celebrated with an evening vigil service.",
  },
];

export type ClergyMember = {
  name: string;
  role: string;
  bio: string;
};

export const clergy: ClergyMember[] = [
  {
    name: "Abba [Name]",
    role: "Parish Priest",
    bio: "Serving the parish since [year], leading the Divine Liturgy and pastoral care for the community.",
  },
  {
    name: "Merigeta [Name]",
    role: "Deacon",
    bio: "Assists in the liturgical services and leads the Sunday school program.",
  },
];

export const givingOptions = [
  {
    title: "In Person",
    description: "Offerings and tithes may be given during any service at the church office.",
  },
  {
    title: "Bank Transfer",
    description: "Contact the church office for account details to give by direct deposit.",
  },
  {
    title: "Mobile / Online",
    description: "Ask about mobile giving options available through the parish office.",
  },
];
