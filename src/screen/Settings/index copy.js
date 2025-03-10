/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import Icon from "../../components/Icons";
import tw from "twrnc";
const menuSettings = [
  {
    tittle: "Edit Profile",
    icon: "UserIcon",
    subDropdown: [
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Phone", icon: "phone" },
    ],
  },
  {
    tittle: "Address",
    icon: "BellIcon",
    subDropdown: [
      { tittle: "Push Notification", icon: "bell" },
      { tittle: "Email Alerts", icon: "mail" },
    ],
  },
  {
    tittle: "Notification",
    icon: "BellIcon",
    subDropdown: [
      { tittle: "Push Notification", icon: "bell" },
      { tittle: "Email Alerts", icon: "mail" },
    ],
  },
  {
    tittle: "My Wallet",
    icon: "BellIcon",
    subDropdown: [
      { tittle: "Payment Methods", icon: "credit-card" },
      { tittle: "Transaction History", icon: "receipt" },
    ],
  },
  {
    tittle: "Language",
    icon: "LanguageIcon",
    subDropdown: [
      { tittle: "EN (English)", icon: "credit-card" },
      { tittle: "VN (VietNamese)", icon: "receipt" },
    ],
  },
  {
    tittle: "Logout",
    icon: "ArrowRightStartOnRectangleIcon",
    subDropdown: [],
  },
];

const DropdownItem = ({
  title,
  icon,
  children,
  isSubDropdown,
  handleFunction,
}) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const toValue = expanded ? 0 : 100; // 100 là chiều cao tối đa, có thể chỉnh theo nội dung
    Animated.timing(animatedHeight, {
      toValue,
      duration: 300, // Thời gian animation (300ms)
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
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
          <Icon type={icon} color={"#445252"} />
          <Text style={tw`text-[15px] pl-4 text-[#445252] font-bold`}>
            {title}
          </Text>
        </View>
        {isSubDropdown && (
          <View>
            {expanded ? (
              <ChevronDownIcon size={18} color={"black"} />
            ) : (
              <ChevronRightIcon size={18} color={"black"} />
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
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{ padding: 20, paddingTop: 80 }}>
      {menuSettings.map((item, index) => (
        <DropdownItem
          key={index}
          title={item.tittle}
          icon={item.icon}
          isSubDropdown={item.subDropdown.length > 0}
          handleFunction={() => {
            Alert.alert(item.tittle);
          }}
        >
          {item.subDropdown?.map((subItem, subIndex) => (
            <Text key={subIndex}>- {subItem.tittle}</Text>
          ))}
        </DropdownItem>
      ))}
    </View>
  );
};

export default SettingsScreen;
