/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import tw from "twrnc";
import { windowWidth } from "../../utils/Dimensions";

const numColumns = 3;
const cardWidth = (windowWidth - 40) / numColumns;
const Pokemon = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 21;
  const [loading, setLoading] = useState(false);
  const imgPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/`;
  const [refreshing, setRefreshing] = useState(false);

  const FetchData = async () => {
    if (loading) return; // Nếu đang tải thì không gọi API nữa
    setLoading(true);
    try {
      console.log("FetchData");
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const newData = response.data.results.map((item, index) => ({
        ...item,
        id: offset + index + 1,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setOffset((prevOffset) => prevOffset + limit);
    } catch (error) {
      console.log("Không gọi được API");
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      FetchData();
      setRefreshing(false);
    }, 2000);
  }, []);
  useEffect(() => {
    FetchData();
  }, []);

  const renderItem = ({ item }) => {
    const imgPo = imgPoke + item.id + ".png";
    return (
      <TouchableOpacity
        style={tw`z-10 `}
        onPress={() => navigation.navigate("PokemonInfo", { id: item.name })}
      >
        <View
          style={[
            tw`flex h-42 m-1 border rounded `,
            styles.card,
            { width: cardWidth },
          ]}
        >
          <ImageBackground
            source={require("../../assets/image/bg.jpg")}
            style={tw`flex-1 bg-black`}
            resizeMode="contain"
          >
            <View style={styles.blurOverlay} />
            <Image
              source={{ uri: imgPo }}
              style={tw`h-32 `}
              resizeMode="contain"
            />
            <Text style={tw`text-white text-center text-lg capitalize pt-1`}>
              {item.name}
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        tw`pt-10 flex-1 bg-[#333] px-1`,
        {
          width: windowWidth,
        },
      ]}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString() + Math.random().toString()}
        numColumns={3}
        columnWrapperStyle={tw`justify-center`}
        onEndReached={FetchData}
        onEndReachedThreshold={0.5} // Load dữ liệu khi gần đến cuối danh sách
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="#FFD700" />
        }
      />
      <View style={tw`h-15`}></View>
    </View>
  );
};

const styles = {
  card: {
    borderRadius: 10,
    overflow: "hidden",
  },
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
};

export default Pokemon;
