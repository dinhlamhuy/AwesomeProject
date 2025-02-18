/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../utils/Dimensions";

const Card = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle2}></View>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.content2}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
    marginTop: 100,
    paddingTop: 5,

    height: 220,
  },
  svg: {
    position: "absolute",
  },
  content: {
    width: windowWidth - 200,
    height: 80,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white",
  },
  content2: {
    width: windowWidth,
    height: 120,
    borderBottomLeftRadius: 50,
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "white",
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: 232,
  },
  circle2: {
    width: 70,
    height: 80,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    top: 40,
    left: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
});
export default Card;
