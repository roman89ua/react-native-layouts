import React from "react";
import { StyleSheet, View } from "react-native";

const SecondLesson = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}>
        <View style={styles.goldBox} />
      </View>
      <View style={styles.redBox}></View>
    </View>
  );
};
export default SecondLesson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  goldBox: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  redBox: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
