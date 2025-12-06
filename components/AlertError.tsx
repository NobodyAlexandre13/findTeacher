import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { themes } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

interface AlertProps {
    colorBtn: string;
    border?: string;
    colorText: string;
    title: string;
    onPress?: () => void;
}

export const AlertError = ({ colorBtn, colorText, onPress, title } : AlertProps) => {
  return (
    <View style={[styles.container, { backgroundColor: colorBtn, }]}>
        <Text style={[styles.textButton, { color: colorText }]}>
            {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="close" size={20} color={colorText} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  textButton: {
    fontSize: 14,
    width: "80%"
  },
});
