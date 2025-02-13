import Image from "next/image";
import Link from "next/link";

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
            <div className="col-lg-4 mb-30">
              <h5 className="text-18-medium color-white mb-20">Company</h5>
              <ul className="menu-footer">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 mb-30">
              <h5 className="text-18-medium color-white mb-20">Day Trips</h5>
              <ul className="menu-footer">
                <li>Dublin City Tour</li>
                <li>Cliffs of Moher</li>
                <li>Ring of Kerry</li>
                <li>Giants Causeway</li>
                <li>Connemara</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="text-18-medium color-white mb-20">
                Contact & Booking
              </h5>
              <p className="text-14 color-white">
                Contact us for personalized transfers and luxury transportation.
              </p>
              <a className="btn btn-primary mt-10" href="/booking">
                Book Now
              </a>
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
    </footer>
  );
}