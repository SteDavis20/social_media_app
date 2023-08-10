import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";

import ProfilePost from "../Components/ProfilePost";
import MyButton from "../Components/MyButton";

const profilePictureImage =
  "https://media.licdn.com/dms/image/C4E03AQHrZ6y3pdUm9w/profile-displayphoto-shrink_800_800/0/1612633056823?e=2147483647&v=beta&t=vC6E6JANgdxmZTnnLPc7JWNW_MTHOjGadm1ODUhu9qE";

export default function Profile() {
  const [showFollowers, setShowFollowers] = useState(false);

  const dummyFollowersData = [
    { id: 1, name: "Dave" },
    { id: 2, name: "Michael" },
    { id: 3, name: "Shane" },
    { id: 4, name: "Laura" },
  ];
  const dummyFollowingData = [
    { id: 1, name: "Liam" },
    { id: 2, name: "Michael" },
    { id: 3, name: "Alan" },
    { id: 4, name: "Laura" },
  ];

  const displayFollowers = ({ item }) => (
    <View style={styles.followerItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
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
        <Text style={{ paddingLeft: 20 }}>@Joe_Bloggs</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Number of posts */}
        <Text style={styles.statistic}>18 posts</Text>

        {/* Number of followers */}
        <TouchableOpacity
          onPress={() => {
            setShowFollowers(!showFollowers);
          }}
        >
          <View>
            <Text>100 Followers</Text>
          </View>
          {/* <Text style={styles.statistic}>100 followers</Text> */}
        </TouchableOpacity>
        {showFollowers && (
          <FlatList
            data={dummyFollowersData}
            renderItem={displayFollowers}
            keyExtractor={(item) => item.id}
          />
        )}

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
        <ProfilePost></ProfilePost>
        <ProfilePost></ProfilePost>
        <ProfilePost></ProfilePost>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <ProfilePost></ProfilePost>
        <ProfilePost></ProfilePost>
        <ProfilePost></ProfilePost>
      </View>
      {/* Edit profile */}
      {/* Logout */}
      <StatusBar style="auto" />
    </ScrollView>
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
  profilePicture: {
    width: "25%",
    height: 80,
    borderRadius: 20,
    borderWidth: 2,
  },
  statistic: { padding: 10 },
  username: {},
  name: {},
  bio: {},
  followerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
