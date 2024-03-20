import { useGetAllVolunteerQuery } from "@/redux/features/auth/volunteerApi";
import { Spin, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  phone: number;
  location: string;
  email: string;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
];
const AboutUs = () => {
  const { data, isLoading } = useGetAllVolunteerQuery(undefined);
  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  return (
    <div className="px-10">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AboutUs;
