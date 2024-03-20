import { useEffect, useState } from "react";
import { useGetDonationQuery } from "@/redux/api/donationApi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TDonationData } from "@/types/ClothesType";
import DataDashboard from "@/components/layout/Dashboard/DataDashboard";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CustomPieChart = () => {
  const [data, setData] = useState<TDonationData[]>([]);
  const { data: donation, isLoading } = useGetDonationQuery(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (donation) {
        const formattedData: TDonationData[] = donation.map((items: any) => ({
          name: items.productCategory,
          value: parseFloat(items.productPrice),
        }));
        setData(formattedData);
      }
    };

    fetchData();
  }, [donation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataDashboard />
      <ResponsiveContainer width="100%" height={800}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="30%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                name={entry?.name}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
