import Icon from "@/components/Icon";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../constants/image";
import { styles } from "../../styles/homeStyles";

const Home = () => {
  const handleGetStarted = () => {
    router.push("/categories");
  };

  return (
    <ImageBackground source={IMAGES.mainBg} style={styles.image}>
      <View style={styles.overlay} />

      <View style={styles.content}>
        {/* Top brand title */}
        <View style={styles.header}>
          <Text style={styles.brand}>CoffeeHub</Text>
        </View>

        {/* Bottom text + CTA */}
        <View style={styles.bottomSection}>
          <View style={styles.taglineWrapper}>
            <Text style={styles.taglineLine1}>Feeling Low?</Text>
            <Text style={styles.taglineLine2}>Let coffee lift your josh</Text>
          </View>

          {/* Get Started CTA button */}
          <TouchableOpacity
            style={styles.ctaButton}
            activeOpacity={0.85}
            onPress={handleGetStarted}
          >
            <View style={styles.ctaIconWrapper}>
              <Text style={styles.ctaIconText}>
                <Icon name="coffee" size={24} color="#7B3F00" />
              </Text>
            </View>

            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

//utilis string and images : Done
//icons componentn : Done
//navigation stact , dwawer , route : Done
//aekj button used kar aene access karvu folder  : Done

//view use kri ne custom button bnvu also border color , image
//image aalg acess karvu all screen ma : Done
//login page with validation when user login to sshow home screen and also pasu open kare to pan home screen avu joye

//react native cli jovu project create kari ne

//redux ( state management ) for login state
//splash screen ma loadding center
// je screen open thay te background traprent dekhvu joye
