import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const HomeTitle = () => {
  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeInUp.duration(600)}
        style={styles.titleSmall}
      >
        Fresh & Hot <Feather name="coffee" size={14} color="#8D6E63" />
      </Animated.Text>

      <Animated.Text
        entering={FadeInUp.delay(150).duration(600)}
        style={styles.titleMain}
      >
        Grab your <Text style={styles.titleHighlight}>coffee</Text>
      </Animated.Text>
    </View>
  );
};

export default React.memo(HomeTitle);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  // title
  titleSmall: {
    fontSize: 14,
    color: "#8D6E63",
    marginBottom: 4,
  },
  titleMain: {
    fontSize: 30,
    fontWeight: "800",
    color: "#3E2723",
  },

  titleHighlight: {
    color: "#6F4E37",
  },
});
