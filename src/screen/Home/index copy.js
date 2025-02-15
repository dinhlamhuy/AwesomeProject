/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";

import React, { useRef } from "react";
import tw from "twrnc";

import { SafeAreaView } from "react-native-safe-area-context";

import { BellIcon } from "react-native-heroicons/outline";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 72; // Chiều cao header thực tế

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT], // Khi cuộn từ 0 đến HEADER_HEIGHT px
    outputRange: [0, -HEADER_HEIGHT], // Header di chuyển lên -HEADER_HEIGHT px
    extrapolate: "clamp", // Không đi quá giới hạn
  });

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView style={tw`flex bg-blue-700`}>
        {/* Header có animation */}
        <Animated.View
          style={[
            tw`absolute top-0 left-0 right-0 bg-blue-700 z-10`,
            {
              transform: [{ translateY: headerTranslateY }],
              height: HEADER_HEIGHT,
            },
          ]}
        >
          <View
            style={tw`flex-row items-center justify-between p-2 h-18 w-full`}
          >
            <View>
              <Text style={tw`font-bold text-2xl py-1 text-white pl-9`}>
                Hi Huii !
              </Text>
              <Text style={tw`text-white`}>Chúc bạn một ngày tốt lành</Text>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert("Đây là thông báo")}
              style={tw`p-1 ml-4 rounded-lg bg-gray-100 border border-gray-300`}
            >
              <BellIcon color={"#18181B"} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Nội dung có thể cuộn */}
        <Animated.ScrollView
          // style={tw`mt-18`} // Để tránh bị che mất nội dung
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 200,
            paddingTop: HEADER_HEIGHT,
          }}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          //   { useNativeDriver: true }
          // )}
          // scrollEventThrottle={16} // Giúp animation mượt hơn
        >
          <Text style={tw`p-4 text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem
            ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,sadsadas
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit...dấdasd
          </Text>
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
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
  container2: {
    flex: 1,
    paddingTop: 300,
  },
  scrollView: {
    backgroundColor: "pink",
    flexGrow: 1,
  },
});
