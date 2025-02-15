/* eslint-disable quotes */
import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
// import LinearGradient from 'react-native-linear-gradient';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1  bg-blue-600`}>
      <View style={tw`flex-1 flex justify-around my-4`}>
        <Text
          style={tw`text-white font-bold text-4xl text-center
                `}
        >
          Let's Get Started!
        </Text>
        <View style={tw`flex-row justify-center`}>
          <Image source={require("../../assets/image/welcome.png")} />
        </View>
        <View style={tw`py-4`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={tw`py-2 bg-yellow-400 mx-9 rounded-xl`}
          >
            <Text style={tw`text-xl font-bold text-center text-gray-700 `}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-white font-semibold`}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={tw`font-semibold text-yellow-400 `}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
