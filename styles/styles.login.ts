import { StyleSheet } from "react-native";
import { themes } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.backgroundSig,
    width: "100%",
  },

  back: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  areaLogo: {
    paddingTop: 80,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontFamily: themes.fonts.medium,
    color: themes.colors.surface,
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
  },

   textForget: {
    fontSize: 18,
    fontFamily: themes.fonts.medium,
    color: themes.colors.surface,
    textAlign: "center",
  },

  text: {
    fontSize: 13,
    fontFamily: themes.fonts.medium,
    color: themes.colors.surface,
    marginTop: -33,
    textAlign: "center",
  },

  textError: {
    fontSize: 14,
    color: themes.colors.error,
    fontFamily: themes.fonts.bold,
    marginBottom: 5,
  },

  areaForm: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  resetPass: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
  },

  areaBtnLogin: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  btnResetPass: {
    // estava vazio no styled, deixei vazio
  },

  textBtnRestPass: {
    fontSize: 16,
    color: themes.colors.surface,
    fontFamily: themes.fonts.bold,
    textAlign: "right",
  },

  areaSingUp: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  textSingUp: {
    fontSize: 16,
    color: themes.colors.surface,
    fontFamily: themes.fonts.bold,
    textAlign: "center",
  },
  areaModal: {
    width: '100%',
    height: '74%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});