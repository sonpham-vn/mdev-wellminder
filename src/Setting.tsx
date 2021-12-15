import { StackActions, useNavigation } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import moodBackground from "../constants/MoodBackground";
import RecommendCard from "../components/RecommendCard";
import EventCard from "../components/EventCard";
import { BorderlessButton } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

type layout1Prop = StackNavigationProp<RootStackParamList, "Home">;

function OurClass(props: any) {
  const emotion = props.route.params.emotion;
  const navigation = useNavigation<layout1Prop>();

  const [recommendList, setRecommendList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);
  const [articleList, setArticleList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);

  const [state, setState] = useState({
    nextClassImg: { uri: "url" },
  });

  function fetchEventList() {
    setState({
      ...state,
      nextClassImg: {
        uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
    });
    setArticleList([
      {
        title: "Mindful Walking",
        subtitle: "Take a short journey",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "Mindful Cleaning",
        subtitle: "Listen while clean your house",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "Breath Exercise 3",
        subtitle: "5 minutes of breathing",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 1",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 2",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 3",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 1",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 2",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "article 3",
        subtitle: "normal 1",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
    ]);
  }

  useEffect(() => {
    fetchEventList();
  }, []);

  return (
    <ImageBackground
      source={moodBackground(emotion)}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.box1}>
          <View style={styles.box1_1}>
            <TouchableOpacity
              onPress={() => {
                const popAction = StackActions.pop(1);
                navigation.dispatch(popAction);
              }}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={50}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box1_2}>
            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {}}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Ionicons name="ios-card-outline" size={50} color="white" />
                <Text style={[styles.card_text, { alignSelf: "center" }]}>
                  Purchase History
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {}}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Ionicons
                  name="ios-person-circle-outline"
                  size={50}
                  color="white"
                />
                <Text style={[styles.card_text, { alignSelf: "center" }]}>
                  Update Info
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {
                
              }}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Ionicons
                  name="ios-help-buoy-outline"
                  size={50}
                  color="white"
                />
                <Text style={[styles.card_text, { alignSelf: "center" }]}>
                  Help
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {
                
              }}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Ionicons
                  name="ios-information-circle-outline"
                  size={50}
                  color="white"
                />
                <Text style={[styles.card_text, { alignSelf: "center" }]}>
                  About
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.recommend_card]}
              onPress={() => {
                navigation.navigate("Signin");
              }}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Ionicons name="ios-log-out-outline" size={50} color="white" />
                <Text style={[styles.card_text, { alignSelf: "center" }]}>
                  Sign Out
                </Text>
              </View>
            </TouchableOpacity>
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
  },

  box1_2: {
    flex: 2,
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
    backgroundColor: "#ffffff50",
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: "100%",
    height: 70,
    borderWidth: 0,
    borderRadius: 20,
    alignContent: "center",
    padding: 5,
    paddingLeft: 20,
    marginBottom: 10,
  },

  card_text: {
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default OurClass;
