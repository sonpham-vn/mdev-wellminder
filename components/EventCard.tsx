import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { View } from "react-native-animatable";

function ArticleCard({ props, ...rest }: { props: any }) {
  //console.log(props);
  let img = { uri: props.imgurl };
  return (
    <View style={{ flex: 1, marginBottom: 20, flexDirection: "row" }}>
      <View style={{ flex: 0.5 }}>
        <Text style={[styles.card_text, { fontWeight: "bold" }]}>
          {props.title}
        </Text>
        <Text style={styles.card_text}>{props.subtitle}</Text>
      </View>
      <View style={{ flex: 0.5 }}>
        <TouchableOpacity style={[styles.recommend_card]} onPress={() => {}}>
          <Image source={img} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/*<View style={{backgroundColor:"blue"}}>
      <TouchableOpacity style={[styles.recommend_card]} onPress={() => {}}>
        <Image
          source={img}
          style={styles.image}
        ></Image>
      </TouchableOpacity>

      <Text style={[styles.card_text,{fontWeight:'bold'}]}>{props.title}</Text>
      <Text style={styles.card_text}>{props.subtitle}</Text>
    </View>*/

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  recommend_card: {
    alignItems: "center",
    backgroundColor: "#ffffff50",
    marginBottom: 5,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: "100%",
    height: 100,
    borderWidth: 0,
    borderRadius: 20,
    justifyContent: "center",
  },

  card_text: {
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default ArticleCard;
