import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const icon = require('../assets/heart.fill.png');


export default function WeightScreen() {
  const navigation = useNavigation();
  const [weights, setWeights] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [kilos, setKilos] = useState('');
  const [sortOption, setSortOption] = useState('None');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Weight</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const confirmAdd = () => {
    if (!kilos) return;

    const newEntry = {
      id: Date.now().toString(),
      weight: parseFloat(kilos),
    };

    setWeights([...weights, newEntry]);
    setKilos('');
    setShowModal(false);
  };

  const deleteEntry = (id) => {
    setWeights(weights.filter((w) => w.id !== id));
  };

  const sortedWeights = () => {
    switch (sortOption) {
      case 'Asc':
        return [...weights].sort((a, b) => a.weight - b.weight);
      case 'Desc':
        return [...weights].sort((a, b) => b.weight - a.weight);
      default:
        return weights;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlRow}>
        <TouchableOpacity
          onPress={() =>
            setSortOption((prev) =>
              prev === 'None' ? 'Asc' : prev === 'Asc' ? 'Desc' : 'None'
            )
          }
          style={styles.controlButton}
        >
          <Text style={styles.controlText}>Sort: {sortOption}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {sortedWeights().map((item) => (
          <View key={item.id} style={styles.weightItem}>
            <View style={styles.leftSide}>
              <Image source={icon} style={styles.icon}></Image>
              <Text style={styles.weightText}>{item.weight} kg</Text>
            </View>
            <TouchableOpacity onPress={() => deleteEntry(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Weight (kg)</Text>
            <TextInput
              value={kilos}
              onChangeText={setKilos}
              keyboardType="numeric"
              style={styles.input}
              placeholder="ex: 80"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.confirmButton} onPress={confirmAdd}>
              <Text style={styles.confirmButtonText}>Add</Text>
            </TouchableOpacity>
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
  weightItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1c1c1e',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weightText: {
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
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
