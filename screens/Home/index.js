import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
// import MenuBar from '../../component/MenuBar.js/MenuBar';
import { Bars2Icon, BellIcon, CameraIcon, MagnifyingGlassIcon, QrCodeIcon } from "react-native-heroicons/outline";


export default function Home() {
    return (
        <View style={tw`px-2`}>
            <View style={tw`flex-row items-center justify-between  px-3 py-3`}>
                <View  >
                    <Text style={tw`font-bold text-2xl py-1`}>Hi Huii</Text>
                    <Text style={tw`text-[#3F3F46]`}>May you always in a good condition</Text>
                    {/* <MenuBar /> */}
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Notifications")}
                        style={[tw`p-2 ml-15  rounded-lg bg-[#F9FAFB]`, { border: '1px soild #E5E7EB' }]}>
                        <BellIcon color={'#18181B'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`flex-row justify-between items-center`}>
                <View style={tw`w-[80%] relative`}>
                    <TextInput style={[tw`p-3 px-12 bg-white rounded-lg  `, { border: '1px solid #D2D6DB' }]} placeholder='Search' />
                    <View style={tw`absolute top-2 p-2 left-1 bg-[#F9FAFB] rounded-lg`}>
                        <TouchableOpacity>
                            <MagnifyingGlassIcon style={tw` text-2xl font-bold`} color={'#18181B'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[tw`text-gray-700  bg-green-200 p-3 rounded-xl`, { border: '1px solid #D2D6DB' }]}>
                    <Bars2Icon style={[tw`text-gray-700 `]} />
                </View>
            </View>

            <View style={tw`my-6 `}>
                <View style={tw`w-[50%] bg-blue-700 rounded p-4 `}>
                    <View style={tw`w-12 h-12  rounded-xl  bg-[#C6D4F1] flex justify-center items-center`}>
                        <QrCodeIcon style={[tw`text-gray-700 `]} />
                    </View>
                </View>
            </View>


        </View>
    )
}