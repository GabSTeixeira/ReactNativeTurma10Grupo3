import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
}

export const Input = ({ ...props }: InputProps) => {
  return( 
    <TextInput style={styles.input} {...props} />
  );
};
