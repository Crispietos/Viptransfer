export const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/aboutus", 
  },
  {
    id: 3,
    title: "Prices",
    link: "/prices",
  },
  {
    id: 4,
    title: "Day Trip",
    link: "#",
    subMenu: [
      { id: 41, title: "Cliffs of Moher", link: "/trips/cliffs-of-moher" },
      { id: 42, title: "Glendalough & Powerscourt", link: "/trips/glendalough-and-powerscourt" },
      { id: 43, title: "Giant’s Causeway", link: "/trips/giants-causeway" },
      { id: 44, title: "Waterford & Kilkenny", link: "/trips/waterford-kilkenny" },
      { id: 45, title: "Blarney Castle", link: "/trips/Blarney-Castle" },
      { id: 46, title: "Castle South and Southwest", link: "/trips/CastleSouthandSouthwest" },
      { id: 47, title: "Ancient & Medieval Wonders", link: "/trips/AncientandMedievalWonders" },
      { id: 48, title: "📅 Book a Day Trip", link: "/bookingdaytrip" }, // Nowy link do bookingu
    ],
  },
  {
    id: 5,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    title: "Services",
    link: "/services",
  },
  {
    id: 7,
    title: "Booking",
    link: "/booking-extra",
  },
];