import { FormSection, FormSubmit, Input } from "@/components/resuableForm";
import { usePostDonorMutation } from "@/redux/features/auth/donorApi";
import { TTestimonialData } from "@/types/ClothesType";
import { Spin } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import ShowTestimonial from "./ShowTestimonial";

const Testimonial = () => {
  const img_hosting_url =
    "https://api.imgbb.com/1/upload?key=186d452e41d22252390133ef50e7bbf4";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTestimonialData>();

  const [postDonor, { isLoading }] = usePostDonorMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
        const response = await fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        });
        const imageResponse = await response.json();
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const testimonialInfo = {
            image: imageUrl,
            name: data.name,
            location: data.location,
            donationPrice: data.donationPrice,
            position: data.position,
            testimonial: data.testimonial,
          };
          await postDonor(testimonialInfo);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Testimonial added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto">
        {isLoading ? (
          <div>
            <Spin />
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <Input
                type="file"
                register={register("image")}
                errors={errors.image?.message}
                label="Image"
              />
              <Input
                type="text"
                register={register("name")}
                errors={errors.name?.message}
                label="name"
              />
              <Input
                type="text"
                register={register("location")}
                errors={errors.location?.message}
                label="location"
              />
              <Input
                type="text"
                register={register("position")}
                errors={errors.position?.message}
                label="position"
              />
              <Input
                type="text"
                register={register("donationPrice")}
                errors={errors.donationPrice?.message}
                label="donationPrice"
              />
              <Input
                type="text"
                register={register("testimonial")}
                errors={errors.testimonial?.message}
                label="testimonial"
              />
            </FormSection>
            <FormSubmit btnName="submit" className="bg-yellow-400 text-black" />
          </Form>
        )}
      </div>
      <div className="mt-20">
        <ShowTestimonial />
      </div>
    </div>
  );
};

export default Testimonial;
