import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const radius = 90;
const strokeWidth = 20;
const circumference = 2 * Math.PI * radius;
const maxSteps = 6500;

export default function StepsScreen() {
  const navigation = useNavigation();
  const [steps, setSteps] = useState(0);
  const progress = Math.min(steps / maxSteps, 1);
  const strokeDashoffset = circumference * (1 - progress);

  const addSteps = () => {
    setSteps(prev => Math.min(prev + 100, maxSteps));
  };

  const resetSteps = () => {
    setSteps(0);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.resetButton} onPress={resetSteps} activeOpacity={0.6}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Svg height={radius * 2 + strokeWidth * 2} width={radius * 2 + strokeWidth * 2}>
        <Defs>
          <LinearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#FD3A69" />
            <Stop offset="100%" stopColor="#FF7E5F" />
          </LinearGradient>
          <LinearGradient id="shadowGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#FD3A69" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#FF7E5F" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius + 3}
          stroke="url(#shadowGradient)"
          strokeWidth={strokeWidth / 2}
          fill="none"
          strokeLinecap="round"
        />

        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke="#1c1c1e"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          originX={radius + strokeWidth}
          originY={radius + strokeWidth}
        />

        <Text
          style={[styles.stepsText, {
            position: 'absolute',
            top: radius + strokeWidth - 20,
            left: radius + strokeWidth - 50,
            width: 100,
            textAlign: 'center',
          }]}
        >
          {steps}
        </Text>
      </Svg>

      <TouchableOpacity style={styles.button} onPress={addSteps} activeOpacity={0.6}>
        <Text style={styles.buttonText}>Add 100 Steps</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetButton: {
    marginRight: 15,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  resetButtonText: {
    color: '#ff3b30',
    fontSize: 16,
  },
});
