import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "@/components/resuableForm";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUpdateClothesMutation } from "@/redux/api/clothesApi";
import { TClothes } from "@/types/ClothesType";
import { TEditModalProps } from "@/types/EditModalType";
import { DialogDescription } from "@radix-ui/react-dialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditModal = ({
  id,
  title,
  description,
  size,
  image,
  category,
}: TEditModalProps) => {
  const [updateClothes] = useUpdateClothesMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TClothes>();
  const onSubmit = async (data: FieldValues) => {
    try {
      const options = {
        id: id,
        updateClothesInfo: {
          image: data.image,
          title: data.title,
          size: data.size,
          category: data.category,
          description: data.description,
        },
      };

      await updateClothes(options);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-[#D7E826] text-black px-4 py-2 font-semibold rounded-md ">
        Edit
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogDescription>
          <div className="max-w-[400px] mx-auto">
            <Form
              onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
            >
              <FormSection>
                <Input
                  type="text"
                  register={register("image")}
                  errors={errors.image?.message}
                  label="Image"
                  defaultValue={image}
                ></Input>
                <Input
                  type="text"
                  register={register("title")}
                  errors={errors.title?.message}
                  label="title"
                  defaultValue={title}
                ></Input>
                <Input
                  type="text"
                  register={register("category")}
                  errors={errors.category?.message}
                  label="Category"
                  defaultValue={category}
                ></Input>
                <Input
                  type="text"
                  register={register("size")}
                  errors={errors.size?.message}
                  label="Size"
                  defaultValue={size}
                ></Input>
                <Input
                  type="textarea"
                  register={register("description")}
                  errors={errors.description?.message}
                  label="Description"
                  defaultValue={description}
                ></Input>
              </FormSection>
              <FormSubmit
                btnName="submit"
                className="bg-yellow-400 text-black"
              ></FormSubmit>
            </Form>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
