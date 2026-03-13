"use client";
import React, { useState } from "react";
import Nav from "./components/Nav"; // Twój komponent z linkami
import Image from "next/image";
import Link from "next/link";



export default function Header1() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "#fff", // białe tło
        color: "#000",      // czarny tekst linków
        width: "100%",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 9999,
        borderBottom: "3px solid #009FE3", // Thin blue line at the bottom
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo po lewej */}
        <div style={{ flexShrink: 0 }}>
          <Link href="/">
            <Image
              src="/assets/imgs/template/logo.webp" // Dopasuj ścieżkę do swojego logo
              alt="Viptransfer"
              width={120}  // Ustal rozmiar
              height={40}
              style={{ objectFit: "contain", display: "block" }}
              priority
            />
          </Link>
        </div>

        {/* Menu desktopowe */}
        <div
          className="desktop-menu"
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Wrap Nav in li for styling */}
              <Nav
                itemWrapper={liProps => (
                  <li
                    {...liProps}
                    style={{
                      cursor: "pointer",
                      borderBottom: liProps.active
                        ? "2px solid #009FE3"
                        : "2px solid transparent",
                      color: liProps.active ? "#009FE3" : "#000",
                      transition: "background 0.2s, color 0.2s, border-bottom 0.2s",
                      background: liProps.hovered
                        ? "rgba(0,159,227,0.08)"
                        : "transparent",
                      ...liProps.style,
                    }}
                    onMouseEnter={liProps.onMouseEnter}
                    onMouseLeave={liProps.onMouseLeave}
                  >
                    {liProps.children}
                  </li>
                )}
              />
            </ul>
          </nav>
          {/* Get Quote & Book button */}
          <Link
            href="/contact"
            style={{
              backgroundColor: "#009FE3",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
              marginLeft: "20px",
              display: "inline-block",
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "#008FCC";
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "#009FE3";
            }}
          >
            Get Quote &amp; Book
          </Link>
        </div>

        {/* Hamburger (tylko mobilny) */}
        <button
          className="hamburger"
          style={{
            fontSize: "48px",
            background: "none",
            border: "none",
            display: "none", // ukryty na desktopie, pokażemy w media queries
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(true)}
        >
          {/* Prosta ikonka hamburgera (HTML &#9776;), 
              możesz zastąpić ikoną z FontAwesome czy Heroicons */}
          &#9776;
        </button>
      </div>

      {/* Modal mobilny */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              width: "80%",
              maxWidth: "300px",
              margin: "80px auto",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {/* Przycisk zamknięcia */}
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times; {/* Ikona X */}
            </button>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                listStyle: "none",
                marginTop: "40px",
                padding: 0,
              }}
            >
              {/* Ten sam komponent Nav, linki w pionie */}
              <Nav />
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}