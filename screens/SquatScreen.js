import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const PushUpScreen = () => {
  const [pushUpCount, setPushUpCount] = useState(0);
  const [isExerciseInProgress, setIsExerciseInProgress] = useState(false);

  useEffect(() => {
    if (isExerciseInProgress) {
      // Logika untuk memulai timer atau menghitung push-up
    }
  }, [isExerciseInProgress]);

  const startExercise = () => {
    setIsExerciseInProgress(true);
    setPushUpCount(0);
  };

  const handlePushUp = () => {
    if (isExerciseInProgress) {
      setPushUpCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Squats</Text>
      
      <Image source={require('../assets/squats.jpg')} style={styles.image} />
      
      <Text style={styles.description}>
      Squat merupakan gerakan olahraga yang dapat membantu mengencangkan otot tubuh, termasuk betis, kaki, pantat, dan paha bagian dalam.
      </Text>
      
      <TouchableOpacity style={styles.startButton} onPress={startExercise}>
        <Text style={styles.startButtonText}>Start Latihan</Text>
      </TouchableOpacity>
      
      {isExerciseInProgress && (
        <View>
          <Text style={styles.pushUpCount}>Jumlah Squats: {pushUpCount}</Text>
          <TouchableOpacity style={styles.pushUpButton} onPress={handlePushUp}>
            <Text style={styles.pushUpButtonText}>Tambah Squats</Text>
          </TouchableOpacity> 
        </View>
      )}
    </View>
  );
};

export default PushUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pushUpCount: {
    fontSize: 18,
    marginBottom: 10,
    marginStart: 5,
  },
  pushUpButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  pushUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
