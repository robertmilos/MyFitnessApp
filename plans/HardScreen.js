import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const trainingPlan = [
  { day: "Monday", activity: "45 min run + 3x15 pushups" },
  { day: "Tuesday", activity: "Strength: 3x12 burpees, jump squats, plank holds" },
  { day: "Wednesday", activity: "Core: 4x20 crunches, leg raises, planks (1 min)" },
  { day: "Thursday", activity: "HIIT: 30 min sprint intervals + cooldown" },
  { day: "Friday", activity: "Full body circuit: 3 rounds of bodyweight workout" },
  { day: "Saturday", activity: "Outdoor challenge: hike, bike, or stairs (60 min)" },
  { day: "Sunday", activity: "Yoga, mobility & deep stretch (30 min)" },
];

export default function HardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Hard Training Plan</Text>
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
    color: '#FF453A',
    fontWeight: '600',
    marginBottom: 5,
  },
  activity: {
    color: 'white',
    fontSize: 16,
  },
});
