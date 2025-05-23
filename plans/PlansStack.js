import { createStackNavigator } from '@react-navigation/stack';

import PlansScreen from './PlansScreen';
import EasyScreen from './EasyScreen';
import MediumScreen from './MediumScreen';
import HardScreen from './HardScreen';
import PushupsScreen from './PushupsScreen';
import AbsScreen from './AbsScreen'

const Stack = createStackNavigator();

export default function PlansStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#007AFF' }}
    >
      <Stack.Screen name="PlansScreen" component={PlansScreen} options={{
        headerTitleStyle: {
          color: 'white'
        },
        title: 'Plans'
      }} />
      <Stack.Screen name="Easy" component={EasyScreen} options={{
        headerTitleStyle: {
          color: 'white'
        }
      }} />
      <Stack.Screen name="Medium" component={MediumScreen} options={{
        headerTitleStyle: {
          color: 'white'
        }
      }} />
      <Stack.Screen name="Hard" component={HardScreen} options={{
        headerTitleStyle: {
          color: 'white'
        }
      }} />
      <Stack.Screen name="Pushups" component={PushupsScreen} options={{
        headerTitleStyle: {
          color: 'white'
        }
      }} />
      <Stack.Screen name="Abs" component={AbsScreen} options={{
        headerTitleStyle: {
          color: 'white'
        }
      }} />
    </Stack.Navigator>
  );
}