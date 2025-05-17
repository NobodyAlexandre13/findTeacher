import styled from "@emotion/native";
import { themes } from "../../global/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;
export const Header = styled.View`
    width: 100%;
    height: 120px;
    padding-top: 20px;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    background-color: ${themes.colors.backgroundSigLight};
`;
export const BackButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: -20px;
    margin-left: -20px;
`;
export const AreaForm = styled(SafeAreaView)`
    padding: 0 24px;
`;
export const AreaTitle = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin: 20px 0 10px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${themes.colors.surface};
    font-family: ${themes.fonts.medium};
    margin: 16px 0;
`;
export const AreaPhoneNumber = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
`;
export const AreaIndicator = styled.View`
    background-color: ${themes.colors.surface};
    opacity: 0.9;
    border-radius: 5px;
    padding: 14px;
    width: 25%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const AreaInputPhone = styled.View`
    width: 70%;
`;
export const Indicator = styled.Text`
    font-size: 16px;
    color: ${themes.colors.text};
    font-family: ${themes.fonts.bold};
`;
export const Select = styled(Picker)`
    background-color: ${themes.colors.surface};
    width: 100%;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 10px;
`;