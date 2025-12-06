import { StyleSheet } from "react-native";
import { themes } from "@/constants/theme";

export const stylesprof = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: themes.colors.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  areaForm: {
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 18,
    color: themes.colors.primary,
    fontFamily: themes.fonts.medium,
    marginVertical: 16,
    textAlign: "center",
  },

  areaPhoneNumber: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },

  areaIndicator: {
    backgroundColor: themes.colors.surface,
    opacity: 0.9,
    borderRadius: 5,
    padding: 14,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  areaInputPhone: {
    width: "70%",
  },

  indicatorText: {
    fontSize: 16,
    color: themes.colors.text,
    fontFamily: themes.fonts.bold,
  },

  card: {
    backgroundColor: themes.colors.surface,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
  },
  typeSelector: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  typeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themes.colors.primary,
  },
  typeButtonActive: {
    backgroundColor: themes.colors.primary,
    borderColor: themes.colors.primary,
  },
  typeButtonText: {
    color: themes.colors.primary,
    fontSize: 16,
    fontWeight: "500",
  },
  typeButtonTextActive: {
    color: themes.colors.surface,
  },

  text: {
    color: themes.colors.primary,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  
  areaDisciplina: {
    width: "100%",
    backgroundColor: themes.colors.surface,
    borderRadius: 5,
    padding: 16,
    marginTop: 10,
  },

  areaDisciplinaTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },

  disciplinaTitle: {
    backgroundColor: themes.colors.background,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    fontSize: 12,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: themes.colors.primary,
  },

  removeDisciplina: {
    paddingLeft: 6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  areaInputDisciplina: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  areaInputDisciplinaText: {
    width: "78%",
  },

  addBtnAddDisciplina: {
    width: "18%",
  },
  areaIpunt: {
    width: "70%"
  },
  areaBtn: {
    marginBottom: 16,
  }
});

