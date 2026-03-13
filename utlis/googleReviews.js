// utils/googleReviews.js
export async function getGoogleReviews(placeId) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Fetch reviews failed');
  const json = await res.json();
  if (json.status !== 'OK' || !json.result) {
    console.error('Google Places API error:', json);
    return [];
  }
  return json.result.reviews ?? [];
}