import React from "react";
import { Text } from "react-native";

import PropTypes from "prop-types";

import stylesIos from "./styles.ios";

const MainText = ({ children }) => {
  return <Text style={stylesIos.text}>{children}</Text>;
};

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};
