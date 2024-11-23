import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
/**
 * Onboarding component. This component renders an onboarding screen with a swiper. The screen displays a series of slides that are defined in the onboarding array in the constants file. The user can swipe between the slides and press the "Next" button to navigate to the next slide. If the user is on the last slide, the "Next" button is replaced with a "Get Started" button that navigates to the sign up page when pressed. The user can also press the "Skip" button to skip the onboarding screen and navigate directly to the sign up page.
 */
const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null); //Swiper for navigating within the onboarding screen
  const [activeIndex, setActiveIndex] = useState(0); //Current index in the swiper
  const isLastSlide = activeIndex === onboarding.length - 1; //Check if swiper is on the last slide

  return (
    // Onboarding screen in safe area
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      {/* User presses this to skip the onboarding screen to the sign up page */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="texxt-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      {/* Onboarding swiper */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {/* Map each onboarding slide */}
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            {/* Image for the slide */}
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            {/* Title */}
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            {/* Description */}
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      {/* Next button */}
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
