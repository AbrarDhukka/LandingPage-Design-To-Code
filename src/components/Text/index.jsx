import React from "react";

const sizeClasses = {
  txtInterMedium32Gray100: "font-inter font-medium",
  txtInterMedium42WhiteA700: "font-inter font-medium",
  txtInterMedium18Gray900: "font-inter font-medium",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterRegular16Gray100: "font-inter font-normal",
  txtInterRegular18Gray100: "font-inter font-normal",
  txtInterMedium2132: "font-inter font-medium",
  txtInterRegular18Bluegray500: "font-inter font-normal",
  txtInterMedium18Pink40001: "font-inter font-medium",
  txtInterMedium5598: "font-inter font-medium",
  txtInterMedium1938: "font-inter font-medium",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterMedium18LightblueA700: "font-inter font-medium",
  txtInterMedium1437: "font-inter font-medium",
  txtInterMedium16Pink40001: "font-inter font-medium",
  txtInterMedium32WhiteA700: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular16Bluegray800: "font-inter font-normal",
  txtInterMedium3771: "font-inter font-medium",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterMedium56: "font-inter font-medium",
  txtInterMedium32: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium18GreenA700: "font-inter font-medium",
  txtInterMedium32Bluegray500: "font-inter font-medium",
  txtInterMedium42: "font-inter font-medium",
  txtInterMedium3323: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold64: "font-inter font-semibold",
  txtInterRegular18WhiteA700: "font-inter font-normal",
  txtInterMedium18WhiteA700: "font-inter font-medium",
  txtInterMedium16Bluegray500: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
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
