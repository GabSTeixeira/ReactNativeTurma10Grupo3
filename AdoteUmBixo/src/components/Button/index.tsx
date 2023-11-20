import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
  buttonStyle?: ViewStyle
}

export const Button = ({ children, buttonStyle, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...props}>
      {children}
    </TouchableOpacity>
  );
};
