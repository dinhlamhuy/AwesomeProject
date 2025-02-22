/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

const About = ({ id, height, weight, exp }) => {
  const [description, setDescription] = useState("");

  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const entries = response.data.flavor_text_entries;
      // Lọc ra mô tả của hai phiên bản "red" và "crystal"
      const selectedVersions = ["red", "crystal"];
      const filteredEntries = entries.filter(
        (entry) =>
          entry.language.name === "en" &&
          selectedVersions.includes(entry.version.name)
      );

      // Làm sạch chuỗi (loại bỏ \n và \f)
      const cleanText = (text) => text.replace(/\n/g, " ").replace(/\f/g, "");

      // Ghép 2 mô tả lại thành một chuỗi
      const finalDescription = filteredEntries
        .map((entry) => cleanText(entry.flavor_text))
        .join(" ");

      setDescription(finalDescription || "No description available.");
    } catch (error) {
      console.log("Không gọi được API");
    }
  };

  useEffect(() => {
    FetchData();
  }, [id]);

  return (
    <View style={tw`px-2 flex-1 pt-5`}>
      {/* <Text style={tw`text-white`}>{height + "" + weight}</Text> */}
      <View>
        <Text style={tw`text-white text-[4]`}>{description}</Text>
      </View>
      <View
        style={[
          tw`flex flex-row w-5/6 rounded-xl justify-around items-center mx-auto mt-5`,
          { backgroundColor: "rgba(4, 4, 4, 0.85)" },
        ]}
      >
        <View style={tw`px-5 flex justify-center  items-center py-3  my-3 `}>
          <Text style={tw`text-white text-2xl text-gray-200`}>
            {(weight * 0.1).toFixed(1)}kg
          </Text>
          <Text style={tw`text-gray-600 text-md`}>Weight</Text>
        </View>
        <View style={tw`px-5 flex justify-center  items-center py-3   my-3 `}>
          <Text style={tw`text-white text-2xl text-gray-200`}>{exp}</Text>
          <Text style={tw`text-gray-600 text-md`}>Exp</Text>
        </View>
        <View style={tw`px-5 flex justify-center  items-center py-3 my-3 `}>
          <Text style={tw`text-white text-2xl text-gray-200`}>
            {(height * 0.1).toFixed(1)}m
          </Text>
          <Text style={tw`text-gray-600 text-md`}>Height</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
