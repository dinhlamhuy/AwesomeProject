/* eslint-disable react-native/no-inline-styles */

import { Dimensions, View } from "react-native";
import tw from "twrnc";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import Svg, { Circle, G, Path } from "react-native-svg";

/* eslint-disable react/react-in-jsx-scope */
const { width, height } = Dimensions.get("window");
const TestSVG = () => {
  return (
    <View
      style={[
        tw`flex-1 bg-[#1d2235] `,
        {
          width: windowWidth,
          minHeight: windowHeight,
        },
      ]}
    >
      <View></View>
      <Svg
        width={width}
        height={height}
        style={tw`bg-gray-950 absolute bottom-0`}
        // viewBox="0 0 100 100"
      >
        <G scale={width / 100}>
          {/* <Path
            d="M 0 0 L 0 100 L 10 100 L 10 50 L 20 60 L 20 100 L 30 100 L 30 0 L 20 0 L 20 50 L 10 40 L 10 0 L 0 0"
            fill="yellow"
            stroke="blue"
          />
          <Path
            d="M 35 0 L 35 90 L 45 100 L 65 100 L 65 0 L 55 0 L 55 90 L 50 90 L 45 85 L 45 0 L 35 0"
            fill="yellow"
            stroke="blue"
          />
          <Path
            d="M 70 0 L 70 100 L 80 100 L 80 0 L 70 0"
            fill="yellow"
            stroke="blue"
          />
          <Path
            d="M 85 0 L 85 100 L 95 100 L 95 0 L 85 0"
            fill="yellow"
            stroke="blue"
          /> */}
          <Path
            d="M 0 5 V 200 H 100 V 5 C 100 2 98 0 95 0 L 80 0 C 65 0 70 10 60 10 L 40 10 C 30 10 35 0 20 0 L 5 0 C 2 0 0 2 0 5"
            fill="yellow"
            style={tw`bg-gray-950 absolute bottom-0`}
            // stroke="blue"
          />
          <Path
            d="M 40 5 L 60 5"
            style={tw`bg-gray-950 absolute bottom-0 rounded-full`}
            fill="yellow"
            stroke="white" // Border trắng
            strokeWidth={1} // Độ dày border
            strokeLinecap="round" // Bo tròn các cạnh
          />
        </G>
      </Svg>
    </View>
  );
};
export default TestSVG;
