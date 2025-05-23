import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const trainingPlan = [
  { day: "Monday", activity: "20 min walk + light stretching" },
  { day: "Tuesday", activity: "Rest or yoga (15 min)" },
  { day: "Wednesday", activity: "15 min jog or bike" },
  { day: "Thursday", activity: "Bodyweight exercises: 2x10 squats, pushups, crunches" },
  { day: "Friday", activity: "Rest or light walk (15 min)" },
  { day: "Saturday", activity: "20 min walk + stretching" },
  { day: "Sunday", activity: "Optional: meditation or rest" },
];

export default function EasyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Easy Training Plan</Text>
      {trainingPlan.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.activity}>{item.activity}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  day: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 5,
  },
  activity: {
    color: 'white',
    fontSize: 16,
  },
});
