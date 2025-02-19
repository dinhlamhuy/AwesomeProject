/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import Icon from "../../components/Icons";

const ProfileList = [
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
  { title: "Edit Profile", icon: "UserIcon" },
];

const AnimatedListItem = ({ item, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, index * 200);
  }, [translateYAnim, fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.listItem,
        { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
      ]}
    >
      <Icon type={item.icon} color={"white"} />
      <Text style={styles.optionText}>{item.title}</Text>
    </Animated.View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.accountOptions}>
        {ProfileList.map((item, index) => (
          <AnimatedListItem key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 15,
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
    justifyContent: "center",
  },
  listItem: {
    padding: 20,
    flexDirection: "row",
  },
  optionText: {
    color: "white",
    paddingLeft: 10,
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default ProfileScreen;
