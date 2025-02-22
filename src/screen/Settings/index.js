/* eslint-disable react/self-closing-comp */
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
// import {
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from "react-native-heroicons/outline";
// import Icon from "../../components/Icons";
import tw from "twrnc";
// import { windowHeight } from "../../utils/Dimensions";
import DropdownItem from "../../components/DropdownItem";
const menuSettings = [
  {
    tittle: "Edit Profile",
    icon: "UserIcon",
    subDropdown: [
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
      { tittle: "Change Password", icon: "lock-closed" },
      { tittle: "Change Email", icon: "mail" },
    ],
  },

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

const SettingsScreen = () => {
  return (
    <View style={tw`flex-1 pb-14  bg-[#333]`}>
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 50,
          paddingBottom: 100,
        }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {menuSettings.map((item, index) => (
          <DropdownItem
            key={index}
            index={index}
            sl={item.subDropdown.length}
            title={item.tittle}
            icon={item.icon}
            isSubDropdown={item.subDropdown.length > 0}
            handleFunction={() => {
              Alert.alert(item.tittle);
            }}
          >
            {item.subDropdown?.map((subItem, subIndex) => (
              <Text
                key={subIndex}
                style={tw` pl-8 font-bold py-2 bg-gray-950 text-white rounded mb-0.5`}
              >
                {subItem.tittle}
              </Text>
            ))}
          </DropdownItem>
        ))}
        <View style={tw`h-24`}></View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
