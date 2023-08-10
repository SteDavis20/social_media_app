import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function MyButton({
  title,
  onPress,
  backgroundColour,
  textColour,
  fontSize,
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
        <View>
          <Text
            style={{
              fontSize: fontSize,
              color: textColour,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    elevation: 2,
    borderColor: "black",
    width: 20,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
