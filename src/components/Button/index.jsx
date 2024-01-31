import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    deep_purple_A400: "bg-deep_purple-A400 text-white-A700",
    blue_A400_01: "bg-blue-A400_01",
    black_900: "bg-black-900",
    white_A700: "bg-white-A700 text-deep_purple-A400",
  },
  gradient: { light_blue_400_blue_A400: "bg-gradient " },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "deep_purple_A400",
    "blue_A400_01",
    "black_900",
    "white_A700",
    "light_blue_400_blue_A400",
  ]),
};

export { Button };
