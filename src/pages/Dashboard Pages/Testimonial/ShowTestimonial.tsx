import { useGetAllDonorQuery } from "@/redux/features/auth/donorApi";
import { Spin, Table } from "antd";
import type { TableProps } from "antd";

interface TTestimonialData {
  key: React.Key;
  name: string;
  testimonial: string;
  location: string;
  image: string;
  donationPrice: number;
  position: string;
}
const columns: TableProps<TTestimonialData>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Donation",
    dataIndex: "donationPrice",
    key: "donation",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
];

const ShowTestimonial = () => {
  const { data, isLoading } = useGetAllDonorQuery(undefined);
  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  return <Table columns={columns} dataSource={data} />;
};

export default ShowTestimonial;
