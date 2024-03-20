import ProtectedRoute from "@/components/layout/ProtectedRoute";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "@/components/resuableForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePostDonationMutation } from "@/redux/api/donationApi";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Gift } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type TDetails = {
  productName: string;
  productPrice: string | undefined;
  productCategory: string;
};
type TDetailsModal = {
  productName: string;
  productPrice: string;
  productCategory: string;
  username: string;
  email: string;
};
const DetailsModal = ({
  productName,
  productPrice,
  productCategory,
}: TDetails) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TDetailsModal>();
  const navigate = useNavigate();
  const [postDonation] = usePostDonationMutation();

  const user = useAppSelector(useCurrentUser);
  const onSubmit = async (data: FieldValues) => {
    try {
      const donationInfo = {
        username: data.username,
        email: data.email,
        productName: data.productName,
        productPrice: data.productPrice,
        productCategory: data.productCategory,
      };
      postDonation(donationInfo);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Donation added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog>
        <ProtectedRoute>
          <DialogTrigger>
            {" "}
            <Button className="bg-[#D7E826] text-black">
              Donate Now <Gift className="w-5 ml-2" />
            </Button>
          </DialogTrigger>
        </ProtectedRoute>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <Form
                onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
              >
                <FormSection>
                  <Input
                    type="text"
                    register={register("username")}
                    errors={errors.username?.message}
                    label="your name"
                    defaultValue={user?.name}
                  ></Input>
                  <Input
                    type="text"
                    register={register("email")}
                    errors={errors.email?.message}
                    label="your email"
                    defaultValue={user?.email}
                  ></Input>
                  <Input
                    type="text"
                    register={register("productName")}
                    errors={errors.productName?.message}
                    label="Product Name"
                    defaultValue={productName}
                  ></Input>
                  <Input
                    type="text"
                    register={register("productPrice")}
                    errors={errors.productPrice?.message}
                    label="product Price"
                    defaultValue={productPrice}
                  ></Input>
                  <Input
                    type="text"
                    register={register("productCategory")}
                    errors={errors.productCategory?.message}
                    label="product Category"
                    defaultValue={productCategory}
                  ></Input>
                </FormSection>
                <FormSubmit
                  btnName="submit"
                  className="bg-yellow-400 text-black"
                ></FormSubmit>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailsModal;
