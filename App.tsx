import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
    padding: 20,
  },
  teksBesar: {
    fontWeight: '500',
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  teksKecil: {
    fontSize: 17,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  teksButton: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#abdfff',
    padding: 10,
    width: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
});

const App = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/1200x/2e/86/c0/2e86c01458860984ff69b00df1b29a7e.jpg',
      }}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.teksBesar}>Petualangan Mu Dimulai Dari Sini</Text>
        <Text style={styles.teksKecil}>
          Mari bersama kami Eskplor Labuan Bajo
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.teksButton}>Daftarkan Dirimu Disini</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default App;
