import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape, portrait } = useDeviceOrientation();
  return (
    // ! DeviceOrientation
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: "100%",
    //       height: landscape ? "100%" : "30%",
    //     }}
    //   />
    // </SafeAreaView>

    // ! Flex, flexbox

    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
