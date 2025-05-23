import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const pushupPlan = [
  { day: "Day 1", routine: "3 sets of 10 push-ups" },
  { day: "Day 2", routine: "4 sets of 12 push-ups" },
  { day: "Day 3", routine: "5 sets of 15 push-ups" },
  { day: "Day 4", routine: "Rest or light stretching" },
  { day: "Day 5", routine: "4 sets of 20 push-ups" },
  { day: "Day 6", routine: "5 sets of 25 push-ups" },
  { day: "Day 7", routine: "Challenge: Max reps in 2 minutes" },
];

export default function PushupsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Push-ups Plan</Text>
      {pushupPlan.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.routine}>{item.routine}</Text>
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
    color: '#34C759',
    fontWeight: '600',
    marginBottom: 5,
  },
  routine: {
    color: 'white',
    fontSize: 16,
  },
});
