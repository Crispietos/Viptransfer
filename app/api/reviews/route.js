export async function GET() {
  const PLACE_ID = "ChIJQWBFq7n0IqARnQXHC7f41Lc";
  const API_KEY = process.env.GOOGLE_PLACES_BACKEND_KEY;

  const fields = "reviews,rating,user_ratings_total,name";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("Google API Response:", data); // 👈 to pokaże Ci w konsoli serwera, co Google zwraca

    // Tymczasowo zwracamy całą odpowiedź Google
    return Response.json(data);

    // (to co poniżej jest ignorowane, bo nigdy nie zostanie wykonane)
    /*
    if (data.status !== "OK") {
      return Response.json({ error: data.status }, { status: 400 });
    }

    return Response.json({
      name: data.result.name,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews,
    });
    */
  } catch (error) {
    return Response.json({ error: "Failed to fetch reviews." }, { status: 500 });
  }
}