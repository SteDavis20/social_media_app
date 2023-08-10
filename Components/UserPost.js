import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import ImageButton from "./ImageButton";

const windowHeight = Dimensions.get("window").height;

const profilePictureImage =
  "https://media.licdn.com/dms/image/C4E03AQHrZ6y3pdUm9w/profile-displayphoto-shrink_800_800/0/1612633056823?e=2147483647&v=beta&t=vC6E6JANgdxmZTnnLPc7JWNW_MTHOjGadm1ODUhu9qE";

const handleLike = () => {
  console.log("Post liked");
};

const handleComment = () => {
  console.log("Post commented on");
};

export default function UserPost() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: profilePictureImage,
          }}
          style={styles.postProfilePicture}
        />
        <Text style={{ color: "black" }}>@username!</Text>
      </View>
      <View>
        <Image
          source={{ uri: profilePictureImage }}
          style={styles.profilePicture}
        />
        <View style={{ flexDirection: "row" }}>
          <ImageButton
            onPress={handleLike}
            backgroundColour="fff"
            iconSize={10}
            iconColour="eee"
            iconName="thumbs-o-up"
          />
          <ImageButton
            onPress={handleComment}
            backgroundColour="fff"
            iconSize={10}
            iconColour="eee"
            iconName="comment"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  profilePicture: {
    width: "80%",
    height: windowHeight * 0.2,
    borderWidth: 2 /*margin: 30 */,
  },
  postProfilePicture: { width: 30, height: 30, borderWidth: 2 },
});
