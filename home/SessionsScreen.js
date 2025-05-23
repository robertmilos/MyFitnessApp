import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const trainingIcons = {
  Running: require('../assets/figure.run.png'),
  Cycling: require('../assets/figure.outdoor.cycle.png'),
  Swimming: require('../assets/figure.pool.swim.png'),
  Yoga: require('../assets/figure.yoga.png'),
  Strength: require('../assets/figure.strengthtraining.traditional.png'),
};

export default function SessionsScreen() {
  const navigation = useNavigation();
  const [trainings, setTrainings] = useState([]);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [duration, setDuration] = useState('');
  const [sortOption, setSortOption] = useState('None');

  const trainingTypes = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Strength'];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Data</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleAddTraining = (type) => {
    setSelectedType(type);
    setShowModal(false);
  };

  const confirmAdd = () => {
    if (!duration) return;

    const newTraining = {
      id: Date.now().toString(),
      type: selectedType,
      duration: parseInt(duration),
    };

    const timestamp = new Date().toLocaleTimeString();
    setTrainings([...trainings, newTraining]);
    setHistory([...history, `${selectedType} session has been added at ${timestamp}`]);
    setDuration('');
    setSelectedType(null);
  };

  const deleteTraining = (id) => {
    setTrainings(trainings.filter((t) => t.id !== id));
  };

  const sortedTrainings = () => {
    switch (sortOption) {
      case 'Duration':
        return [...trainings].sort((a, b) => b.duration - a.duration);
      case 'Type':
        return [...trainings].sort((a, b) => a.type.localeCompare(b.type));
      default:
        return trainings;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlRow}>
        <TouchableOpacity
          onPress={() =>
            setSortOption((prev) =>
              prev === 'None' ? 'Duration' : prev === 'Duration' ? 'Type' : 'None'
            )
          }
          style={styles.controlButton}
        >
          <Text style={styles.controlText}>Sort: {sortOption}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowHistory(true)} style={styles.controlButton}>
          <Text style={styles.controlText}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {sortedTrainings().map((item) => (
          <View key={item.id} style={styles.trainingItem}>
            <View style={styles.leftSide}>
              <Image source={trainingIcons[item.type]} style={styles.trainingIcon} />
              <Text style={styles.trainingText}>
                {item.type} – {item.duration} min
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteTraining(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Modal visible={showModal || !!selectedType} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {!selectedType ? (
              <>
                <Text style={styles.modalTitle}>Choose Training</Text>
                {trainingTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    onPress={() => handleAddTraining(type)}
                    style={styles.modalOption}
                  >
                    <View style={styles.iconRow}>
                      <Image source={trainingIcons[type]} style={styles.modalIcon} />
                      <Text style={styles.modalOptionText}>{type}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Enter Duration (min)</Text>
                <TextInput
                  value={duration}
                  onChangeText={setDuration}
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="ex: 30"
                  placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.confirmButton} onPress={confirmAdd}>
                  <Text style={styles.confirmButtonText}>Add</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <Modal visible={showHistory} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>History</Text>
            <ScrollView style={{ maxHeight: 200 }}>
              {history.map((msg, idx) => (
                <Text key={idx} style={styles.historyText}>
                  {msg}
                </Text>
              ))}
            </ScrollView>
            <View style={styles.historyButtons}>
              <TouchableOpacity onPress={() => setShowHistory(false)}>
                <Text style={styles.cancelText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHistory([])}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  addButton: {
    marginRight: 15,
    padding: 8,
  },
  addButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  controlRow: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  controlButton: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  controlText: {
    color: 'white',
  },
  trainingItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1c1c1e',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trainingIcon: {
    marginRight: 10,
  },
  trainingText: {
    color: 'white',
    fontSize: 18,
  },
  deleteButton: {
    padding: 6,
  },
  deleteButtonText: {
    color: '#ff3b30',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1c1c1c',
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  modalOptionText: {
    color: 'white',
    fontSize: 18,
  },
  modalIcon: {
    marginRight: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  historyText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  historyButtons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: '#007AFF',
  },
  clearText: {
    color: '#ff3b30',
  },
});
