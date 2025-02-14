import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="section mt-50 bg-dark pt-96 pb-96"> {/* Większe odstępy */}
      <div className="container-sub mt-50 text-center">
        <h2 className="heading-44-medium color-white mb-12">
          Discover VIPTransfer’s Premier Services
        </h2>
        
        <p className="color-white text-16 mb-10 mt-20 max-w-3xl mx-auto">
          Experience luxury transportation with VIPTransfer. Whether it’s an airport transfer, 
          a day trip, or a special occasion, we are dedicated to making your journey 
          <br /> seamless and comfortable.
        </p>

        <div className="mb-16">
          <Image
            src="/assets/imgs/page/homepage6/banner.webp"
            alt="VIPTransfer Services"
            width={800}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="mt-16">
          <h3 className="heading-24-medium color-white mb-6">Why Choose VIPTransfer?</h3>
          
          <p className="text-16 color-white mb-8 max-w-3xl mx-auto">
            Our professional chauffeurs, premium fleet, and exceptional service ensure a 
            first-class experience. Enjoy stress-free travel, whether for business or leisure.
          </p>

          <a href="booking.html" className="btn btn-primary mt-60 mb-50">
            Book Your Ride Today
          </a>
        </div>
      </div>
    </section>
  );
}