import { MapPin } from "lucide-react";
const donationEvents = [
  {
    eventName: "Warm Hearts Winter Drive",
    totalAmount: 40000,
    currency: "USD",
    location: "New York",
    details: "WINTER WARDROBE limited",
  },
  {
    eventName: "Cozy Community Collection",
    totalAmount: 35000,
    currency: "USD",
    location: "Los Angeles",
    details: "Fleece blankets and jackets",
  },
  {
    eventName: "Snowflake Blanket Drive",
    totalAmount: 28000,
    currency: "USD",
    location: "Chicago",
    details: "Coats and blankets distribution",
  },
  {
    eventName: "Frosty Nights Outreach",
    totalAmount: 22000,
    currency: "USD",
    location: "Houston",
    details: "Winter clothes for homeless",
  },
  {
    eventName: "Chill Chasers Charity",
    totalAmount: 18000,
    currency: "USD",
    location: "Seattle",
    details: "Cold weather essentials",
  },
  {
    eventName: "Cold Weather Clothing Campaign",
    totalAmount: 25000,
    currency: "USD",
    location: "Miami",
    details: "Winter clothing for families in need",
  },
  // Add more donation events here...
];

const TopDonation = () => {
  return (
    <div>
      {donationEvents.map((event, index) => (
        <div
          key={index}
          className="bg-[#D7E826] w-full h-[120px]  flex  flex-row-reverse justify-center items-center gap-4 mb-4 px-4  shadow-sm "
        >
          <div>
            <h1 className="text-2xl font-bold">{`$${event.totalAmount}`}</h1>
            <h1 className="text-2xl font-bold">{event.currency}</h1>
          </div>
          <div>
            <h2 className="uppercase font-semibold flex items-center gap-2">
              {event.eventName}
            </h2>
            <p className="flex items-center gap-2 text-[14px]">
              <MapPin className="w-4" /> {event.location}
            </p>
            <p className="lg:flex flex-wrap items-center gap-2 text-[14px]">
              {event.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopDonation;
