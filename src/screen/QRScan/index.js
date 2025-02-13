/* eslint-disable no-unused-vars */
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Hyperlink from "react-native-hyperlink";
import tw from "twrnc";
import {
  ChevronLeftIcon,
  CameraIcon,
  QrCodeIcon,
} from "react-native-heroicons/outline";
import QRCodeScanner from "react-native-qrcode-scanner";

// import { RNCamera } from "react-native-camera";
const QRScan = () => {
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <View style={tw`flex-1 bg-blue-600  content-between`}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start p-2 `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon style={tw`text-white `} />
          </TouchableOpacity>
          <View style={tw`text-white flex  justify-center pl-1`}>
            <Text style={tw`text-white font-bold`}>Scan QR Code</Text>
          </View>
        </View>

        {/* <Text style={tw`text-white p-5 m-2`}>{data}</Text> */}
        <Hyperlink linkDefault={true} linkStyle={{ color: "white" }}>
          <Text style={tw`text-white  pl-6 flex `}>Kết quả:</Text>
          <Text
            style={tw`text-white p-5 `}
            selectable={true}
            selectionColor="orange"
          >
            {/* {' '} */}
            {data}
          </Text>
        </Hyperlink>
      </SafeAreaView>
      <View>
        <View style={tw`mt-21`}>
          {status ? (
            <View
              style={tw`bg-white mx-3 h-[90%] rounded-3xl p-2 flex justify-center items-center`}
            >
              <QRCodeScanner
                style={tw``}
                onRead={({ data }) => {
                  setData(data);
                  setStatus(false);
                }}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                reactivate={true}
                reactivateTimeout={500}
                showMarker={true}
                topContent={
                  <View>
                    <Text style={tw`text-white p-5 m-2`}>
                      Please move your camera {"\n"} over the QR Code
                    </Text>
                  </View>
                }
                bottomContent={
                  <View>
                    <Text style={tw`text-white p-5 m-2`}>QR Code Scanner</Text>
                  </View>
                }
              />
            </View>
          ) : (
            <View
              style={tw`bg-white mx-3 h-[90%] rounded-3xl p-2 flex justify-around items-center content-around`}
            >
              <View style={tw`flex items-center`}>
                <CameraIcon style={tw`text-blue-500`} />
                <Text style={tw`text-center text-blue-800`}>
                  Please move your camera {"\n"} over the QR Code
                </Text>
              </View>
              <QrCodeIcon style={tw`text-blue-300 `} size={200} />
              <TouchableOpacity
                onPress={() => {
                  setStatus(true);
                  setData("");
                }}
                style={tw`border p-2 rounded-lg border-blue-400`}
              >
                <View style={tw`flex-row `}>
                  <CameraIcon style={tw`text-blue-500`} />

                  <View style={tw`flex justify-center `}>
                    <Text style={tw`text-blue-500 `}> Scan QR Code</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default QRScan;
