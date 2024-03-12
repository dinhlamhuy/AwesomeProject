import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
// import MenuBar from '../../component/MenuBar.js/MenuBar';
import { Bars2Icon, BellIcon, CameraIcon, MagnifyingGlassIcon, QrCodeIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

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
                    <TextInput key={'search'} style={[tw`p-3 px-12 bg-white rounded-lg  `, { border: '1px solid #D2D6DB' }]} placeholder='Search' />
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

            <View style={tw`my-6 flex-row flex-wrap justify-between gap-3`}>
                <View style={tw`w-[48%] `}>
                    <CardMenu label="QR Barcode" icon={QrCodeIcon} bgIcon='bg-blue-200' bgCard='bg-blue-800' link="QRScan" />
                </View>
                <View style={tw`w-[48%] `}>
                    <CardMenu label="QR Barcode" icon={CameraIcon} bgIcon='bg-blue-200' bgCard='bg-blue-800' link="QRScan" />
                </View>
                <View style={tw`w-[48%] `}>
                    <CardMenu label="QR Barcode" icon={QrCodeIcon} bgIcon='bg-blue-200' bgCard='bg-blue-800' link="QRScan" />
                </View>
                <View style={tw`w-[48%] `}>
                    <CardMenu label="QR Barcode" icon={QrCodeIcon} bgIcon='bg-blue-200' bgCard='bg-blue-800' link="QRScan" />
                </View>

            </View>


        </View>
    )
}


function CardMenu({ icon, bgIcon, bgCard, label, link }) {
    const IconComponent = icon;
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate(link)}}>
            <View style={tw` ${bgCard} text-white rounded px-2 py-4  flex-row`}>
                <View style={tw`w-12 h-12  rounded-xl  ${bgIcon} flex justify-center items-center`}>
                    <IconComponent style={[tw`text-gray-700 `]} />
                </View>
                <View style={tw`flex-1 justify-center pl-2`}>
                    <Text style={tw`text-white font-bold `}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}