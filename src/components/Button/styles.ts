import styled from "@emotion/native";
import { themes } from "../../global/themes";

interface Props{
    colorBtn: string;
    border: string;
}
interface TextProps{
    colorText: string;
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    background-color: ${({ colorBtn }: Props) => colorBtn};
    border-radius: 5px;
    padding: 14px;
    margin-top: 10px;
    border: ${({ border }: Props) => border};
`;
export const TextButton = styled.Text<TextProps>`
    font-size: 18px;
    color: ${({colorText}: TextProps) => colorText};
    font-family: ${themes.fonts.medium};
    text-align: center;
`;