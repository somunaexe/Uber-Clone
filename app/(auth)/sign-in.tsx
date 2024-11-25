import { ScrollView, Text, View, Image } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";
import { useCallback } from "react";
const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form.email, form.password]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋🏽
          </Text>
        </View>

        {/* Form */}
        <View className="p-5">
          {/* Email input field */}
          <InputField
            label="Email"
            placeholder="Enter your email!"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />

          {/* Password input field */}
          <InputField
            label="password"
            placeholder="Enter your password!"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />

          {/* Sign up button */}
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
