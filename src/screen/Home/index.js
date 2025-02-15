/* eslint-disable react/self-closing-comp */
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
import { windowWidth } from "../../utils/Dimensions";
const carousel_data = [
  {
    id: 1,
    title: "",
    desc: "",
    bgColor: "#E5E7EB",
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "",
    desc: "",
    image: "https://example.com/image2.jpg",
    bgColor: "#E5E7EB",
  },
  {
    id: 3,
    title: "",
    desc: "",
    image: "https://example.com/image3.jpg",
    bgColor: "#E5E7EB",
  },
  {
    id: 4,
    title: "",
    desc: "",
    image: "https://example.com/image3.jpg",
    bgColor: "#E5E7EB",
  },
  {
    id: 5,
    title: "",
    desc: "",
    image: "https://example.com/image3.jpg",
    bgColor: "#E5E7EB",
  },
];
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
      <SafeAreaView style={tw`flex-1 bg-gray-100  pt-10 px-2`}>
        <View>
          <Text style={tw`font-bold text-2xl py-1  text-gray-950 `}>
            Hi Huii !
          </Text>
          <Text style={tw`text-gray-950`}>Chúc bạn một ngày tốt lành</Text>
        </View>
        {/* Nội dung có thể cuộn */}
        <Animated.ScrollView
          // style={tw`mt-18`} // Để tránh bị che mất nội dung
          contentContainerStyle={{
            // flexGrow: 1,
            // paddingLeft: 10,
            // paddingRight: 10,
            paddingBottom: 80,
            paddingTop: 25,
          }}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          //   { useNativeDriver: true }
          // )}
          // scrollEventThrottle={16} // Giúp animation mượt hơn
        >
          {/* #region Carousel Setion */}
          <ScrollView
            horizontal
            pagingEnabled // Cuộn từng card một
            snapToInterval={windowWidth * 0.9 * 0.9}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
          >
            {carousel_data.map((item) => (
              <View
                key={item.id}
                style={{
                  ...styles.divCard,
                  backgroundColor: `${item.bgColor}`,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {item.title}
                </Text>
                <Text>{item.desc}</Text>
                {/* <Image
                  source={{ uri: item.image }}
                  style={{ width: 150, height: 100, marginTop: 10 }}
                /> */}
              </View>
            ))}
          </ScrollView>

          {/* #endregion */}
          <View style={tw` pt-6  `}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`font-bold text-[18px]`}>Categories</Text>
              <Text style={tw`text-blue-400`}>View All</Text>
            </View>
            <View style={tw`mt-3`}>
              <ScrollView
                horizontal
                // pagingEnabled // Cuộn từng card một
                // snapToInterval={windowWidth * 0.9 * 0.9}
                // showsHorizontalScrollIndicator={false}
                style={[tw` mt-3 `, { marginTop: 0 }]}
              >
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-18 w-18 mx-2 rounded-lg bg-gray-200`}></View>
              </ScrollView>
            </View>
          </View>
          <View style={tw` pt-7  `}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`font-bold text-[18px]`}>Our Product</Text>
              <Text style={tw`text-blue-400`}>View All</Text>
            </View>
            <View style={tw`mt-3`}>
              <ScrollView
                horizontal
                // pagingEnabled // Cuộn từng card một
                // snapToInterval={windowWidth * 0.9 * 0.9}
                // showsHorizontalScrollIndicator={false}
                style={[tw` mt-3 `, { marginTop: 0 }]}
              >
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
              </ScrollView>
            </View>
          </View>
          <View style={tw` pt-7  `}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`font-bold text-[18px]`}>Our Product</Text>
              <Text style={tw`text-blue-400`}>View All</Text>
            </View>
            <View style={tw`mt-3`}>
              <ScrollView
                horizontal
                // pagingEnabled // Cuộn từng card một
                // snapToInterval={windowWidth * 0.9 * 0.9}
                // showsHorizontalScrollIndicator={false}
                style={[tw` mt-3 `, { marginTop: 0 }]}
              >
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
              </ScrollView>
            </View>
          </View>
          <View style={tw` pt-7  `}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`font-bold text-[18px]`}>Our Product</Text>
              <Text style={tw`text-blue-400`}>View All</Text>
            </View>
            <View style={tw`mt-3`}>
              <ScrollView
                horizontal
                // pagingEnabled // Cuộn từng card một
                // snapToInterval={windowWidth * 0.9 * 0.9}
                // showsHorizontalScrollIndicator={false}
                style={[tw` mt-3 `, { marginTop: 0 }]}
              >
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
                <View style={tw`h-32 w-32 mx-2 rounded-lg bg-gray-200`}></View>
              </ScrollView>
            </View>
          </View>
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
  divCard: {
    width: windowWidth * 0.8,

    borderRadius: 20,
    marginHorizontal: windowWidth * 0.021, // Canh giữa
    padding: 20,
    alignItems: "center",
    height: 150,
  },
});
