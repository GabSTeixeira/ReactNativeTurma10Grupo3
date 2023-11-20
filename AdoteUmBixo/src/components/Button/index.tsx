import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  )
};
