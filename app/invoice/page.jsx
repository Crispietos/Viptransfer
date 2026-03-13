import Invoice from "@/components/Invoice";

export const metadata = {
  title:
    "Invoice || VIPTransfer.ie - Personalize Your Chauffeur Experience",
  description:
    "Enhance your VIPTransfer.ie journey with our Booking Extras. Choose additional services like child seats, champagne on board, extra luggage options, and more to make your ride truly exceptional.",
};
export default function page() {
  return (
    <>
      <main className="main">
        <Invoice />
      </main>
    </>
  );
}
