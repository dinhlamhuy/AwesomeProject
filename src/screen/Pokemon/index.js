/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";

const Pokemon = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 21;
  const [loading, setLoading] = useState(false);
  const imgPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/`;

  const FetchData = async () => {
    if (loading) return; // Nếu đang tải thì không gọi API nữa
    setLoading(true);
    try {
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

  useEffect(() => {
    FetchData();
  }, []);

  const renderItem = ({ item }) => {
    const imgPo = imgPoke + item.id + ".png";
    return (
      <TouchableOpacity
        style={tw`z-10`}
        onPress={() => navigation.navigate("PokemonInfo", { id: item.name })}
      >
        <View style={[tw`flex h-46 w-32 border rounded m-1`, styles.card]}>
          <ImageBackground
            source={require("../../assets/image/bg.jpg")}
            style={tw`flex-1`}
            resizeMode="cover"
          >
            <View style={styles.blurOverlay} />
            <Image
              source={{ uri: imgPo }}
              style={tw`h-36 w-32`}
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
    <View style={tw`pt-10 flex-1 bg-[#333] gap-3`}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={tw`justify-center`}
        onEndReached={FetchData}
        onEndReachedThreshold={0.5} // Load dữ liệu khi gần đến cuối danh sách
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
