import { Button } from "@/components/ui/button";
import { useAddCommentsMutation } from "@/redux/api/commentApi";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";

const AddComments = () => {
  const user = useAppSelector(useCurrentUser);
  const [addComments] = useAddCommentsMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const comments = {
        username: user?.name,
        email: user?.email,
        comment: data.comment,
      };
      await addComments(comments);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Comment Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="comment" className="font-bold">
            Please Add your valuable comment:
          </label>
          <textarea
            className="w-full px-4 py-2 border-2 border-gray-800 text-black rounded-xl resize-none focus:border-blue-500"
            id="comment"
            {...register("comment", { required: "Comment is required" })}
          ></textarea>
          {errors.comment && <span> {errors.comment.message as string}</span>}
        </div>
        <Button className="bg-[#D7E826] text-black" type="submit">
          Add Comment
        </Button>
      </form>
    </div>
  );
};

export default AddComments;
