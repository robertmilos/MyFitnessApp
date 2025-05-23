import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SessionsScreen from './SessionsScreen';
import StepsScreen from './StepsScreen';
import WeightScreen from './WeightScreen';
import BMIScreen from './BMIScreen';
import TimerScreen from './TimerScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#007AFF' }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitleStyle: {
        color: 'white'
      },
      title: 'Home'}}/>
      <Stack.Screen name="Sessions" component={SessionsScreen} options={{headerTitleStyle: {
        color: 'white'
      }}}/>
      <Stack.Screen name="Steps" component={StepsScreen} options={{headerTitleStyle: {
        color: 'white'
      }}}/>
      <Stack.Screen name="Weight" component={WeightScreen} options={{headerTitleStyle: {
        color: 'white'
      }}}/>
      <Stack.Screen name="BMI" component={BMIScreen} options={{headerTitleStyle: {
        color: 'white'
      }}}/>
      <Stack.Screen name="Timer" component={TimerScreen} options={{headerTitleStyle: {
        color: 'white'
      }}}/>
    </Stack.Navigator>
  );
}
