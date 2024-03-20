import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  useDeleteClothesMutation,
  useGetClothesQuery,
} from "@/redux/api/clothesApi";
import { Button } from "@/components/ui/button";
import EditModal from "./EditModal";
import Swal from "sweetalert2";

interface DataType {
  key: React.Key;
  _id: string;
  title: string;
  category: string;
  size: string;
  image?: string; // Update DataType interface
  description?: string; // Update DataType interface
}

interface WinterDashClothesProps {
  handleEdit: (
    id: string,
    title: string,
    image: string,
    category: string,
    size: string,
    description: string
  ) => void;
  handleDelete: (id: string) => void;
}

const columns: (
  props: WinterDashClothesProps
) => TableColumnsType<DataType> = ({ handleDelete }) => [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Size",
    dataIndex: "size",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) => (
      <div className="flex just-center items-center gap-2">
        <EditModal
          key={`edit_${record?._id}`}
          id={record?._id}
          image={record?.image || ""}
          title={record?.title}
          description={record?.description || ""}
          size={record?.size}
          category={record?.category}
        />
        <Button
          key={`delete_${record?._id}`}
          className="bg-[#D7E826] text-black"
          onClick={() => handleDelete(record._id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const WinterDashClothes = () => {
  const { data, error } = useGetClothesQuery(undefined);
  const [deleteClothes] = useDeleteClothesMutation();
  if (!data) return <div>Loading...</div>;
  if (error) {
    // Check if it's a FetchBaseQueryError
    if ("status" in error) {
      // Handle FetchBaseQueryError
      return <div>Error: {error.status}</div>;
    } else {
      // Handle SerializedError
      return <div>Error: {JSON.stringify(error)}</div>;
    }
  }

  const handleEdit = (id: string, title: string) => {
    console.log("Edit data:", { id, title });
    // Implement your logic to handle editing here
  };
  const handleDelete = (id: string) => {
    deleteClothes(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Clothes deleted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}></div>
      <Table
        columns={columns({ handleEdit, handleDelete })}
        dataSource={data}
      />
    </div>
  );
};

export default WinterDashClothes;
