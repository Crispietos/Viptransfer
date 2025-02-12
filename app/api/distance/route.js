export async function POST(req) {
  try {
    const { pickup, dropoff } = await req.json();
    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!pickup || !dropoff) {
      return new Response(JSON.stringify({ error: "Missing pickup or dropoff location" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
      pickup
    )}&destinations=${encodeURIComponent(dropoff)}&key=${GOOGLE_API_KEY}`;

    console.log("Fetching URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return new Response(JSON.stringify({ error: "Invalid API response", details: data }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching distance", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}