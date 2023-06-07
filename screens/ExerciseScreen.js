import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Card, Image } from 'react-native-elements';

const ExerciseScreen = ({ navigation }) => {
  const exercises = [
    { id: 1, name: 'Pull Down', image: require('../assets/pull_down.jpeg'), screen: 'PullDown' },
    { id: 2, name: 'Machine Row', image: require('../assets/machine_row.jpg'), screen: 'MachineRow' },
    { id: 3, name: 'Hanging Leg Raises', image: require('../assets/hanging_leg_raises.jpg'), screen: 'HangingLegRaises' },
    { id: 5, name: 'Decline Bench Press', image: require('../assets/decline_bench_press.jpeg'), screen: 'DeclineBenchPress' },
  ];

  const navigateToExercise = (exercise) => {
    //perpindahan halaman sesuai di klik
    navigation.navigate(exercise.screen, { exercise });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.title}>Pilihlah Latihan Sesukamu</Text>
      {exercises.map((exercise) => (
        <TouchableOpacity
          key={exercise.id}
          onPress={() => navigateToExercise(exercise)}
          //on press untuk klik
        >
          <Card containerStyle={styles.cardContainer}>
            <Image source={exercise.image} style={styles.cardImage} />
            <Text style={styles.exerciseName}>{exercise.name}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
  },
  cardContainer: {
    width: '100%',
    marginBottom: 10,
  },
  cardImage: {
    height: 200,
    width: 300,
    resizeMode: 'cover',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
