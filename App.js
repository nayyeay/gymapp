import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//untuk bagian home, exercise, workout dan bagian yang terdapat di dalam workout
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import PushUpScreen from './screens/PushUpScreen';
import SitUpScreen from './screens/SitUpScreen';
import PlankScreen from './screens/PlankScreen';
import SquatScreen from './screens/SquatScreen';
import LungeScreen from './screens/LungeScreen';

//untuk bagian di dalam exercise
import PullDownScreen from './screens/PullDownScreen';
import MachineRowScreen from './screens/MachineRowScreen';
import HangingLegRaisesScreen from './screens/HangingLegRaisesScreen';
import DeclineBenchPressScreen from './screens/DeclineBenchPressScreen';

//pertama
//buat nampilin layar, pindah halaman
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Exercise: ExerciseScreen,
    Workout: WorkoutScreen,
    //untuk bagian Workout
    PushUp: PushUpScreen,
    SitUp: SitUpScreen,
    Plank: PlankScreen,
    Squat: SquatScreen,
    Lunge: LungeScreen,

    //untuk bagian Exercise
    PullDown: PullDownScreen,
    MachineRow: MachineRowScreen,
    HangingLegRaises: HangingLegRaisesScreen,
    DeclineBenchPress: DeclineBenchPressScreen,
 
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
