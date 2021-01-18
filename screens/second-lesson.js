import React from "react";
import {
  // Dimensions,
  // Platform,
  // StatusBar,
  // SafeAreaView,
  StyleSheet,
  View,
  // Text,
} from "react-native";

// import {
// useDimensions,
// useDeviceOrientation,
// } from "@react-native-community/hooks";

const SecondLesson = () => {
  // const { landscape, portrait } = useDeviceOrientation();
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
    borderWidth: 10,
    borderColor: "black",
    borderRadius: 50,
  },
});
