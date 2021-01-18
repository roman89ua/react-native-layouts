import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import PropTypes from "prop-types";

const MainText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "red",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};
