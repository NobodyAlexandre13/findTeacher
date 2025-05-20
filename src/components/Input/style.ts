import styled from "styled-components/native";
import { themes } from '../../global/themes';

export const Container = styled.View`
    width: 100%;
    padding-top: 10px;
`
export const InputText = styled.TextInput`
    background-color: ${themes.colors.surface};
    width: 100%;
    opacity: 0.9;
    border-radius: 5px;
    padding: 14px;
`