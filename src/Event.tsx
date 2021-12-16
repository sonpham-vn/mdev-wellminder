import { StackActions, useNavigation } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import moodBackground from "../constants/MoodBackground";
import Ionicons from "react-native-vector-icons/Ionicons";

type EventProp = StackNavigationProp<RootStackParamList, "Home">;

function Event(props: any) {
  const emotion = props.route.params.emotion;
  const eventInfo = props.route.params.eventInfo;
  const navigation = useNavigation<EventProp>();

  const [recommendList, setRecommendList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);
  const [articleList, setArticleList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);

  const [state, setState] = useState({
    nextClassImg: { uri: "url" },
  });
  
  let img = { uri: eventInfo.imgurl };


  return (
    <ImageBackground
      source={moodBackground(emotion)}
      resizeMode="cover"
      style={styles.image}
    >
      <Image source={img} style={styles.image}></Image>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.box1}>
          <View style={styles.box1_1}>
            <TouchableOpacity
              onPress={() => {
                const popAction = StackActions.pop(1);
                navigation.dispatch(popAction);
              }}
              style = {styles.button_shadown}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={50}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box1_2}>
          <View style = {{alignItems:"center", marginBottom: 10}}>
            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {
                Alert.alert(
                  "Success!",
                  "Thank you for register for this event. Details have been sent to your email.",
                  [
                    { text: "OK", onPress: () => {const popAction = StackActions.pop(1);
                      navigation.dispatch(popAction);} }
                  ]
                );
              }}
            >
              
                <Text style={[styles.card_text]}>
                  + Register Now
                </Text>
              
            </TouchableOpacity>
            </View>

              
            <ScrollView >
            <Text style={styles.title_text}>{eventInfo.title}</Text>
              <Text style={styles.subtitle_text}>{eventInfo.subtitle}</Text>

              <Text style={styles.title_text}>Details:</Text>
              <Text style={styles.subtitle_text}>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.

Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.</Text>

              <Text style={styles.title_text}>Number of people:</Text>
              <Text style={styles.subtitle_text}>20</Text>

              <Text style={styles.title_text}>Requirement:</Text>
              <Text style={styles.subtitle_text}>- Strength </Text>
              <Text style={styles.subtitle_text}>- Stamia </Text>
              
            </ScrollView>
          
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },

  boxStyle: {
    padding: 10,
  },

  textStyle: {
    textAlign: "center",
    top: 10,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: "#7ca6d8",
    borderRadius: 5,
  },

  box1: {
    //backgroundColor: "blue",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },

  box1_1: {
    flex: 1,
    marginBottom: 20,
    marginTop: -400
  },

  box1_2: {
    flex: 2,
    marginTop:60,
    marginBottom: 30,
  },

  box2: {
    //backgroundColor: "purple",
    padding: 10,
    marginBottom: 50,
    flex: 1,
    width: "100%",
  },

  image_banner: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    //backgroundColor:'red'
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  welcome_text: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "400",
  },

  welcome_sub_text: {
    fontSize: 24,
    fontWeight: "300",
    color: "#333333",
    marginBottom: 5,
  },

  recommend_card: {
    backgroundColor: "#ff5349",
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: "50%",
    height: 70,
    borderWidth: 0,
    borderRadius: 20,
    alignContent: "center",
    padding: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  button_shadown: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  },

  card_text: {
    paddingLeft: 10,
    fontSize: 18,
    color:"white",
    fontWeight:"bold"
  },

  title_text: {
    paddingLeft: 10,
    fontSize: 18,
    color:"#555555",
    fontWeight:"bold",
    marginBottom: 5
  },

  subtitle_text: {
    paddingLeft: 10,
    fontSize: 18,
    color:"#555555",
    marginBottom: 5
  },
});

export default Event;
