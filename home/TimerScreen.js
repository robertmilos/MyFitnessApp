import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}.${String(milliseconds).padStart(2, '0')}`;
};

export default function TimerScreen() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const start = () => {
    const startTime = Date.now() - time;
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 30);
    setRunning(true);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const lap = () => {
    setLaps([time, ...laps]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={lap}
          disabled={!running}
          style={[styles.button, { backgroundColor: running ? '#444' : '#222' }]}
        >
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={running ? stop : start}
          style={[
            styles.button,
            { backgroundColor: running ? '#FF3B30' : '#30D158' },
          ]}
        >
          <Text style={styles.buttonText}>{running ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
          disabled={time === 0}
          style={[styles.button, { backgroundColor: time ? '#444' : '#222' }]}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.lapList}>
        {laps.map((lapTime, index) => (
          <Text key={index} style={styles.lapText}>
            Lap {laps.length - index}: {formatTime(lapTime)}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 100,
  },
  timerText: {
    fontSize: 70,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    fontVariant: ['tabular-nums'],
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  lapList: {
    marginTop: 10,
  },
  lapText: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 6,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
});
