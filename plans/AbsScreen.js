import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const absPlan = [
  { day: "Day 1", routine: "3 sets: 20 crunches, 15 leg raises, 30 sec plank" },
  { day: "Day 2", routine: "4 sets: 20 Russian twists, 20 mountain climbers" },
  { day: "Day 3", routine: "3 sets: 15 V-ups, 20 bicycles, 40 sec plank" },
  { day: "Day 4", routine: "Rest or light cardio (15 min walk)" },
  { day: "Day 5", routine: "5 sets: 20 crunches, 20 leg raises, 1 min plank" },
  { day: "Day 6", routine: "4 sets: 25 Russian twists, 25 mountain climbers" },
  { day: "Day 7", routine: "Challenge: 2 min plank + 50 crunches" },
];

export default function AbsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Abs Plan</Text>
      {absPlan.map((item, index) => (
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
    color: '#FF9500',
    fontWeight: '600',
    marginBottom: 5,
  },
  routine: {
    color: 'white',
    fontSize: 16,
  },
});
