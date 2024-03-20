import Title from "@/components/Title";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "@/components/resuableForm";
import { useRegistersMutation } from "@/redux/features/auth/authApi";
import { TRegister } from "@/types/LoginType";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>();
  const [registers, { error }] = useRegistersMutation();
  console.log("error=>", error);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering in");
    try {
      const userRegisterInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await registers(userRegisterInfo).unwrap();

      toast.success("Registered in", { id: toastId, duration: 2000 });

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Title title="Please Register Here"></Title>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            type="text"
            register={register("name")}
            errors={errors.name?.message}
            label="Name"
          ></Input>
          <Input
            type="email"
            register={register("email")}
            errors={errors.email?.message}
            label="Email"
          ></Input>
          <Input
            type="password"
            register={register("password")}
            errors={errors.password?.message}
            label="Password"
          ></Input>
        </FormSection>
        <FormSubmit className="bg-yellow-400 text-black"></FormSubmit>
      </Form>
    </div>
  );
};

export default Register;
