import styled from "@emotion/native";
import { themes } from "../../global/themes";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
    flex: 1;
    background-color: ${themes.colors.backgroundSig};
    width: 100%;
`;

export const Back = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex: 1;
`;

export const AreaLogo = styled.View`
    padding-bottom: 10px;
    padding-top: 80px;
    padding-bottom: 40px;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 18px;
    font-family: ${themes.fonts.medium};
    color: ${themes.colors.surface};
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
`;
export const TextError = styled.Text`
    font-size: 14px;
    color: ${themes.colors.error};
    font-family: ${themes.fonts.bold};
    margin-bottom: 5px;
`;
export const AreaForm = styled.View`
    width: 100%;
    padding: 10px 24px;
`;
export const ResetPass = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: end;
    width: 100%;
`;
export const AreaBtnLogin = styled.View`
    margin: 20px 0;
    justify-content: center;
    align-items: center;
`;

export const BtnResetPass = styled.TouchableOpacity`
`; 
export const TextBtnRestPass = styled.Text`
    font-size: 16px;
    color: ${themes.colors.surface};
    font-family: ${themes.fonts.bold};
    text-align: right;
`;

export const AreaSingUp = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    margin-top: 20px;
`;
export const TextSingUp = styled.Text`
    font-size: 16px;
    color: ${themes.colors.surface};
    font-family: ${themes.fonts.bold};
    text-align: center;
`;