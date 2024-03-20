import { createContext } from "react";

import { cn } from "@/lib/utils";
import { TForm } from "@/types/FormType";
export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);
export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-300 shadow-sm rounded-md max-w-[400px] p-5 mx-auto "
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
