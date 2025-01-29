import { Text, View, StyleSheet } from "react-native";

import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('@/assets/images/background-Image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center"
  },
  text :{
    color: "#fff",
  },
  button :{
    fontSize : 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer : {
    flex: 1,
  },
});
