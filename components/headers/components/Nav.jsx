"use client";


import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "@heroicons/react/24/outline";


const menuItems = [

{

id: 1,

title: "Home",

link: "/",

},

{

id: 2,

title: "Day Trip",

link: "/day-trip",

subMenu: [

{ id: 21, title: "Cliffs of Moher & Galway", link: "/trips/cliffs-of-moher" },

{ id: 22, title: "Glendalough & Powerscourt", link: "/trips/glendalough-and-powerscourt" },

{ id: 24, title: "Waterford & Kilkenny", link: "/trips/waterford-kilkenny" },

{ id: 25, title: "Blarney Castle & Cobh", link: "/trips/Blarney-Castle" },

{ id: 27, title: "Ancient and Medieval Wonders", link: "/trips/AncientandMedievalWonders" },

{ id: 28, title: "Book a Day Trip", link: "/bookingdaytrip" },

],

},

{

id: 3,

title: "Services",

link: "/services",

},

{

id: 4,

title: "Booking",

link: "/booking-extra",

},

{

id: 5,

title: "Pay",

link: "/pay",

},

{

id: 6,

title: "Contact",

link: "/contact",

},

{

id: 7,

title: "Blog",

link: "/blog",

},

];


export default function Nav() {

const [expanded, setExpanded] = useState(null);

const pathname = usePathname();


const toggleSubMenu = (menuId) => {

setExpanded((prev) => (prev === menuId ? null : menuId));

};


return (

<>

{menuItems.map((item) => {

const hasSubMenu = !!item.subMenu;

const isOpen = expanded === item.id;

const isActive = pathname === item.link;


return (

<li

key={item.id}

className="menu-item group"

style={{

position: "relative",

whiteSpace: "nowrap",

}}

>

<div style={{ display: "flex", alignItems: "center" }}>

{/* Link główny */}

<Link

href={item.link}

style={{

padding: "8px 12px",

textDecoration: "none",

fontWeight: "500",

color: isActive ? "#007bff" : "#000",

transition: "color 0.2s ease",

}}

onMouseEnter={(e) => {

e.currentTarget.style.color = "#007bff";

}}

onMouseLeave={(e) => {

if (!isActive) {

e.currentTarget.style.color = "#000";

}

}}

>

{item.title}

</Link>


{/* Ikonka strzałki, jeśli jest subMenu */}

{hasSubMenu && (

<ChevronDownIcon

style={{ width: "12px", height: "12px", marginLeft: "4px" }}

onClick={(e) => {

// Zatrzymujemy klik w strzałkę, by w mobilu nie przechodzić do item.link

e.preventDefault();

e.stopPropagation();

toggleSubMenu(item.id);

}}

className="text-gray-600 cursor-pointer"

/>

)}

</div>


{/* SubMenu */}

{hasSubMenu && (

<ul

className="sub-menu group-hover:block"

style={{

display: isOpen ? "block" : "none",

position: "absolute",

// Dodajemy odstęp +4px

top: "calc(100% + 4px)",

left: 0,

background: "#fff",

listStyle: "none",

margin: 0,

padding: "10px 0",

boxShadow: "0 2px 5px rgba(0,0,0,0.1)",

minWidth: "160px",

zIndex: 9999, // sub-menu nad resztą

}}

>

{item.subMenu.map((sub) => {

const subActive = pathname === sub.link;

return (

<li key={sub.id}>

<Link

href={sub.link}

style={{

display: "block",

padding: "6px 12px",

textDecoration: "none",

whiteSpace: "nowrap",

color: subActive ? "#007bff" : "#000",

transition: "color 0.2s ease",

}}

onMouseEnter={(e) => {

e.currentTarget.style.color = "#007bff";

}}

onMouseLeave={(e) => {

if (!subActive) {

e.currentTarget.style.color = "#000";

}

}}

>

{sub.title}

</Link>

</li>

);

})}

</ul>

)}

</li>

);

})}

</>

);

} 