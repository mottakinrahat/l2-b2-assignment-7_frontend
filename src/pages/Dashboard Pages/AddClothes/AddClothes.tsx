import { FormSection, FormSubmit, Input } from "@/components/resuableForm";
import { useAddClothesMutation } from "@/redux/api/clothesApi";
import { TClothes } from "@/types/ClothesType";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";


const AddClothes = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TClothes>();

  const [addClothes] = useAddClothesMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const clothesInfo = {
        image: data.image,
        title: data.title,
        size: data.size,
        category: data.category,
        description: data.description,
        price: data.price,
      };

      await addClothes(clothesInfo);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Clothes added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  return (
    <div className="max-w-[400px] mx-auto">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            type="text"
            register={register("image")}
            errors={errors.image?.message}
            label="Image"
          ></Input>
          <Input
            type="text"
            register={register("title")}
            errors={errors.title?.message}
            label="title"
          ></Input>
          <Input
            type="text"
            register={register("category")}
            errors={errors.category?.message}
            label="Category"
          ></Input>
          <Input
            type="text"
            register={register("size")}
            errors={errors.size?.message}
            label="Size"
          ></Input>
          <Input
            type="text"
            register={register("description")}
            errors={errors.description?.message}
            label="Description"
          ></Input>
          <Input
            type="text"
            register={register("price")}
            errors={errors.price?.message}
            label="price"
          ></Input>
        </FormSection>
        <FormSubmit
          btnName="submit"
          className="bg-yellow-400 text-black"
        ></FormSubmit>
      </Form>
    </div>
  );
};

export default AddClothes;
