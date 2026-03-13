"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { createClient } from '@supabase/supabase-js';

// === KONFIGURACJA SUPABASE ===
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BookingDayTripForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const searchParams = useSearchParams();
  const tripFromUrl = searchParams.get("trip");

  const [orderID, setOrderID] = useState("");
  const [showModal, setShowModal] = useState(false);

  const tripsData = {
    CliffsOfMoher: {
      name: "Cliffs of Moher",
      transportOptions: {
        "Premium Car (up to 3 people)": "€655",
        "Premium MPV (up to 7 people)": "€795",
      },
    },
    GlendaloughTour: {
      name: "Glendalough & Powerscourt",
      transportOptions: {
        "Group of up to 3 people": "€545",
        "Group of up to 7 people": "€645",
      },
    },
    GiantsCauseway: {
      name: "Giant’s Causeway",
      transportOptions: {
        "Car (up to 3 people)": "€645",
        "Minivan (up to 7 people)": "€795",
      },
    },
    WaterfordKilkenny: {
      name: "Waterford & Kilkenny",
      transportOptions: {
        "Car (up to 3 people)": "€645",
        "Minivan (up to 7 people)": "€795",
      },
    },
    BlarneyCobh: {
      name: "Blarney Castle & Cobh",
      transportOptions: {
        "Premium Car (up to 3 people)": "€645",
        "Premium MPV (up to 7 people)": "€795",
      },
    },
    SouthernCastles: {
      name: "Southern Castles Tour",
      transportOptions: {
        "Premium Car (up to 3 people)": "€645",
        "Premium MPV (up to 7 people)": "€795",
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

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+353");
  const [pickupLocation, setPickupLocation] = useState("");
  const [departureDatetime, setDepartureDatetime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [notes, setNotes] = useState(""); // <--- NOWE POLE NOTATKI

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

    const fullPhone = countryCode + phone;
    const tripName = tripsData[selectedTrip].name;

    // 1. Zapis do Supabase (żeby dostać ID)
    const { data: bookingData, error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          name: name,
          email: email,
          trip_details: {
             type: "Day Trip",
             phone: fullPhone,
             pickup: pickupLocation,
             tripName: tripName,
             vehicle: selectedTransport,
             date: departureDatetime.replace("T", " at "),
             passengers: passengers,
             price: price,
             notes: notes || "—" // <--- Zapisujemy notatki
          }
        }
      ])
      .select();

    if (dbError) {
        console.error("Database Error:", dbError);
        setStatus("error");
        return;
    }

    const newOrderID = bookingData[0].id; 
    setOrderID(newOrderID);

    // 2. Wysyłka EmailJS
    const templateParams = {
        order_id: newOrderID,
        name: name,
        email: email,
        phone: fullPhone,
        tripName: tripName,
        pickupLocation: pickupLocation,
        vehicle: selectedTransport,
        date: departureDatetime.replace("T", " "),
        passengers: passengers,
        price: price,
        notes: notes || "—" // <--- Wysyłamy notatki do maila
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOKING, 
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setShowModal(true);
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
    }
  };

  // Modal Style
  const modalOverlayStyle = {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)", zIndex: 9999,
    display: "flex", alignItems: "center", justifyContent: "center",
  };
  const modalContentStyle = {
    background: "#fff", padding: "30px", borderRadius: "8px",
    width: "90%", maxWidth: "500px", textAlign: "center",
  };

  return (
    <section className="section mt-120 mb-120">
      <div className="container-sub">
        <div className="mw-770">
          <div className="text-center mb-50">
            <h2 className="text-32 font-bold text-black">Request a Day Trip</h2>
            <p className="text-18 text-black">
              Check availability and reserve your private tour.
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Name:</label>
                <input className="form-control" type="text" placeholder="Your Name" required 
                       value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Email:</label>
                <input className="form-control" type="email" placeholder="Your Email" required 
                       value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Phone Number:</label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <select className="form-control" style={{width:'80px', padding:'0 5px'}} 
                            value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                        <option value="+353">🇮🇪 +353</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+48">🇵🇱 +48</option>
                    </select>
                    <input className="form-control" type="tel" placeholder="123 456 789" required 
                           value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Pick up location:</label>
                <input className="form-control" type="text" placeholder="Hotel or Address in Dublin" required 
                       value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Select Trip:</label>
                <select className="form-control" value={selectedTrip} onChange={handleTripChange}>
                  {Object.keys(tripsData).map((tripKey) => (
                    <option key={tripKey} value={tripKey}>{tripsData[tripKey].name}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Select Transport:</label>
                <select className="form-control" value={selectedTransport} onChange={handleTransportChange}>
                  {Object.keys(tripsData[selectedTrip].transportOptions).map((transport) => (
                    <option key={transport} value={transport}>{transport}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Preferred Date & Time:</label>
                <input 
                  className="form-control" 
                  type="datetime-local" 
                  required 
                  value={departureDatetime}
                  onChange={(e) => setDepartureDatetime(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Number of Passengers:</label>
                <select className="form-control" required value={passengers} onChange={(e) => setPassengers(e.target.value)}>
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
              <div className="col-lg-6 col-md-6">
                <label className="form-label">Estimated Price:</label>
                <input className="form-control" type="text" value={price} readOnly 
                       style={{fontWeight:'bold', color:'#006400'}}/>
              </div>

              {/* === NOWE POLE: NOTES === */}
              <div className="col-lg-12">
                <label className="form-label">Notes / Special Requests (Optional):</label>
                <textarea 
                  className="form-control" 
                  rows="3" 
                  placeholder="E.g. extra luggage, child seat needed..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-12 mt-4">
                  <div style={{
                      backgroundColor: "#e3f2fd", 
                      borderLeft: "5px solid #2196f3", 
                      padding: "15px",
                      borderRadius: "4px",
                      fontSize: "15px",
                      color: "#0d47a1"
                  }}>
                      <i className="fa-solid fa-circle-info mr-2"></i>
                      <strong>Important:</strong> No payment is required at this stage. 
                      Once we confirm vehicle availability, we will send you a secure payment link to finalize your booking.
                  </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group consent-group mt-3">
                  <input type="checkbox" id="consent" required className="consent-checkbox" />
                  <label htmlFor="consent" className="consent-label">
                    I agree to the <a href="/privacy-policy" target="_blank" className="privacy-link">Privacy Policy</a>.
                  </label>
                </div>
              </div>
              
              <div className="col-lg-12 text-center mt-20">
                <button 
                    className="btn btn-primary" 
                    type="submit" 
                    disabled={status === "loading"}
                    style={{minWidth: '220px'}}
                >
                  {status === "loading" ? "Sending Request..." : "Request Availability"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* MODAL SUKCESU */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={{color: '#4CAF50', fontSize: '48px', marginBottom: '10px'}}>
                <i className="fa-regular fa-circle-check"></i>
            </div>
            <h2 style={{ fontSize: "24px", marginBottom: "10px", color:"#333" }}>Request Received!</h2>
            <p style={{ fontSize: "16px", marginBottom: "8px", color:"#555" }}>
              Your request reference is <strong>#{orderID}</strong>.
            </p>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
              We have received your details. We will check availability and send you a <strong>payment link</strong> via email shortly.
            </p>
            <button
                className="btn btn-primary"
                onClick={() => window.location.reload()}
            >
              OK, Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}