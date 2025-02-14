"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

export default function BookingDayTripForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const searchParams = useSearchParams();
  const tripFromUrl = searchParams.get("trip");

  // Generowanie losowego numeru zamówienia
  const generateOrderID = () => {
    return "VIP-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Obsługa opcji powrotu
  const [showReturnTrip, setShowReturnTrip] = useState(false);

  // Dane o wycieczkach i cenach
  const tripsData = {
    CliffsOfMoher: {
      name: "Cliffs of Moher",
      transportOptions: {
        "Premium Car (up to 3 people)": "€695",
        "Premium MPV (up to 7 people)": "€895",
      },
    },
    GlendaloughTour: {
      name: "Glendalough & Powerscourt",
      transportOptions: {
        "Group of up to 3 people": "€595",
        "Group of up to 7 people": "€745",
      },
    },
    GiantsCauseway: {
      name: "Giant’s Causeway",
      transportOptions: {
        "Car (up to 3 people)": "€695",
        "Minivan (up to 7 people)": "€895",
      },
    },
    WaterfordKilkenny: {
      name: "Waterford & Kilkenny",
      transportOptions: {
        "Car (up to 3 people)": "€695",
        "Minivan (up to 7 people)": "€895",
      },
    },
    BlarneyCobh: {
      name: "Blarney Castle & Cobh",
      transportOptions: {
        "Premium Car (up to 3 people)": "€695",
        "Premium MPV (up to 7 people)": "€895",
      },
    },
    SouthernCastles: {
      name: "Southern Castles Tour",
      transportOptions: {
        "Premium Car (up to 3 people)": "€695",
        "Premium MPV (up to 7 people)": "€895",
      },
    },
    AncientWonders: {
      name: "Ancient Wonders Tour",
      transportOptions: {
        "Premium Car (up to 3 people)": "€645",
        "Premium MPV (up to 7 people)": "€845",
      },
    },
  };

  const defaultTripKey = tripFromUrl && tripsData[tripFromUrl] ? tripFromUrl : Object.keys(tripsData)[0];
  const [selectedTrip, setSelectedTrip] = useState(defaultTripKey);
  const [selectedTransport, setSelectedTransport] = useState(Object.keys(tripsData[defaultTripKey].transportOptions)[0]);
  const [price, setPrice] = useState(tripsData[defaultTripKey].transportOptions[selectedTransport]);

  const handleTripChange = (e) => {
    const newTrip = e.target.value;
    setSelectedTrip(newTrip);
    const firstTransportOption = Object.keys(tripsData[newTrip].transportOptions)[0];
    setSelectedTransport(firstTransportOption);
    setPrice(tripsData[newTrip].transportOptions[firstTransportOption]);
  };

  const handleTransportChange = (e) => {
    setSelectedTransport(e.target.value);
    setPrice(tripsData[selectedTrip].transportOptions[e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Generowanie numeru zamówienia
    const orderID = generateOrderID();

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOKING, 
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS response:", response);
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section mt-120 mb-120">
      <div className="container-sub">
        <div className="mw-770">
          <div className="text-center mb-50">
            <h2 className="text-32 font-bold text-black">Book Your Day Trip</h2>
            <p className="text-18 text-black">
              Please fill out the form below to book your private day trip.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              {/* Hidden Order ID */}
              <input type="hidden" name="order_id" value={generateOrderID()} />

              {/* Full Name & Email */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Name:</label>
                <input className="form-control" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Email:</label>
                <input className="form-control" name="email" type="email" placeholder="Your Email" required />
              </div>

              {/* Phone Number */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Phone Number:</label>
                <input className="form-control" name="phone" type="tel" placeholder="Enter phone number" required />
              </div>

              {/* Pick up location */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Pick up location:</label>
                <input className="form-control" name="pickup_location" type="text" placeholder="Enter pick-up location" required />
              </div>

              {/* Trip Selection */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Select Trip:</label>
                <select className="form-control" name="trip" value={selectedTrip} onChange={handleTripChange}>
                  {Object.keys(tripsData).map((tripKey) => (
                    <option key={tripKey} value={tripKey}>{tripsData[tripKey].name}</option>
                  ))}
                </select>
              </div>

              {/* Transport Selection */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Select Transport:</label>
                <select className="form-control" name="transport" value={selectedTransport} onChange={handleTransportChange}>
                  {Object.keys(tripsData[selectedTrip].transportOptions).map((transport) => (
                    <option key={transport} value={transport}>{transport}</option>
                  ))}
                </select>
              </div>
              {/* Departure Date & Time */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Preferred Departure Date & Time:</label>
                <input 
                  className="form-control" 
                  name="departure_datetime" 
                  type="datetime-local" 
                  required 
                />
              </div>


              {/* Number of Passengers */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Number of Passengers:</label>
                <select className="form-control" name="passengers" required>
                  <option value="" disabled>Select...</option>
                  {selectedTransport.includes("3 people") ? (
                    <>
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                    </>
                  ) : (
                    <>
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5 Passengers</option>
                      <option value="6">6 Passengers</option>
                      <option value="7">7 Passengers</option>
                    </>
                  )}
                </select>
              </div>




              {/* Price Display */}
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Total Price:</label>
                <input className="form-control" name="price" type="text" value={price} readOnly />
              </div>

{/* Privacy Policy Consent */}
<div className="col-lg-12">
  <div className="form-group consent-group">
    <input type="checkbox" id="consent" name="consent" required className="consent-checkbox" />
    <label htmlFor="consent" className="consent-label">
      I agree to the processing of my personal data for the purpose of booking and contact in accordance with the  
      <br />
      <a href="/privacy-policy" target="_blank" className="privacy-link">
        Privacy Policy
      </a>.
    </label>
  </div>
</div>

              {/* Submit Button */}
              <div className="col-lg-12 text-center mt-20">
                <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}