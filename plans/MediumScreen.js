import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const trainingPlan = [
  { day: "Monday", activity: "30 min jog + stretching" },
  { day: "Tuesday", activity: "Bodyweight circuit: 3x12 squats, lunges, pushups" },
  { day: "Wednesday", activity: "Rest or active recovery (light yoga)" },
  { day: "Thursday", activity: "20 min HIIT (jog/run intervals)" },
  { day: "Friday", activity: "Core workout: 3x15 crunches, planks, leg raises" },
  { day: "Saturday", activity: "Outdoor walk/hike for 45 min" },
  { day: "Sunday", activity: "Stretch + meditation (15 min)" },
];

export default function MediumScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Medium Training Plan</Text>
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
    color: '#FFD60A',
    fontWeight: '600',
    marginBottom: 5,
  },
  activity: {
    color: 'white',
    fontSize: 16,
  },
});
