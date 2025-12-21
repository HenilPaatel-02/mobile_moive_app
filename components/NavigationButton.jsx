import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../styles/navigationButtonStyles";

const NavigationButton = ({ title, link }) => {
  return (
    <Pressable style={styles.button} onPress={() => router.push(link)}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default NavigationButton;


// import { router } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const NavigationButton = ({ title, link }) => (
//   <View
//     style={styles.button}
//     onStartShouldSetResponder={() => true}
//     onResponderRelease={() => router.push(link)}
//   >
//     <Text style={styles.buttonText}>{title}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   button: {
//     width: 200,
//     height: 50,
//     backgroundColor: "#4682B4",
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default NavigationButton;
