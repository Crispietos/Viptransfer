"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header sticky-bar ${scrolled ? "stick" : ""}`}>
      <div className="container">
        {/* Top Section */}
        <div
          className="flex justify-between items-center py-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px", // Ogólny odstęp między grupami
            marginBottom: "10px", // Zmniejszenie odstępu między tą sekcją a menu
          }}
        >
          {/* Left side: Phone and Email */}
          <div
            className="flex items-center gap-8"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px", // Odstępy między telefonem a e-mailem
            }}
          >
            <a
              className="text-14-medium call-phone text-white hover-up flex items-center gap-3"
              href="tel:+353876899968"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              +353 876 899 968
            </a>
            <Link
              className="text-14-medium text-white hover-up flex items-center gap-3"
              href="mailto:info@viptransfer.ie"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <i className="fas fa-envelope text-white text-lg"></i>
              info@viptransfer.ie
            </Link>
          </div>

          {/* Right side: Social Icons */}
          <div
            className="flex items-center gap-8"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px", // Odstęp między ikonami społecznościowymi
            }}
          >
            <Link
              href="https://www.facebook.com/viptransferireland"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-up flex items-center"
            >
              <i className="fab fa-facebook-f text-white text-lg"></i>
            </Link>
            <Link
              href="https://www.instagram.com/viptransfer_ireland/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-up flex items-center"
            >
              <i className="fab fa-instagram text-white text-lg"></i>
            </Link>
          </div>
        </div>

        {/* Main Section */}
        <div
          className="main-header flex justify-between items-center"
          style={{
            flexWrap: "nowrap",
            marginTop: "5px", // Zmniejszenie odstępu między tą sekcją a kontaktami
          }}
        >
          {/* Logo */}
          <div className="header-logo flex-shrink-0">
            <Link className="d-flex" href="/">
              <Image
                width={150}
                height={19}
                alt="luxride"
                src="/assets/imgs/template/logo.webp"
                style={{ height: "fit-content" }}
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="header-nav flex-grow">
            <nav className="nav-main-menu">
              <ul
                className="main-menu flex justify-center"
                style={{ gap: "20px" }}
              >
                <Nav />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}