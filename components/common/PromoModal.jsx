"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy klient już zamknął to okienko podczas tej wizyty
    const hasSeenPromo = sessionStorage.getItem("seenPromo");

    if (!hasSeenPromo) {
      // Opóźnienie 4 sekundy
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("seenPromo", "true");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Ciemne tło (Overlay) - zostawiamy ciemne, żeby jasny modal się wyróżniał */}
      <div 
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(4px)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          animation: "fadeIn 0.5s ease-in-out"
        }}
        onClick={handleClose}
      >
        {/* Główny kontener Modala - TERAZ JASNY */}
        <div 
          style={{
            backgroundColor: "#ffffff", // Elegancka biel
            color: "#111", // Ciemny tekst
            borderRadius: "16px",
            padding: "40px 30px",
            maxWidth: "500px",
            width: "100%",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            animation: "slideUp 0.5s ease-out"
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Przycisk Zamknij (X) */}
          <button 
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "#999", // Szary krzyżyk
              fontSize: "24px",
              cursor: "pointer",
              transition: "color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.color = "#111"}
            onMouseOut={(e) => e.target.style.color = "#999"}
          >
            &times;
          </button>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px", color: "#B58E30", marginBottom: "10px", fontWeight: "600" }}>
              Popular Routes
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: "600", color: "#111", margin: 0, lineHeight: "1.2" }}>
              Travel in Ultimate Comfort
            </h3>
            <p style={{ color: "#666", fontSize: "15px", marginTop: "10px" }}>
              Private chauffeur transfers from Dublin to Ireland's top destinations.
            </p>
          </div>

          {/* Lista Destynacji */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "35px" }}>
            
            {/* Galway */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "15px", borderBottom: "1px solid #eaeaea" }}>
              <span style={{ fontSize: "18px", fontWeight: "500", color: "#111" }}>Dublin to Galway</span>
              <span style={{ fontSize: "18px", color: "#B58E30", fontWeight: "600" }}>from €450</span>
            </div>

            {/* Cork */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "15px", borderBottom: "1px solid #eaeaea" }}>
              <span style={{ fontSize: "18px", fontWeight: "500", color: "#111" }}>Dublin to Cork</span>
              <span style={{ fontSize: "18px", color: "#B58E30", fontWeight: "600" }}>from €550</span>
            </div>

            {/* Killarney */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "15px", borderBottom: "1px solid #eaeaea" }}>
              <span style={{ fontSize: "18px", fontWeight: "500", color: "#111" }}>Dublin to Killarney</span>
              <span style={{ fontSize: "18px", color: "#B58E30", fontWeight: "600" }}>from €650</span>
            </div>

          </div>

          {/* Call to Action - Czarny guzik, bardzo elegancki na białym tle */}
          <div style={{ textAlign: "center" }}>
            <Link 
              href="/#booking" 
              onClick={handleClose}
              style={{
                display: "block",
                backgroundColor: "#111", // Czarny przycisk
                color: "#fff", // Biały tekst
                padding: "16px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "transform 0.2s"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            >
              Get an Instant Quote
            </Link>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}