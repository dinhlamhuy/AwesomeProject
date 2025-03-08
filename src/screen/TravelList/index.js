/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  Animated,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DataTravel from "../../DataTravel";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tutorial2Spec } from "../../../theme";
import hinh1 from "../../assets/image/dark.jpg";
import hinh2 from "../../assets/image/fire.jpg";
import hinh3 from "../../assets/image/bug.jpg";
import hinh4 from "../../assets/image/electric.jpg";
import hinh5 from "../../assets/image/flying.jpg";
// import Animated from "react-native-reanimated";
import { useRef } from "react";
import { SharedElement } from "react-native-shared-element";

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, FULL_SIZE, SPACING } = tutorial2Spec;
const TravelList = ({ navigation }) => {
  const imgarr = [hinh1, hinh2, hinh3, hinh4, hinh5];
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#333" }}>
      {/* <View>
        <Text>Travel List</Text>
      </View>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("TravelListDetails")}
      /> */}

      <Animated.FlatList
        data={DataTravel}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        keyExtractor={(item) => item.key}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingRight: ITEM_WIDTH }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push("TravelListDetail", { item });
              }}
              style={styles.itemContainer}
            >
              <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
              >
                {/* <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    { overflow: "hidden", borderRadius: RADIUS },
                  ]}
                > */}
                <Animated.Image
                  source={imgarr[index]}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {
                      resizeMode: "cover",
                      borderRadius: 10,
                      height: 500,
                      width: 300,
                      transform: [{ scale }],
                    },
                  ]}
                />
                {/* </View> */}
              </SharedElement>
              <Animated.Text
                style={[styles.location, { transform: [{ translateX }] }]}
              >
                {item.location}
              </Animated.Text>
              <View style={styles.days}>
                <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                <Text style={styles.daysLabel}>days</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
    padding: SPACING * 2,
    marginTop: 100,
    borderRadius: RADIUS,
  },
  location: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING,
    left: SPACING,
  },
  days: {
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  daysValue: {
    fontWeight: "800",
    color: "#FFF",
    fontSize: 18,
  },
  daysLabel: {
    color: "#FFF",
    fontSize: 10,
  },
});
TravelList.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.key}.photo`,
    },
  ];
};
export default TravelList;
