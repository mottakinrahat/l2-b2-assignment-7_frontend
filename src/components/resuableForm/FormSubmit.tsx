import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
type TSubmit = {
  className?: string;
   btnName?: "button" | "submit" | "reset";
};

export const FormSubmit = ({ className, btnName }: TSubmit) => {
  // Destructure props here

  return (
    <div className={cn("justify-items-center p-2 gap-2 grid md:grid-cols-2 ")}>
      <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
        <Button className={cn("w-full md:w-fit", className)} type={btnName}>
          Submit
        </Button>
      </div>
    </div>
  );
};
