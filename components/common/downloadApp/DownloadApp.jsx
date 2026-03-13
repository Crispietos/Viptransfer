// components/sections/DownloadApp.js
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section
      className="section mt-50 pt-96 pb-96"
      style={{ background: '#0EA5E9' }}
    >
      <div className="container-sub mt-50 text-center">
        {/* Heading and intro */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-44-medium mb-3" style={{ color: '#fff' }}>
            Discover Our Private Driver Service in Ireland
          </h2>
          <p className="text-16 m-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Whether you’re arriving at the airport, planning a day trip, or heading to a special destination – we offer private transfers tailored to your needs. Enjoy reliable service, clean and elegant cars, and experienced drivers who value your time and comfort.
          </p>
        </div>

        {/* Image */}
        <div className="mb-16 mt-20">
          <Image
            src="/assets/imgs/page/homepage6/banner.webp"
            alt="VIPTransfer Services"
            width={800}
            height={400}
            className="rounded-4 mx-auto img-fluid"
            priority
          />
        </div>

        {/* Second section */}
        <div className="max-w-3xl mx-auto" style={{ marginBottom: '2rem' }}>
          <h3 className="heading-24-medium mb-3" style={{ color: '#fff' }}>
            Why Choose VIPTransfer?
          </h3>
          <p className="text-16 mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Our professional chauffeurs, premium fleet, and exceptional service ensure a first-class experience. Enjoy stress-free travel, whether for business or leisure.
          </p>
          <a
            href="#"
            className="btn btn-light rounded-3 px-4 py-3 fw-semibold"
            style={{ color: '#0EA5E9' }}
          >
            Book Your Ride Today →
          </a>
        </div>
      </div>
    </section>
  );
}