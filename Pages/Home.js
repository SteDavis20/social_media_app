import { StyleSheet, Text, View, ScrollView } from "react-native";

import UserPost from "../Components/UserPost";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home page!</Text>
        <UserPost />
        <UserPost />
        <UserPost />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
