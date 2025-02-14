import React from "react";
import Image from "next/image";

const galleryImages = [
  "/assets/imgs/gallery/Gallery7.webp",
  "/assets/imgs/gallery/Gallery5.webp",
  "/assets/imgs/gallery/Gallery3.webp",
  "/assets/imgs/gallery/Gallery4.webp",
  "/assets/imgs/gallery/Gallery2.webp", // Dodano brakujący obraz
  "/assets/imgs/gallery/Gallery6.webp", // Dodano brakujący obraz
  "/assets/imgs/gallery/Gallery5.webp",
  "/assets/imgs/gallery/Gallery8.webp",
  "/assets/imgs/gallery/Gallery9.webp",
  "/assets/imgs/gallery/Gallery10.webp",
  
];

export default function GallerySection() {
  return (
    <section className="section pt-120 pb-50">
      <div className="container-sub text-center">
        <h2 className="heading-44-medium mb-20 wow fadeInUp">
          Explore Our Gallery
        </h2>
        <p className="text-16 color-text mb-50">
          Get a glimpse of the exceptional service we offer. Whether it's a 
          private transfer, a business trip, or a day trip around Ireland, our 
          professional chauffeur ensures a seamless experience.
        </p>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}