import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { lable, type = "text", className = "", ...props },

  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {lable && (
        <lable className="inline-block mb-1 pl-1" htmlfor={id}>
          {lable}
        </lable>
      )}
      <input
        type={text}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
