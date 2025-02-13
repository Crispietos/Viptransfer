"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import BreadCumb from "@/components/bookingdaytrip/BreadCumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";

// Dynamiczny import dla komponentu BookingDayTrip
const BookingDayTrip = dynamic(() => import("@/components/bookingdaytrip/BookingDayTrip"), {
  ssr: false, // Wyłącza SSR, aby komponent działał tylko po stronie klienta
});

export default function Page() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <BreadCumb />
        
        {/* Opakowanie komponentu w Suspense */}
        <Suspense fallback={<p>Loading form...</p>}>
          <BookingDayTrip />
        </Suspense>

      </main>
      <Footer1 />
    </>
  );
}