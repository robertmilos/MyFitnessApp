import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.title}>MyFitnessApp</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sessions')}>
        <View style={styles.optioncontainer}>
          <Image source={require('../assets/figure.run.png')}></Image>
          <Text style={styles.optiontext}>Sessions</Text>
          <Image source={require('../assets/chevron.forward.png')} style={styles.chevron}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Steps')}>
        <View style={styles.optioncontainer}>
          <Image source={require('../assets/flame.fill.png')}></Image>
          <Text style={styles.optiontext}>Steps</Text>
          <Image source={require('../assets/chevron.forward.png')} style={styles.chevron}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Weight')}>
        <View style={styles.optioncontainer}>
          <Image source={require('../assets/figure.png')}></Image>
          <Text style={styles.optiontext}>Weight</Text>
          <Image source={require('../assets/chevron.forward.png')} style={styles.chevron}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BMI')}>
        <View style={styles.optioncontainer}>
          <Image source={require('../assets/heart.fill.png')}></Image>
          <Text style={styles.optiontext}>BMI</Text>
          <Image source={require('../assets/chevron.forward.png')} style={styles.chevron}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
        <View style={styles.optioncontainer}>
          <Image source={require('../assets/timer.png')}></Image>
          <Text style={styles.optiontext}>Timer</Text>
          <Image source={require('../assets/chevron.forward.png')} style={styles.chevron}></Image>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
  },
  optioncontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    marginTop: 20,
    padding: 20
  },
  optiontext: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
  },
  chevron: {
    position: 'absolute',
    right: 20
  }
});
