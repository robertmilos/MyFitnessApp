import React from 'react';
import { StyleSheet, ScrollView, StatusBar,Image, TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PlansScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.title}>Training Plans</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Easy')}
      >
        <ImageBackground
          source={require('../assets/easy.jpg')}
          style={styles.background}
          imageStyle={styles.imageborder}
        >
          <View style={styles.overlay}>
            <View style={styles.top}>
            <Text style={styles.text}>Easy</Text>
            <Image source={require('../assets/chevron.forward.png')}></Image>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Medium')}
      >
        <ImageBackground
          source={require('../assets/medium.jpg')}
          style={styles.background}
          imageStyle={styles.imageborder}
        >
          <View style={styles.overlay}>
            <View style={styles.top}>
            <Text style={styles.text}>Medium</Text>
            <Image source={require('../assets/chevron.forward.png')}></Image>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Hard')}
      >
        <ImageBackground
          source={require('../assets/hard.jpg')}
          style={styles.background}
          imageStyle={styles.imageborder}
        >
          <View style={styles.overlay}>
            <View style={styles.top}>
            <Text style={styles.text}>Hard</Text>
            <Image source={require('../assets/chevron.forward.png')}></Image>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pushups')}
      >
        <ImageBackground
          source={require('../assets/pushup.jpg')}
          style={styles.background}
          imageStyle={styles.imageborder}
        >
          <View style={styles.overlay}>
            <View style={styles.top}>
            <Text style={styles.text}>Push-ups</Text>
            <Image source={require('../assets/chevron.forward.png')}></Image>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Abs')}
      >
        <ImageBackground
          source={require('../assets/abs.jpg')}
          style={styles.background}
          imageStyle={styles.imageborder}
        >
          <View style={styles.overlay}>
            <View style={styles.top}>
            <Text style={styles.text}>Abs</Text>
            <Image source={require('../assets/chevron.forward.png')}></Image>
            </View>
          </View>
        </ImageBackground>
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
  background: {
    width: '100%',
    marginTop: 20
  },
  imageborder: {
    borderRadius: 20
  },
  overlay: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 250,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginLeft: 20,
    marginRight: 5,
  },
  top: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: '#888'
  }
});
