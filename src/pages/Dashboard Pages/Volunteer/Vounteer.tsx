import { FormSection, FormSubmit, Input } from "@/components/resuableForm";
import { usePostVolunteerMutation } from "@/redux/features/auth/volunteerApi";

import { TVolunteer } from "@/types/ClothesType";
import { Spin } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Vounteer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TVolunteer>();
  const [postVolunteer, { isLoading }] = usePostVolunteerMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const volunteerInfo = {
        email: data.email,
        name: data.name,
        location: data.location,
        why: data.why,
        phone: data.phone,
      };
      await postVolunteer(volunteerInfo);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You joined as a Volunteer Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">
        Join With Us As a Volunteer
      </h2>
      <div className="max-w-[600px] mx-auto">
        {isLoading ? (
          <div>
            <Spin />
          </div>
        ) : (
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="border py-10 rounded-xl"
          >
            <FormSection>
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
                register={register("email")}
                errors={errors.email?.message}
                label="email"
              />
              <Input
                type="text"
                register={register("phone")}
                errors={errors.phone?.message}
                label="phone"
              />
              <Input
                type="text"
                register={register("why")}
                errors={errors.why?.message}
                label="Why you want to work for volunteer?"
              />
              <FormSubmit
                btnName="submit"
                className="bg-yellow-400 text-black "
              />
            </FormSection>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Vounteer;
