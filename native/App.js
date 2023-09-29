import React from "react";
import { View, Image, StyleSheet, Alert, Linking } from "react-native";
import HomeButton from "./components/button/HomeButton";
import * as ImagePicker from "expo-image-picker";
import { launchCamera } from "react-native-image-picker";

const App = () => {



  const captureImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status === "granted") {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          saveToPhotos: true,
        });

        if (!result.cancelled) {
          // The image was captured successfully
          console.log("Image captured:", result.uri);
        }
      } else {
        console.log("Permissão negada");
        Alert.alert(
          `Camera permission ${status}`,
          "O Senior Launcher precisa da sua permissão para abrir sua câmera. Por favor, tente novamente.",
          [
            {
              text: "Settings",
              onPress: () => Linking.openSettings(),
            },
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {},
            },
          ],
          {
            cancelable: false,
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cityImagem.jpg")}
        style={styles.headerImage}
      />
      <View style={styles.headerLine} />
      <View style={styles.buttonRow}>
      
        <HomeButton
          imgUrl={require("./assets/cameraIcone1.png")}
          title="CAMERA -"
          desc="Toque aqui para abrir a câmera "
          action={captureImage}
        />
        <HomeButton
          imgUrl={require("./assets/galeraIcone2.png")}
          title="GALERIA -"
          desc=" Toque aqui para ver suas fotos"
        />
      </View>

      <View style={styles.buttonRow}>
        <HomeButton
          imgUrl={require("./assets/telefoneIcone3.png")}
          title="TELEFONE -"
          desc="   Toque aqui para abrir o telefone"
        />
        <HomeButton
          imgUrl={require("./assets/sosIcone4.png")}
          title="SOS -"
          desc=" aqui para emergências"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8F9EA5", // Definindo a cor de fundo
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "90%", // Ocupa quase toda a largura da tela
    height: 200, // Ajuste conforme necessário
    resizeMode: "cover",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  headerLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: "row",
  },
});

export default App;
