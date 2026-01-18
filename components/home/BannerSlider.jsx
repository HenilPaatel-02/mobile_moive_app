import { styles } from "@/styles/homeStyles";
import React, { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp, ZoomIn } from "react-native-reanimated";
import Swiper from "react-native-swiper";

const BannerSlider = ({ banners }) => {
  return (
    <View style={styles.bannerContainer}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {banners.map((banner) => (
          <View key={banner.id} style={styles.bannerSlide}>
            <Image source={banner.image} style={styles.bannerImage} />
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Animated.Text
                entering={FadeInUp.duration(500)}
                style={styles.bannerTitle}
              >
                {banner.title}
              </Animated.Text>
              <Animated.Text
                entering={FadeInUp.delay(150).duration(500)}
                style={styles.bannerSubtitle}
              >
                {banner.subtitle}
              </Animated.Text>
              <Animated.View entering={ZoomIn.delay(300).duration(400)}>
                <TouchableOpacity style={styles.bannerBtn}>
                  <Text style={styles.bannerBtnText}>{banner.cta}</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default memo(BannerSlider);
