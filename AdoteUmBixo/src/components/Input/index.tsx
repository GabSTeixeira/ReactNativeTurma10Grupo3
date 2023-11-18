import React from "react";
import { TextInput, TextInputProps, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>
}

export const Input = ({ style, customStyle, ...props }: InputProps) => {
  return( 
    <TextInput style={[styles.input, style, customStyle]} {...props} />
  )};
