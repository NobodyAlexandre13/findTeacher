import styled from "styled-components/native";
import { themes } from "../../global/themes";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${themes.colors.surface};
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 14px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  margin-right: 12px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${themes.colors.text};
  font-family: ${themes.fonts.bold};
`;

export const Subject = styled.Text`
  font-size: 14px;
  color: ${themes.colors.text};
  font-family: ${themes.fonts.regular};
`;

export const Bio = styled.Text`
  font-size: 13px;
  color: ${themes.colors.placeholder};
  font-family: ${themes.fonts.regular};
  margin-top: 4px;
`;

export const ContactButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${themes.colors.primary};
  padding: 6px 10px;
  border-radius: 4px;
  align-items: center;
  margin-top: 8px;
  align-self: flex-start;
`;

export const ContactText = styled.Text`
  color: ${themes.colors.surface};
  margin-left: 6px;
  font-size: 14px;
`;