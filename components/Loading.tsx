import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

interface Props {
  color?: string;
  size?: number;
  spacing?: number;
}

export default function LoadingDots({
  color = "#4A90E2",
  size = 10,
  spacing = 8,
}: Props) {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  const animateDot = (dot: Animated.Value, delay: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: 1,
          duration: 500,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animateDot(dot1, 0);
    animateDot(dot2, 200);
    animateDot(dot3, 400);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.dot,
          { backgroundColor: color, width: size, height: size, marginHorizontal: spacing / 2 },
          { transform: [{ scale: dot1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          { backgroundColor: color, width: size, height: size, marginHorizontal: spacing / 2 },
          { transform: [{ scale: dot2 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          { backgroundColor: color, width: size, height: size, marginHorizontal: spacing / 2 },
          { transform: [{ scale: dot3 }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  dot: {
    borderRadius: 50,
  },
});
