import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const profilePictureImage =
  "https://media.licdn.com/dms/image/C4E03AQHrZ6y3pdUm9w/profile-displayphoto-shrink_800_800/0/1612633056823?e=2147483647&v=beta&t=vC6E6JANgdxmZTnnLPc7JWNW_MTHOjGadm1ODUhu9qE";

export default function UserPost() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profilePictureImage }}
        style={styles.profilePicture}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: { width: 100, height: 100 },
});
