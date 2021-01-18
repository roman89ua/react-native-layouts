import React from "react";
import { StyleSheet, View } from "react-native";

const SecondLesson = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
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
  box: {
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
    elevation: 10,
  },
});
