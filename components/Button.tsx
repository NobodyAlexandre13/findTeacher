import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { themes } from "@/constants/theme";

interface ButtonProps {
    colorBtn: string;
    border?: string;
    colorText: string;
    title: string;
    onPress?: () => void;
}

export const Button = ({ colorBtn, border, colorText, onPress, title, ...rest } : ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colorBtn, borderColor: border ? border : "transparent" },
      ]}
        onPress={onPress}
      {...rest}
    >
      <Text
        style={[
          styles.textButton,
          { color: colorText }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
  },

  textButton: {
    fontSize: 18,
    fontFamily: themes.fonts.medium,
    textAlign: "center",
  },
});
