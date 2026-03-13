"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        if (data.status !== "OK" || !data.result?.reviews) {
          setError(true);
          return;
        }

        setName(data.result.name);
        setRating(data.result.rating);
        setTotal(data.result.user_ratings_total);
        setReviews(data.result.reviews);
      } catch (err) {
        setError(true);
      }
    };

    fetchReviews();
  }, []);

  if (error || reviews.length === 0) return null;

  return (
    <section className="google-reviews-section bg-gray-100">
      <div className="max-w-5xl mx-auto text-center px-4">
        <div className="mb-2">
         <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/544px-Google_2015_logo.svg.png"
  alt="Google"
  className="mx-auto"
  style={{ width: "100px", height: "auto" }}
/>
        </div>
        <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
        {rating && (
          <p className="text-gray-600 mb-6">
            <strong>{name}</strong> rated <span className="text-yellow-500">{rating}★</span> ({total} reviews)
          </p>
        )}

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{review.author_name}</p>
                    <p className="text-yellow-500 text-sm">{'★'.repeat(review.rating)}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8">
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJQWBFq7n0IqARnQXHC7f41Lc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-3 px-4 py-3 fw-semibold"
            style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none' }}
          >
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}