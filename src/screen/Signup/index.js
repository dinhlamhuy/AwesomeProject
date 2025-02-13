/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-blue-600 `}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start p-2`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon style={tw`text-white `} />
          </TouchableOpacity>
          <View style={tw`text-white flex  justify-center pl-1`}>
            <Text style={tw`text-white font-bold`}>SignUp</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-center -m-5`}>
          <Image
            source={require("../../assets/image/lock.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={[
          tw`flex-1 bg-white px-8 pt-8 mt-5 `,
          { borderTopLeftRadius: 50, borderTopRightRadius: 50 },
        ]}
      >
        <View style={tw`form my-2`}>
          <Text style={tw`text-gray-700 ml-4 mb-2 `}>Email Address</Text>
          <TextInput
            style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
            placeholder="Email Address"
          />
          <Text style={tw`text-gray-700 ml-4 mb-2 `}>Password</Text>
          <TextInput
            style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity
            style={tw`flex items-end mb-5`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-gray-700`}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`py-3 bg-yellow-400 rounded-xl`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`font-xl  font-bold text-center`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Signup;
