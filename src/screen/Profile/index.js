/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "../../components/Icons";
import tw from "twrnc";
import { windowWidth } from "../../utils/Dimensions";
import { PencilIcon } from "react-native-heroicons/outline";
import DropdownItem from "../../components/DropdownItem";

const PersonalInfo = () => {
  const data = [
    { name: "Date Of Birth", value: "07 Dec 1999", icon: "CakeIcon" },
    { name: "Gender", value: "Male", icon: "UserIcon" },
    {
      name: "Email",
      value: "dinhlamhuytak489@gmail.com",
      icon: "EnvelopeIcon",
    },
    { name: "Phone", value: "+84 336 644 594", icon: "DevicePhoneMobileIcon" },
  ];
  return (
    <View style={[tw` `, {}]}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => "Profile" + index.toString()}
        numColumns={2} // Chia thành 3 cột
        renderItem={({ item }) => (
          <View style={tw`w-1/2 flex-row items-center  py-2  gap-1`}>
            <View style={tw`pt-2 `}>
              <Icon type={item.icon} color={"white"} size={25} />
            </View>
            <View style={tw`text-white`}>
              <Text style={tw`text-gray-300 text-[2.5] `}>{item.name}</Text>
              <Text style={tw`text-white text-[3]  `}>{item.value}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const menuSettings = [
  {
    tittle: "Personal Info",
    icon: "UserIcon",
    subDropdown: [<PersonalInfo />],
    component: <PersonalInfo />,
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
    tittle: "Place",
    icon: "BellIcon",
    subDropdown: [
      { tittle: "Push Notification", icon: "bell" },
      { tittle: "Email Alerts", icon: "mail" },
      { tittle: "Email Alerts", icon: "mail" },
      { tittle: "Email Alerts", icon: "mail" },
      { tittle: "Email Alerts", icon: "mail" },
      { tittle: "Email Alerts", icon: "mail" },
      { tittle: "Email Alerts", icon: "mail" },
    ],
  },
  {
    tittle: "Place",
    icon: "BellIcon",
    subDropdown: [
      { tittle: "Push Notification", icon: "bell" },
      { tittle: "Email Alerts", icon: "mail" },
    ],
  },

  {
    tittle: "Logout",
    icon: "ArrowRightStartOnRectangleIcon",
    subDropdown: [],
  },
];

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/image/fire.jpg")}
      style={[
        tw`flex-1`,
        {
          width: windowWidth,
          paddingBottom: 60,
        },
      ]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView
          style={tw`flex-1 min-h-full`}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* <Text style={styles.text}>Profile</Text> */}

          <View
            style={[
              tw`flex-1  min-h-full mt-35   `,
              {
                width: windowWidth,
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                borderRadius: 32,
              },
            ]}
          >
            <View
              style={tw`h-32 w-32 flex justify-center relative  w-full items-center -mt-14 `}
            >
              <View style={tw` border-4 border-blue-500 rounded-full`}>
                <Image
                  style={tw`h-32 w-32 rounded-full text-center `}
                  resizeMode="contain"
                  source={require("../../assets/image/avt.jpg")}
                ></Image>
                <View
                  style={tw`absolute bottom-0 right-2 border-white border bg-[#171d2d] h-7 w-7  rounded-full flex justify-center items-center    `}
                >
                  <PencilIcon size={16} style={[tw`text-white font-bold`]} />
                </View>
              </View>
              <Text style={tw`text-lg font-bold capitalize text-white`}>
                Đinh lâm Huy
              </Text>
              <Text style={tw`text-xs text-gray-500 capitalize `}>
                @huii.t2k.489
              </Text>
            </View>
            <View style={tw`pt-8 px-2`}>
              {menuSettings.map((item, index) => {
                if (item.component)
                  return (
                    <View
                      style={[
                        tw` gap-2 my-1 rounded-lg px-1 pr-5`,
                        {
                          // backgroundColor: "rgba(88, 41, 41, 0.58)",
                          backgroundColor: "rgba(23,29,45,0.58)",
                        },
                      ]}
                    >
                      <DropdownItem
                        key={index}
                        index={index}
                        sl={3}
                        title={item.tittle}
                        icon={item.icon}
                        isSubDropdown={item.subDropdown.length > 0}
                        handleFunction={() => {
                          Alert.alert(item.tittle);
                        }}
                      >
                        {item.component}
                      </DropdownItem>
                    </View>
                  );
                return (
                  <View
                    style={[
                      tw` gap-2 my-1 rounded-lg px-1  pr-5`,
                      {
                        backgroundColor: "rgba(23,29,45,0.58)",
                      },
                    ]}
                  >
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
                          style={tw` pl-8 font-bold py-3 text-white text-[3]  mb-0.5`}
                        >
                          {subItem.tittle}
                        </Text>
                      ))}
                    </DropdownItem>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    paddingTop: 5,
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
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default ProfileScreen;
