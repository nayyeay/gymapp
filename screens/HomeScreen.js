import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text h1 style={styles.title}>GymPro App</Text>
        <Button
          title="Demo"
          onPress={() => navigation.navigate('Exercise')}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        <Button
          title="Workout"
          onPress={() => navigation.navigate('Workout')}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#C0C0C0',
    borderRadius: 8,
  },
});


