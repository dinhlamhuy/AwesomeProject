/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import axios from "axios";
import tw from "twrnc";
import typePokemon from "../../screen/PokemonInfo/types";

const Evolutions = ({ pokemonName }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        // Gọi API để lấy species của Pokémon
        const speciesRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
        );
        const evolutionUrl = speciesRes.data.evolution_chain.url;

        // Gọi API lấy chuỗi tiến hóa
        const evolutionRes = await axios.get(evolutionUrl);
        const evolutionData = evolutionRes.data;

        let chain = [];
        let current = evolutionData.chain;

        while (current) {
          const pokemonName = current.species.name;

          let evolutionInfo = {
            name: pokemonName,
            level: null,
            image: null, // Ảnh Pokémon
          };

          if (current.evolves_to.length > 0) {
            const evolutionDetails = current.evolves_to[0].evolution_details[0]; // Lấy thông tin tiến hóa đầu tiên
            if (evolutionDetails && evolutionDetails.min_level) {
              evolutionInfo.level = evolutionDetails.min_level; // Lấy cấp độ tiến hóa
            }
          }

          // Gọi API để lấy ảnh của Pokémon
          const pokemonRes = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
          );
          evolutionInfo.image =
            pokemonRes.data.sprites.other.home.front_default; // Lấy ảnh
          evolutionInfo.types = pokemonRes.data.types;
          chain.push(evolutionInfo);
          current = current.evolves_to[0]; // Tiếp tục lấy tiến hóa tiếp theo (nếu có)
        }

        setEvolutionChain(chain);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tiến hóa:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvolutionChain();
  }, [pokemonName]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <ScrollView style={tw`pb-[220]`}>
      {evolutionChain.map((evo, index) => (
        <View
          key={index}
          style={[
            tw`flex-row flex justify-center items-center gap-5`,
            { marginVertical: 10 },
          ]}
        >
          <View style={tw`flex-1 flex justify-center items-end`}>
            {evo.image && (
              <Image
                source={{ uri: evo.image }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            )}
          </View>
          <View style={tw`flex-2`}>
            <Text style={tw`text-lg text-white capitalize pb-1 font-bold`}>
              {evo.name}

              {/* {evo.level ? `(Level ${evo.level})` : ""} */}
            </Text>
            <View style={tw`flex-row gap-2`}>
              {evo.types.map((itemType, index) => {
                return (
                  <Text
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
        </View>
      ))}
      <View style={tw`h-32`}></View>
    </ScrollView>
  );
};

export default Evolutions;
