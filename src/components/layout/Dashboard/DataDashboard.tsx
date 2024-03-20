import { CalendarCheck2, Coins, ListChecks, Users } from "lucide-react";

const DataDashboard = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2">
      <div className="bg-blue-400 w-80 h-40 rounded flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white font-semibold flex items-center gap-4">
          Total Volunteer <Users />
        </h1>
        <h2 className="text-5xl text-white font-bold ">500+</h2>
      </div>
      <div className="bg-yellow-600 w-80 h-40 rounded flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white font-semibold flex items-center gap-4">
          Total Events <CalendarCheck2 />
        </h1>
        <h2 className="text-5xl text-white font-bold ">150+</h2>
      </div>
      <div className="bg-blue-900 w-80 h-40 rounded flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white font-semibold flex items-center gap-4">
          Total Donor
          <Coins />
        </h1>
        <h2 className="text-5xl text-white font-bold ">500+</h2>
      </div>
      <div className="bg-green-800 w-80 h-40 rounded flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white font-semibold flex items-center gap-4">
          Total Clothes Items <ListChecks />
        </h1>
        <h2 className="text-5xl text-white font-bold ">5000+</h2>
      </div>
    </div>
  );
};

export default DataDashboard;
