import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const DeclineBenchPressScreen = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [countdownTime, setCountdownTime] = useState(''); // State untuk menyimpan waktu countdown yang diinputkan

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      //function untuk mengurangi nilai dari timernya
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          //set timer = atur waktu dari 0
          if (prevTimer === 0) {
            //jika nilai nya sama sama 0 maka akan berhenti
            setIsTimerRunning(false);
            clearInterval(intervalId);
          }
          return prevTimer - 1;
          //nilai sebelumnya dari variabel timer dikurang 1
        });
      }, 1000); //untuk memberi jeda perulangan dari awal 1 detik
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  const startExercise = () => {
    const countdownInSeconds = parseInt(countdownTime, 10); // Mengkonversi waktu countdown menjadi integer
    if (isNaN(countdownInSeconds) || countdownInSeconds <= 0) {
      alert('Please enter a valid countdown time');
      return;
    }

    setIsTimerRunning(true);
    setTimer(countdownInSeconds);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Decline Bench Press</Text>

      <Image source={require('../assets/decline_bench_press.jpeg')} style={styles.image} />

      <Text style={styles.description}>
      Latihan ini difokuskan untuk memberi tekanan pada otot dada bagian bawah atau sternal portion sehingga otot dada terlihat lebih tebal dan tampak penuh.
      </Text>

      <Text style={styles.timer}>Waktu: {timer} Detik</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukan Waktu (dalam detik)"
        onChangeText={(text) => setCountdownTime(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.startButton} onPress={startExercise}>
        <Text style={styles.startButtonText}>Start Latihan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeclineBenchPressScreen;

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
  timer: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

