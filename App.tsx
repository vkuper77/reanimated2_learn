import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Introduction from './src/Screens/Introduction';
import Plate from './src/Components/UI/Plate';
import Interpolate from './src/Screens/Interpolate';

const examples = [
  {
    title: 'Introduction',
    icon: '✈️',
    screen: <Introduction />,
  },
  {
    title: 'Interpolate',
    icon: '🌈',
    screen: <Interpolate />,
  },
];

const HomeScreen = () => (
  <View>
    {examples.map(item => (
      <Plate {...item} />
    ))}
  </View>
);

const DetailsScreen = ({route}: any) => route.params.screen;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Learn Reanimated 2'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route: {params}}: any) => ({title: params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
