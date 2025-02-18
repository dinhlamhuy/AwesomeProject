/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimensions";
import Icon from "../../components/Icons";
import Animated, {
  FadeInDown as ReanimatedFadeInDown,
} from "react-native-reanimated";
const ProfileList = [
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
];
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.accountOptions}>
        {ProfileList.map((item, index) => (
          <Animated.View
            key={index}
            entering={ReanimatedFadeInDown.delay(index * 50)
              .springify()
              .damping(14)}
            style={styles.listItem}
          >
            <View key={index} style={styles.listItem}>
              <Icon type={item.icon} color={"white"} />
              <Text style={styles.optionText}>{item.title}</Text>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",

    paddingTop: 15,

    height: 220,
  },
  text: {
    paddingTop: 10,
    fontSize: 28,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  accountOptions: {
    paddingTop: 30,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    color: "white",
  },
  listItem: {
    padding: 20,
    // backgroundColor: "#333",
    display: "flex",
    flexDirection: "row",
  },
  optionText: {
    color: "white",
    paddingLeft: 10,
  },
});
export default ProfileScreen;
