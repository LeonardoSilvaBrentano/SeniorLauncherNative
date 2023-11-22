import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Alert, Linking, Button, Text } from "react-native";
import HomeButton from "./components/button/HomeButton";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibraryAsync } from "expo-image-picker";


const App = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const [imageSource, setImageSource] = useState(null); 
  
  const openGallery = async () => {   
    try {     
      const result = await ImagePicker.launchImageLibraryAsync(
        {       
          mediaTypes: ImagePicker.MediaTypeOptions.Images,       
          quality: 1    
        });
             if (!result.cancelled) { 
                    setImageSource({ uri: result.uri });     }   
            } catch (e) {     
              console.log(e);   } };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const captureImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status === "granted") {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          saveToPhotos: true,
        });

        console.log(result);

        if (!result.cancelled) {
          console.log("Image captured:", result.uri);
          setCapturedImage(result.uri);
        }
      } else {
        console.log("Permission denied");
        Alert.alert(
          `Camera permission ${status}`,
          "The Senior Launcher needs your permission to access your camera. Please try again.",
          [
            {
              text: "Settings",
              onPress: () => Linking.openSettings(),
            },
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => { },
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
  };



  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <View style={styles.clockBackground}>
          <Text style={styles.clock}>{currentTime}</Text>
        </View>
      </View>
{/* 
      <Image
        source={require("./assets/cityImagem.jpg")}
        style={styles.headerImage}
      /> */}
      <View style={styles.headerLine} />

      {capturedImage && (
        <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
      )}

      <View style={styles.buttonRow}>
        <HomeButton
          imgUrl={require("./assets/cameraIcone1.png")}
          title="CAMERA -"
          desc="Toque aqui para abrir a câmera"
          action={captureImage}
        />

        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>       */}
        <HomeButton
        imgUrl={require("./assets/galeraIcone2.png")}
        title="GALERIA -"
        desc="Toque aqui para abrir a galeria"
        action={openGallery} />      
        {imageSource && (<View>          
          <Image source={imageSource} style={{ width: 2, height: 2 }} />        
          </View>)}
        {/* <HomeButton
          imgUrl={require("./assets/galeraIcone2.png")}
          // title="GALERIA -"
          title="Open Gallery" onPress={openGallery}
          desc="Toque aqui para ver suas fotos"
        /> */}
      </View>

      <View style={styles.buttonRow}>
        <HomeButton
          imgUrl={require("./assets/telefoneIcone3.png")}
          title="TELEFONE -"
          desc="Toque aqui para abrir o telefone"
        />
        <HomeButton
          imgUrl={require("./assets/sosIcone4.png")}
          title="SOS -"
          desc="Emergências"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8F9EA5",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "90%",
    height: 200,
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
  clockContainer: {
    width: "100%",
    alignItems: "center",
  },
  clockBackground: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 15,
  },
  clock: {
    fontSize: 70,
    fontWeight: "bold",
  },
  capturedImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 5,
  },
});

export default App;
