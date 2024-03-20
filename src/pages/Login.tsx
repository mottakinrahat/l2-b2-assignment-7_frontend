import { Form, FormSection, FormSubmit } from "@/components/resuableForm";
import { Input } from "@/components/resuableForm/Input";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { TLogin } from "@/types/LoginType";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLogin>();
  const [login, { error }] = useLoginMutation();
  console.log("error=>", error);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;
      toast.success("Logged in", { id: toastId, duration: 2000 });

      dispatch(setUser({ user: user, token: res.token }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">
        {" "}
        Please Login Here
      </h2>
      <div>
        <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
          <FormSection>
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
          <p>
            Don't Register yet?<Link to="/register">Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
