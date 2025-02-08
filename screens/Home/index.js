/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
// import MenuBar from '../../component/MenuBar.js/MenuBar';
import { BellIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// import BottomNav from "../BottomNav";
export default function Home() {
  return (
    <View style={tw`flex-1 `}>
      <SafeAreaView style={tw`flex bg-blue-300`}>
        <View style={tw`flex-row justify-start p-2  h-18`}>
          <View
            style={tw`text-white flex  justify-center items-center w-full pl-1  `}
          >
            <Text style={tw`text-white font-bold `}>Discovery</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={tw`flex-row items-center justify-between px-3 py-3`}>
        <View>
          <Text style={tw`font-bold text-2xl py-1`}>Hi Huii !</Text>
          <Text style={tw`text-gray-500`}>Chúc bạn một ngày tốt lành</Text>
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert("Đây là thông báo")}
          style={tw`p-1 ml-4 rounded-lg bg-gray-100 border border-gray-300`}
        >
          <BellIcon color={"#18181B"} />
        </TouchableOpacity>
      </View>
      {/* <BottomNav /> */}
    </View>
  );
}

function CardMenu({ icon, bgIcon, bgCard, label, link }) {
  const IconComponent = icon;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(link);
      }}
    >
      <View style={tw` ${bgCard} text-white rounded px-2 py-4 flex-row`}>
        <View
          style={tw`w-12 h-12  rounded-xl  ${bgIcon} flex justify-center items-center`}
        >
          <IconComponent style={[tw`text-gray-700 `]} />
        </View>
        <View style={tw`flex-1 justify-center pl-2`}>
          <Text style={tw`text-white font-bold `}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
  bottomMenu: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tab: { flex: 1, alignItems: "center", padding: 10 },
  tabText: { fontSize: 16, color: "#ccc" },
});
