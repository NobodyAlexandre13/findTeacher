import { StatusBar } from "expo-status-bar";
import { Container, InputText } from "./style";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
    title: string;
}

export function Input({ title, ...rest } : Props){
    return(
        <Container>
            <StatusBar style="light"/>
            <InputText
                placeholder={title}
                {...rest}
            />
        </Container>
    );
}