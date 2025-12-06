import { stylesprof } from '@/styles/styles.signup';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { themes } from '@/constants/theme';
import { useGenero } from '@/contexts/genero';

export default function CardGenero() {

  const { genero, setGenero } = useGenero();

  return (
    <View>
      <View style={stylesprof.card}>
        <Text style={stylesprof.text}>Genero:</Text>
        <View style={stylesprof.typeSelector}>
          <TouchableOpacity
            style={[stylesprof.typeButton, genero === "Masculino" && stylesprof.typeButtonActive]}
            onPress={() => setGenero("Masculino")}
          >
            <Text style={[stylesprof.typeButtonText, genero === "Masculino" && stylesprof.typeButtonTextActive]}>
              Masculino
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[stylesprof.typeButton, genero === "Femenino" && stylesprof.typeButtonActive]}
            onPress={() => setGenero("Femenino")}
          >
            <Text style={[stylesprof.typeButtonText, genero === "Femenino" && stylesprof.typeButtonTextActive]}>
              Femenino
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    backgroundColor: themes.colors.surface,
    marginTop: 10,
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
  }
});

