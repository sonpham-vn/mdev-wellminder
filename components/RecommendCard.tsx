import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from "react-native";
import { View } from "react-native-animatable";

function RecommendCard({ props, ...rest }: { props: any }) {
  //console.log(props);
  let img = { uri: props.imgurl };
  return (
    <View>
      <TouchableOpacity style={[styles.recommend_card]} onPress={() => {}}>
        <Image
          source={img}
          style={styles.image}
        ></Image>
      </TouchableOpacity>

      <Text style={[styles.card_text,{fontWeight:'bold'}]}>{props.title}</Text>
      <Text style={styles.card_text}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 100,
    borderRadius: 20
  },

  recommend_card: {
    alignItems: "center",
    backgroundColor: "#ffffff50",
    margin: 5,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: 200,
    height: 120,
    borderWidth: 0,
    borderStartColor: "white",
    borderEndColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderRadius: 20,
    borderColor: "#555555",
    justifyContent: "center",
  },

  card_text: {
    paddingLeft:10,
    fontSize: 18,
    width: 200
  }
});

export default RecommendCard;
