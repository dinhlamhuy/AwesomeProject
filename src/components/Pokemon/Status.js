/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { Text, View } from "react-native";
import tw from "twrnc";
const renderBars = (score) => {
  return (
    <View style={tw`flex-row flex-2 gap-1 pl-2`}>
      {Array.from({ length: 15 }).map((_, i) => (
        <View
          key={i}
          style={[
            tw`h-6 w-2.5 rounded-md ${
              i < score ? "bg-orange-400" : "bg-gray-500"
            }`,
            { transform: [{ rotate: "15deg" }] },
          ]}
        />
      ))}
    </View>
  );
};

// Gọi hàm `renderBars(5)` để hiển thị 5 điểm màu cam, 10 điểm màu xám

const Status = ({ dataStats }) => {
  const maxPing = {
    hp: 255,
    attack: 255,
    defense: 250,
    "special-attack": 194,
    "special-defense": 250,
    speed: 200,
  };
  const convertTo15Scale = (base_stat, max_stat) => {
    return Math.round((base_stat / max_stat) * 15);
  };

  return (
    <View>
      {dataStats.map((item, index) => {
        const score = convertTo15Scale(item.base_stat, maxPing[item.stat.name]);

        return (
          <View style={tw`flex-row items-center justify-between py-2  px-4`}>
            <Text style={tw`uppercase text-gray-200 text-md flex-1`}>
              {item.stat?.name.replace("special-", "sp.")}
            </Text>
            <Text style={tw`uppercase text-white font-bold text-lg w-12`}>
              {item.base_stat}
            </Text>

            {renderBars(score)}
          </View>
        );
      })}
    </View>
  );
};
export default Status;
