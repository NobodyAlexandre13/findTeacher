import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';

interface AppProps {
  width: number;
  height: number;
  color: string;
  
}

export default function Loading({ width, height, color }: AppProps) {
  const translateX = useRef(new Animated.Value(width / 2 - 160)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -(width / 2 - 160),
          duration: 1750,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: width / 2 - 160,
          duration: 1750,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[
        {
          backgroundColor: color,
          height: height,
          width: width,
          borderRadius: 20,
        },
        styles.box, 
        { transform: [{ translateX }] }]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    borderRadius:'15%',
  },
});
