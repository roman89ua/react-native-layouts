import React from "react";
import { StyleSheet, View } from "react-native";

import MainText from "../components/main-text";

const SecondLesson = () => {
  return (
    <View style={styles.container}>
      <MainText style={styles.header}>
        hello react native! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eaque, ipsa.
      </MainText>
      <View style={styles.blueBox}>
        <View style={styles.goldBox} />
      </View>
      <View style={styles.redBox}></View>
    </View>
  );
};
export default SecondLesson;

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    // borderWidth: 10,
    // borderColor: "black",
    // borderRadius: 50,
    shadowColor: "grey",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    // elevation: 10, // for android shadows but it not work as we need
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  goldBox: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  // header: {
  //   fontSize: 20,
  //   fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
  //   fontStyle: "italic",
  //   fontWeight: "600",
  //   color: "tomato",
  //   textTransform: "capitalize",
  //   textDecorationLine: "underline",
  //   textAlign: "left", // "right", "center"
  //   lineHeight: 30,
  // },
  redBox: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
