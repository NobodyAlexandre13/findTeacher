import { Container, TextButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    title: string;
    colorBtn: string;
    colorText: string;
    border: string;
}

export function Button({
    title, 
    colorBtn, 
    colorText, 
    ...rest
}: Props){
    return(
        <Container colorBtn={colorBtn} {...rest}>
            <TextButton colorText={colorText}>
                {title}
            </TextButton>
        </Container>
    );
}