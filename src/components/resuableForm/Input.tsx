interface InputProps {
  label?: string;
  register: { [key: string]: any };
  errors?: { message: string } | string | undefined;
  type?: string | undefined;
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  register,
  errors,
  type,
  defaultValue,
}) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="name">
        {label}
      </label>
      <input
        className={`text-black w-full max-w-md border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-green-500`}
        type={type}
        id={type}
        {...register}
        defaultValue={defaultValue}
      />
      {typeof errors === "object" && errors.message && (
        <span className="text-xs text-red-500">{errors.message}</span>
      )}
      {typeof errors === "string" && (
        <span className="text-xs text-red-500">{errors}</span>
      )}
    </div>
  );
};
