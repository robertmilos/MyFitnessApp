import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h || h === 0) return;

    const bmiValue = w / (h * h);
    setBMI(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Normal weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        placeholder="Weight (kg)"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        placeholder="Height (cm)"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.resultBox}>
          <Text style={styles.bmiText}>Your BMI: {bmi}</Text>
          <Text style={styles.categoryText}>Category: {category}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    alignItems: 'center',
  },
  bmiText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  categoryText: {
    fontSize: 18,
    color: '#aaa',
    marginTop: 10,
  },
});
