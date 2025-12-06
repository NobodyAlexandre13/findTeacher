import { StyleSheet } from "react-native";
import { themes } from "@/constants/theme";
import { View, TextInput } from "react-native";

interface InputProps {
    title: string;
    typeKeyboard?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    value?: string;
    textValueChange?: (text: string) => void;
    secure?: boolean;
}

export function Input({title, typeKeyboard, value, textValueChange, secure, ...rest}: InputProps) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputText}
                placeholder={title}
                {...rest}
                value={value}
                onChangeText={textValueChange}
                keyboardType={typeKeyboard}
                secureTextEntry={secure}
            />
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10,
  },

  inputText: {
    backgroundColor: themes.colors.surface,
    width: "100%",
    opacity: 0.9,
    borderRadius: 5,
    padding: 14,
  },
});
