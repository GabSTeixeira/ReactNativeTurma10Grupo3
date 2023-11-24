import React from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { styles } from "./styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GlobalStyle from "../../globalStyle/GlobalStyle";

interface InputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
  icon: IconDefinition;
  title: string;
}

export const Input = ({ style, title, customStyle, icon, ...props }: InputProps) => {
  return (
    <View>
      <Text style={GlobalStyle.texto}>{title}</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
        <TextInput style={[styles.input, style, customStyle]} {...props}/>
      </View>
    </View>
  );
};
