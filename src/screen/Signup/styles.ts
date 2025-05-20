import styled from "styled-components/native";
import { themes } from "../../global/themes";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${themes.colors.backgroundSig};
    width: 100%;
`;

export const Back = styled.ImageBackground`
    width: 100%;
    flex: 1;
`;
export const TextInit = styled.Text`
    font-size: 18px;
    color: ${themes.colors.background};
    text-align: center;
    text-transform: uppercase;
`;
export const AreaLogo = styled.View`
    padding-top: 45%;
    justify-content: center;
    align-items: center;
`;

export const AreaBtnSwich = styled.View`
    background-color: ${themes.colors.primary};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 24px;
    margin-top: auto;
    opacity: 0.8;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${themes.colors.background};
    font-family: ${themes.fonts.medium};
    margin: 16px 0;
`;

export const ButtonSwich = styled.TouchableOpacity`
    padding: 16px 24px;
    border: 2px solid ${themes.colors.backgroundSigLight};
    flex-direction: row;
    margin-bottom: 10px;
    border-radius: 8px;
    justify-content: space-between;
`;
export const TextButtonSwich = styled.Text`
    color: ${themes.colors.backgroundSigLight};
    font-size: 16px;
    font-family: ${themes.fonts.medium};
`;

export const BackButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin: 14px 0;
`;

export const TextBackButton = styled.Text`
    font-size: 14px;
    color: ${themes.colors.surface};
    font-family: ${themes.fonts.medium};
`;

export const AreaModal = styled.View`
    flex: 1;
    background-color: ${themes.colors.backgroundSig};
    justify-content: center;
    align-items: center;
`;