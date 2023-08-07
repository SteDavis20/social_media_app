import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import UserPost from "../Components/UserPost";

const profilePictureImage =
  "https://media.licdn.com/dms/image/C4E03AQHrZ6y3pdUm9w/profile-displayphoto-shrink_800_800/0/1612633056823?e=2147483647&v=beta&t=vC6E6JANgdxmZTnnLPc7JWNW_MTHOjGadm1ODUhu9qE";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile page!</Text>
      {/* Profile picture */}
      <View style={{ flexDirection: "row" }}>
        <Image
          // source={require("../assets/icon.png")}
          source={{
            uri: profilePictureImage,
          }}
          style={styles.profilePicture}
        />
        {/* Username */}
        <Text>@Joe_Bloggs</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {/* Number of posts */}
        <Text style={styles.statistic}>18 posts</Text>

        {/* Number of followers */}
        <Text style={styles.statistic}>100 followers</Text>

        {/* Number of following */}
        <Text style={styles.statistic}>110 following</Text>
      </View>

      {/* Name */}
      <Text style={{}}>Joe Bloggs</Text>

      {/* Bio */}
      <Text style={{}}>Irish, TCD '27 CSB Graduate, Software Engineer</Text>

      {/* Highlights */}

      {/* Display posts */}
      {/* Bio */}
      <View style={{ paddingTop: 40 }}>
        <Text style={{ textAlign: "left" }}>Posts</Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <UserPost></UserPost>
        <UserPost></UserPost>
        <UserPost></UserPost>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <UserPost></UserPost>
        <UserPost></UserPost>
        <UserPost></UserPost>
      </View>
      {/* Edit profile */}
      {/* Logout */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 30,
    paddingTop: 80,
    // alignItems: "center",
    // justifyContent: "center",
  },
  profilePicture: { width: 100, height: 100 },
  statistic: { padding: 10 },
  username: {},
  name: {},
  bio: {},
});
