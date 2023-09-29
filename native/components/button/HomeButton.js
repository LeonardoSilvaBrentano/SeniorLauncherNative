import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

const HomeButton = ({ imgUrl, title, desc, action }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPressIn = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleButtonPressOut = () => {
    setActiveButton(null);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, activeButton === 1 && styles.activeButton]}
        onPress={action}
        activeOpacity={1}
        onPressIn={() => handleButtonPressIn(1)}
        onPressOut={handleButtonPressOut}
      >
        <Image source={imgUrl} style={styles.buttonImage} />
        <Text style={styles.buttonText}>
          <Text>{title}</Text>
          {"\n"}
          {desc}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 170,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
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
    textAlign: "center", // Alinhar o texto ao centro
  },
});

export default HomeButton;
