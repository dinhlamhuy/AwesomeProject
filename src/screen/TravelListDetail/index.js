/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { tutorial2Spec } from "../../../theme";
import { SharedElement } from "react-native-shared-element";
import hinh1 from "../../assets/image/dark.jpg";
import hinh2 from "../../assets/image/fire.jpg";
import hinh3 from "../../assets/image/bug.jpg";
import hinh4 from "../../assets/image/electric.jpg";
import hinh5 from "../../assets/image/flying.jpg";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, FULL_SIZE, SPACING } = tutorial2Spec;
const TravelListDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const imgarr = [hinh1, hinh2, hinh3, hinh4, hinh5];
  return (
    <SafeAreaView style={tw`flex-1 bg-[#333]   `}>
      <TouchableOpacity
        style={tw` z-10 h-12 w-18  absolute top-4 left-0  flex justify-center items-center`}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ChevronLeftIcon size={32} style={tw`text-white font-bold  `} />
      </TouchableOpacity>
      <SharedElement
        id={`item.${item.key}.photo`}
        style={[StyleSheet.absoluteFillObject]}
      >
        {/* <View style={[StyleSheet.absoluteFillObject]}> */}
        <Image
          source={imgarr[item.key - 1]}
          style={[
            StyleSheet.absoluteFillObject,
            {
              resizeMode: "cover",
              height: windowHeight,
              width: windowWidth,
            },
          ]}
        />
        {/* </View> */}
      </SharedElement>
      <Text style={[styles.location]}>{item.location}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  location: {
    fontSize: 30,

    color: "#FFF",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING + 40,
    left: SPACING + 40,
  },
});

TravelListDetail.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  console.log("Shared Element triggered:", item);
  return [
    { id: `item.${item.key}.photo`, animation: "move" }, // ✅ Định dạng đúng
  ];
};

export default TravelListDetail;
