import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Footer1() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container-sub">
          <div className="box-footer-top">
            <div className="row align-items-center">
              {/* Logo i numer telefonu */}
              <div className="col-lg-6 col-md-6 text-md-start text-center mb-15">
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <a href="/">
                    <Image
                      width={150}
                      height={150}
                      src="/assets/imgs/template/logo.webp"
                      alt="VIP Transfer"
                    />
                  </a>
                  <a
                    className="text-14-medium call-phone color-white hover-up ml-20"
                    href="tel:+353876899968"
                  >
                    +353 876 899 968
                  </a>
                </div>
              </div>
              {/* Ikony społecznościowe */}
              <div className="col-lg-6 col-md-6 text-md-end text-center mb-15">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <span className="text-18-medium color-white mr-10">
                    Follow Us:
                  </span>
                  <a
                    className="social-icon hover-up"
                    href="https://www.facebook.com/viptransferireland"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-icon hover-up ml-10"
                    href="https://www.instagram.com/viptransfer_ireland/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Menu linków */}
          <div className="row">
            <div className="col-lg-3 mb-30">
              <h5 className="text-18-medium color-white mb-20">Company</h5>
              <ul className="menu-footer">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/booking-extra">Booking</Link></li>
                <li><Link href="/pay">Pay</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 mb-30">
              <h5 className="text-18-medium color-white mb-20">Company</h5>
              <ul className="menu-footer">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">Faq</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 mb-30">
              <h5 className="text-18-medium color-white mb-20">Day Trips</h5>
              <ul className="menu-footer">
                <li><Link href="/day-trip">Day Trip (Overview)</Link></li>
                <li><Link href="/trips/cliffs-of-moher">Cliffs of Moher</Link></li>
                <li><Link href="/trips/glendalough-and-powerscourt">Glendalough & Powerscourt</Link></li>
                <li><Link href="/trips/giants-causeway">Giant’s Causeway</Link></li>
                <li><Link href="/trips/waterford-kilkenny">Waterford & Kilkenny</Link></li>
                <li><Link href="/trips/Blarney-Castle">Blarney Castle</Link></li>
                <li><Link href="/trips/CastleSouthandSouthwest">Castle South and Southwest</Link></li>
                <li><Link href="/bookingdaytrip">Book a Day Trip</Link></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className="text-18-medium color-white mb-20">
                Contact & Booking
              </h5>
              <p className="text-14 color-white">
                Contact us for personalised day trips, Dublin Airport transfers, and private travel across Ireland.
              </p>
              <Link
                className="btn mt-10"
                href="/booking-extra"
                style={{ backgroundColor: '#009FE3', color: '#fff', border: 'none', padding: '10px 20px' }}
              >
                Get Quote & Book
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Dolna sekcja stopki */}
      <div className="footer-2">
        <div className="container-sub">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <span className="text-14 color-white mr-50">
                  © {new Date().getFullYear()} VIP Transfer. All rights reserved.
                </span>
              </div>
              <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <a className="btn btn-link-location" href="#">
                  Ireland
                </a>
                <a className="btn btn-link-globe" href="#">
                  English
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VIP Transfer",
              "url": "https://viptransfer.ie",
              "telephone": "+353876899968",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dublin",
                "addressCountry": "IE"
              },
              "image": "https://viptransfer.ie/assets/imgs/template/logo.webp",
              "areaServed": "Ireland",
              "sameAs": [
                "https://www.facebook.com/viptransferireland",
                "https://www.instagram.com/viptransfer_ireland/"
              ]
            }
          `}
        </Script>
    </footer>
  );
}
