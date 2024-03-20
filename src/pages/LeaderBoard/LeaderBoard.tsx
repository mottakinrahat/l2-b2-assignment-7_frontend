

import { useGetAllDonorQuery } from "@/redux/features/auth/donorApi";
import LeaderCard from "./LeaderCard";
import { Spin } from "antd";


const LeaderBoard = () => {
  const { data, isLoading } = useGetAllDonorQuery(undefined);
  if (isLoading) {
    return (
      <div className="example">
        <Spin />
      </div>
    );
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Donors Leaderboard
        </h2>
        <p className="max-w-[800px] text-center mx-auto">
          Embracing the warmth of community, we honor our esteemed winter
          champions.collective generosity blankets our cause with compassion,
          ensuring no one faces the cold alone. With heartfelt gratitude, we
          celebrate their unwavering commitment to spreading warmth and kindness
          throughout the winter season.{" "}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-24 mt-20 px-20">
          {data.map((donor: any) => (
            <LeaderCard key={donor._id} donor={donor}></LeaderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
