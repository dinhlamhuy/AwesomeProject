/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import tw from "twrnc";
import axios from "axios";
import { useEffect, useState } from "react";
import datapokemon from "./data";
import typePokemon from "./types";

import { TabView, SceneMap } from "react-native-tab-view";
import About from "../../components/Pokemon/About";
import Evolutions from "../../components/Pokemon/Evolutions";
import Location from "../../components/Pokemon/Location";
import Moves from "../../components/Pokemon/Moves";
import Status from "../../components/Pokemon/Status";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { windowHeight } from "../../utils/Dimensions";

function TabBar({ navigationState, position, jumpTo }) {
  return (
    <View style={tw`flex-row  justify-around pb-2`}>
      {navigationState.routes.map((route, i) => {
        const isActive = navigationState.index === i;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => jumpTo(route.key)}
            style={tw`pb-2`}
          >
            <Text
              style={tw`text-md font-[900] ${
                isActive ? "text-yellow-400" : "text-white opacity-70"
              }`}
            >
              {route.title}
            </Text>
            {isActive && (
              <View style={tw`h-1 bg-yellow-400 rounded-full mt-1`} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function TabViewExample({ data }) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "0":
        return (
          <About
            id={data.id}
            height={data.height}
            weight={data.weight}
            exp={data.base_experience}
          />
        );
      case "1":
        return <Status dataStats={data.stats} />;
      case "2":
        return <Evolutions pokemonName={data.id} />;
      //       case "3":
      //       return <Moves />;
      //   case "4":
      //     return <Location />;
      default:
        return null;
    }
  };
  const routes = [
    { key: "0", title: "About" },
    { key: "1", title: "Stats" },
    // { key: "2", title: "Moves" },
    { key: "2", title: "Evolutions" },
    // { key: "4", title: "Location" },
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => renderScene({ route, data })}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <TabBar {...props} />}
    />
  );
}
const PokemonInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const img = data?.sprites?.other?.home?.front_default;

  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.log("Không gọi được API");
    } finally {
      setLoading(false); // Kết thúc trạng thái loading
    }
  };
  useEffect(() => {
    FetchData();
  }, [id]);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-black`}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={tw`text-white mt-4`}>Đang tải dữ liệu...</Text>
      </View>
    );
  }
  return (
    <View style={tw`flex-1   `}>
      <ImageBackground
        source={typePokemon[data?.types[0].type.name].img} // Thay ảnh nền ở đây
        style={tw`flex-1`}
      >
        <TouchableOpacity
          style={tw` z-10 h-12 w-18  absolute top-4 left-0  flex justify-center items-center`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ChevronLeftIcon size={32} style={tw`text-white font-bold  `} />
        </TouchableOpacity>
        <ScrollView style={tw`  text-white`}>
          <Text
            style={tw`capitalize  tracking-wider text-center pt-4 font-bold text-6 text-white`}
          >
            {"#00" + data?.id}
          </Text>
          <View style={tw`flex justify-center items-center -mt-4 z-10`}>
            <Image
              source={{ uri: data?.sprites?.other?.home?.front_default }}
              style={{ height: 300, width: 300 }}
            />
            <Text
              style={tw`capitalize  tracking-wider text-center mb-2 font-bold text-7 text-white`}
            >
              {data?.forms[0]?.name}
            </Text>
            <View style={tw`flex flex-row gap-2`}>
              {data?.types.map((itemType, index) => {
                return (
                  <Text
                    key={"ten" + index}
                    style={[
                      tw` text-white border py-1 mb-2 px-4 text-md  rounded-lg text-[${
                        typePokemon[itemType.type.name].color
                      }] border-[${typePokemon[itemType.type.name].color}]`,
                      {
                        textShadowColor: typePokemon[itemType.type.name].color,
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 3,
                        shadowColor: typePokemon[itemType.type.name].color,
                        shadowOffset: { width: 0, height: 0 },
                        shadowRadius: 20,
                        shadowOpacity: 1,
                      },
                    ]}
                  >
                    {typePokemon[itemType.type.name].name}
                  </Text>
                );
              })}
            </View>
          </View>
          <View
            style={[
              tw` flex-1 h-full  -mt-32 pt-34`,
              {
                borderRadius: 18,
                backgroundColor: "rgba(52, 28, 28, 0.6);",
                height: windowHeight,
              },
            ]}
          >
            <TabViewExample data={data} />
            {/* <Text style={tw`text-white`}>jdashdsjd</Text> */}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PokemonInfo;
