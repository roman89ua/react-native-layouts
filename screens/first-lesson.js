import React from "react";
import {
  // Dimensions,
  // Platform,
  // StatusBar,
  // SafeAreaView,
  // StyleSheet,
  View,
} from "react-native";
// import {
// useDimensions,
// useDeviceOrientation,
// } from "@react-native-community/hooks";

const FirstLesson = () => {
  // const { landscape, portrait } = useDeviceOrientation();
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
          top: 20,
          left: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          left: 20, // all components has reletive positioning by default
          top: 20,
        }}
      />
    </View>
  );
};
export default FirstLesson;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     },
// });
