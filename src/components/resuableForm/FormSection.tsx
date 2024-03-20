import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const FormSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn("justify-items-center p-2 gap-2 grid  md:grid-cols-1 ")}>
      {children}
    </div>
  );
};
