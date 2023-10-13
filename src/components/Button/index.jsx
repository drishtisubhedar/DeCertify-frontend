import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[37px]" };
const variants = {
  underline: { gray_600: "text-gray-600" },
  outline: {
    purple_A700: "border border-purple-A700 border-solid text-white-A700",
  },
  fill: { purple_200: "bg-purple-200 text-purple-900_01" },
};
const sizes = { xs: "py-0.5", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["underline", "outline", "fill"]),
  color: PropTypes.oneOf(["gray_600", "purple_A700", "purple_200"]),
};

export { Button };
