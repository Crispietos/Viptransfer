// Continuous fare calculator matching client table (Nov 2025)
// Segments: up to 35 km (set fare), then 35–50, 50–100, 100–150, 150–200, 200–250, and >250 (same as 250).
// Calculation is continuous – each segment adds on top of the previous one.

export default function calculateFares(distance) {
  const d = Math.max(0, Number(distance) || 0);

  // --- Set fares (<= 35 km) ---
  const setFare = {
    business: 110,
    first: 130,
    mpv: 120,
    v: 140,
  };

  // --- Per‑km rates per segment ---
  const r35_50 = { business: 3.2, first: 3.8, mpv: 3.5, v: 4.2 };
  const r50_100 = { business: 2.0, first: 2.3, mpv: 2.1, v: 2.5 };
  const r100_150 = { business: 1.9, first: 2.3, mpv: 2.1, v: 2.5 };
  const r150_200 = { business: 1.8, first: 2.3, mpv: 2.1, v: 2.5 };
  const r200_250 = { business: 1.8, first: 2.2, mpv: 2.0, v: 2.4 };
  const r250_plus = { business: 1.8, first: 2.0, mpv: 1.8, v: 2.4 }; // powyżej 250 km – te same stawki

  const priceFor = (type) => {
    if (d <= 35) {
      return Math.round(setFare[type]);
    }

    // Build continuous price step-by-step to avoid jumps on edges
    let price = setFare[type];

    if (d <= 50) {
      price += (d - 35) * r35_50[type];
      return Math.round(price);
    }

    // up to 50
    price += (50 - 35) * r35_50[type];

    if (d <= 100) {
      price += (d - 50) * r50_100[type];
      return Math.round(price);
    }

    // up to 100
    price += (100 - 50) * r50_100[type];

    if (d <= 150) {
      price += (d - 100) * r100_150[type];
      return Math.round(price);
    }

    // up to 150
    price += (150 - 100) * r100_150[type];

    if (d <= 200) {
      price += (d - 150) * r150_200[type];
      return Math.round(price);
    }

    // up to 200
    price += (200 - 150) * r150_200[type];

    if (d <= 250) {
      price += (d - 200) * r200_250[type];
      return Math.round(price);
    }

    // up to 250
    price += (250 - 200) * r200_250[type];

    // > 250
    price += (d - 250) * r250_plus[type];
    return Math.round(price);
  };

  return {
    business: priceFor("business"),
    first: priceFor("first"),
    mpv: priceFor("mpv"),
    v: priceFor("v"),
  };
}