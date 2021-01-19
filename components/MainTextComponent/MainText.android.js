import React from "react";
import { Text } from "react-native";

import PropTypes from "prop-types";
import stylesAndroid from "./styles";

const MainText = ({ children }) => {
  return <Text style={stylesAndroid.text}>{children}</Text>;
};

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};
