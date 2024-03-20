import { useGetCommentsQuery } from "@/redux/api/commentApi";
import { Spin } from "antd";
import { User } from "lucide-react";

const DisplayComment = () => {
  const { data, isLoading } = useGetCommentsQuery(undefined);
  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl mt-20">All public comments</h2>
      <hr className="text-black mt-4" />

      <div className="text-black">
        {data.map((comment: any) => (
          <div
            key={comment._id}
            className="p-4 border-none bg-gray-200 rounded-xl mb-4"
          >
            <div className="flex items-center gap-2">
              <User className="border border-black rounded-full" />{" "}
              <h2 key={comment._id} className="text-xl font-bold">
                {comment.username}
              </h2>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayComment;
