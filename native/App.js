import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPressIn = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleButtonPressOut = () => {
    setActiveButton(null);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cityImagem.jpg')}
        style={styles.headerImage}
      />
      <View style={styles.headerLine} />
      <View style={styles.buttonRow}>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 1 && styles.activeButton,
          ]}
          activeOpacity={1}
          onPressIn={() => handleButtonPressIn(1)}
          onPressOut={handleButtonPressOut}
        >
          <Image source={require('./assets/cameraIcone1.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            <Text>CAMERA -</Text>{"\n"}
            Toque aqui para abrir a câmera
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 2 && styles.activeButton,
          ]}
          activeOpacity={1}
          onPressIn={() => handleButtonPressIn(2)}
          onPressOut={handleButtonPressOut}
        >
          <Image source={require('./assets/galeraIcone2.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            <Text>GALERIA -</Text>{"\n"}
            Toque aqui para ver suas fotos
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonRow}>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 3 && styles.activeButton,
          ]}
          activeOpacity={1}
          onPressIn={() => handleButtonPressIn(3)}
          onPressOut={handleButtonPressOut}
        >
          <Image source={require('./assets/telefoneIcone3.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            <Text>TELEFONE -</Text>{"\n"}
            Toque aqui para abrir o telefone
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 4 && styles.activeButton,
          ]}
          activeOpacity={1}
          onPressIn={() => handleButtonPressIn(4)}
          onPressOut={handleButtonPressOut}
        >
          <Image source={require('./assets/sosIcone4.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            <Text>SOS -</Text>{"\n"}
            Toque aqui para emergências
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F9EA5', // Definindo a cor de fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '90%', // Ocupa quase toda a largura da tela
    height: 200,   // Ajuste conforme necessário
    resizeMode: 'cover',
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  headerLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    width: 160,
    height: 170,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    transform: [{ scale: 0.9 }],
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center', // Alinhar o texto ao centro
  },
});

export default App;
