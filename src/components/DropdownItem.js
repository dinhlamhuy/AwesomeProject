/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Alert,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import tw from "twrnc";
import { windowHeight } from "../../utils/Dimensions";
import Icon from "./Icons";
const DropdownItem = ({
  title,
  icon,
  sl,
  index,
  children,
  isSubDropdown,
  handleFunction,
}) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
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

  const toggleDropdown = () => {
    const toValue = expanded ? 0 : 38 * sl; // 100 là chiều cao tối đa, có thể chỉnh theo nội dung
    Animated.timing(animatedHeight, {
      toValue,
      duration: 300, // Thời gian animation (300ms)
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  return (
    <Animated.View
      style={{
        // borderBottomWidth: 1,
        // borderBottomColor: "#ccc",
        paddingVertical: 10,
        opacity: fadeAnim,
        transform: [{ translateY: translateYAnim }],
      }}
    >
      <TouchableOpacity
        onPress={isSubDropdown ? toggleDropdown : handleFunction}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={tw`flex-row items-center`}>
          <Icon type={icon} color={"#fff"} />
          <Text style={tw`text-[15px] pl-2 text-[#fff] font-bold`}>
            {title}
          </Text>
        </View>
        {isSubDropdown && (
          <View>
            {expanded ? (
              <ChevronDownIcon size={18} color={"#fff"} />
            ) : (
              <ChevronRightIcon size={18} color={"#fff"} />
            )}
          </View>
        )}
      </TouchableOpacity>
      {isSubDropdown && (
        <Animated.View
          style={{ height: animatedHeight, overflow: "hidden", marginTop: 5 }}
        >
          <View style={{ paddingLeft: 15 }}>{children}</View>
        </Animated.View>
      )}
    </Animated.View>
  );
};
export default DropdownItem;
