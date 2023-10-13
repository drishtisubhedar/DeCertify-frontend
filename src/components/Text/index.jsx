import React from "react";

const sizeClasses = {
  txtInterMedium30: "font-inter font-medium",
  txtMontserratRomanMedium51: "font-medium font-montserrat",
  txtInterMedium24: "font-inter font-medium",
  txtMontserratRomanBold44: "font-bold font-montserrat",
  txtMontserratRomanMedium65: "font-medium font-montserrat",
  txtInterMedium15: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
