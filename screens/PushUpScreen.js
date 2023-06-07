import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const PushUpScreen = () => {
  const [pushUpCount, setPushUpCount] = useState(0);
  //untuk mengatur
  const [isExerciseInProgress, setIsExerciseInProgress] = useState(false);
  //function
  

  useEffect(() => {
    if (isExerciseInProgress) {
      // Logika untuk memulai timer atau menghitung push-up
      
    }
  }, [isExerciseInProgress]);

  const startExercise = () => {
    //untuk tombol start latihan dan memunculkan tombol tambah push-an dan jumlah push an
    //ketika di klik start latihan maka keluar 2 pilihan, yaitu tombol tambah start dan tombol tambah push-an & jumlah push an 
    setIsExerciseInProgress(true);
    //mengapa bernilai true karena ada kondisi dimana kondisinya sama true maka akan muncul tombol tambah push-an
    setPushUpCount(0);
    //untuk memulai dari awal 0
  };

  const handlePushUp = () => {
    //untuk tombol tambah push-up
    if (isExerciseInProgress) {
      setPushUpCount((prevCount) => prevCount + 1);
      //parameter yang mengikuti nilai sebelumnya
      //prevcount adalah nilai variabel dari pushupcount 
      //prevcount itu kayak nilai sebelumnya 0 menjadi 1 ketika dijumlahkan dan akan isi variabel pushupcount
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Push-up</Text>
      
      <Image source={require('../assets/pushup.jpg')} style={styles.image} />
      
      <Text style={styles.description}>
      Gerakan push up dilakukan dengan menaik-turunkan tubuh bagian atas dengan tangan, dengan sedikit sokongan dari pergelangan kaki.
      </Text>
      
      <TouchableOpacity style={styles.startButton} onPress={startExercise}>
        <Text style={styles.startButtonText}>Start Latihan</Text>
      </TouchableOpacity>
      
      {isExerciseInProgress && (
        <View>
          <Text style={styles.pushUpCount}>Jumlah Push-up: {pushUpCount}</Text>
          <TouchableOpacity style={styles.pushUpButton} onPress={handlePushUp}>
            <Text style={styles.pushUpButtonText}>Tambah Push-up</Text>
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
