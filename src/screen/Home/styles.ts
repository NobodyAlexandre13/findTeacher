import styled from "styled-components/native";
import { themes } from "../../global/themes";

export const Container = styled.View`
    flex: 1;
    background-color: ${themes.colors.background};
`;
export const Header = styled.View`
    width: 100%;
    padding: 24px;
    background-color: ${themes.colors.backgroundSig};
    justify-content: center;
    align-items: center;
`;
export const AreaSearch = styled.View`
    flex-direction: row;
    margin-top: 10px;
    gap: 10%;
    align-items: center;
`;
export const AreaInput = styled.View`
    width: 70%;
`;
export const AreaBtnSerch = styled.View`
    width: 20%;
    margin-top: 10px;
`;

export const BtnSerch = styled.TouchableOpacity`
    padding: 12px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const AreaProf = styled.View`
    padding: 10px 24px;
`;

export const AreaModal = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.3); 
    justify-content: center;
    align-items: center;
    padding: 0 18px;
`;
export const AreaTextModal = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TitleModal = styled.Text`
    font-size: 14px;
    color: ${themes.colors.text};
    font-family: ${themes.fonts.medium};
    text-transform: uppercase;
`;

export const SubTitleModal = styled.Text`
    font-size: 14px;
    color: ${themes.colors.text};
    font-family: ${themes.fonts.regular};
`;

export const FormModal = styled.View`
    background-color: ${themes.colors.background};
    border-radius: 5px;
    width: 100%;
    padding: 20px;
`;