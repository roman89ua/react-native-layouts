import React from "react";
import { Text, StyleSheet } from "react-native";

import PropTypes from "prop-types";

const MainText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Avenir",
    color: "red",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};
