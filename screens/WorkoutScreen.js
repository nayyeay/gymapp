import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Card, Image } from 'react-native-elements';

const WorkoutScreen = ({ navigation }) => {
  const exercises = [
    { id: 1, name: 'Push-ups', image: require('../assets/pushup.jpg'), screen: 'PushUp' },
    { id: 2, name: 'Sit-ups', image: require('../assets/situps.jpg'), screen: 'SitUp' },
    { id: 3, name: 'Squats', image: require('../assets/squats.jpg'), screen: 'Squat' },
    { id: 4, name: 'Lunges', image: require('../assets/lunges.jpg'), screen: 'Lunge' },
    { id: 5, name: 'Plank', image: require('../assets/plank.jpg'), screen: 'Plank' },
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

export default WorkoutScreen;

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
