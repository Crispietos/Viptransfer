"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PayWithPaypal() {
  const router = useRouter();
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [totalFare, setTotalFare] = useState(null);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [reservationNr, setReservationNr] = useState("");

  // Opcjonalna funkcja – np. wysyłka maila/akcje po płatności
  const sendBookingEmail = (orderNumber) => {
    console.log("Booking email would be sent with order number:", orderNumber);
    router.push("/thx");
  };

  // Funkcja renderująca przyciski PayPal
  const renderPayPalButtons = () => {
    if (!window.paypal) return;
    const container = document.getElementById("paypal-button-container");
    if (container) container.innerHTML = "";
    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          label: "checkout",
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                invoice_id: reservationNr,
                amount: { value: String(totalFare || 1) },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Payment completed. Thank you, ${details.payer.name.given_name}!`);
            const randomOrderNumber = "VIP" + Math.floor(100000 + Math.random() * 900000);
            sendBookingEmail(randomOrderNumber);
          });
        },
      })
      .render("#paypal-button-container");
  };

  // Renderujemy przyciski, gdy SDK jest załadowane i kwota została ustawiona
  useEffect(() => {
    if (sdkLoaded && totalFare !== null) {
      renderPayPalButtons();
    }
  }, [sdkLoaded, totalFare]);

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#003366",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Complete Your Payment
      </h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        On this page you can pay via PayPal for your confirmed booking order
        <br />
        (please check your email for details).
      </p>

      {totalFare === null && (
       <div style={{ textAlign: "center", margin: "20px auto", maxWidth: "400px" }}>
       <p style={{ marginBottom: "8px" }}>Reservation Number:</p>
       <input
         type="text"
         placeholder="Enter reservation number"
         value={reservationNr}
         onChange={(e) => setReservationNr(e.target.value)}
         className="w-48 p-4 mb-4 bg-blue-50 border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
       />
       <p style={{ marginBottom: "16px" }}>
         Please enter the agreed amount (as per email):
       </p>
       <input
         type="number"
         placeholder="Enter amount in EUR"
         value={enteredAmount}
         onChange={(e) => setEnteredAmount(e.target.value)}
         className="w-48 p-4 mr-4 bg-blue-50 border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
       />
       <button
         onClick={() => {
           const amount = parseFloat(enteredAmount);
           if (!isNaN(amount) && amount > 0) {
             setTotalFare(amount);
           } else {
             alert("Please enter a valid amount");
           }
         }}
         style={{
           backgroundColor: "#2E7663",
           color: "#fff",
           padding: "8px 16px",
           border: "none",
           borderRadius: "4px",
           cursor: "pointer",
           marginTop: "8px",
         }}
       >
         Select &rarr;
       </button>
     </div>
      )}

      {/* Ładujemy PayPal SDK i dopiero po załadowaniu ustawiamy sdkLoaded */}
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR&locale=en_US`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log("PayPal SDK loaded.");
          setSdkLoaded(true);
        }}
      />

      <div
        id="paypal-button-container"
        style={{ maxWidth: "400px", margin: "auto" }}
      ></div>
    </div>
  );
}