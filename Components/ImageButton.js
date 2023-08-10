import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function ImageButton({
  onPress,
  backgroundColour,
  iconSize,
  iconColour,
  iconName,
}) {
  return (
    <View
      style={[
        styles.button,
        {
          backgroundColor: backgroundColour,
        },
      ]}
    >
      <Pressable onPress={onPress}>
        <Icon name={iconName} size={iconSize} color={iconColour} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    // marginRight: 5,
    elevation: 2,
    borderColor: "black",
    width: 20,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
