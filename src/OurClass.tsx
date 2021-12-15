import { useNavigation } from "@react-navigation/native";
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

type layout1Prop = StackNavigationProp<RootStackParamList, "Home">;

function OurClass({
  emotionChanger,
  emotion,
  userInfo,
  ...rest
}: {
  emotionChanger: any;
  emotion: any;
  userInfo: any;
}) {
  const [recommendList, setRecommendList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);
  const [articleList, setArticleList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);

  const [state, setState] = useState({
    nextClassImg: { uri: "url" },
    nextClassTitle: "",
    nextClassSubtitle:""
  });

  function fetchEventList() {
    setState({
      ...state,
      nextClassTitle: "Yoga class with yoda",
      nextClassSubtitle: "Monday December 23th 7:00PM",
      nextClassImg: {
        uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_1.jpg",
      },
    });
    setArticleList([
      {
        title: "Dancing class",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_2.jpg",
      },
      {
        title: "Weekend running",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_3.jpg",
      },
      {
        title: "Weightlifting",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_4.jpg",
      },
      {
        title: "Multitask exercise",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_5.jpg",
      },
      {
        title: "Multitask exercise 2",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_6.jpg",
      },
      {
        title: "Mountain climbing",
        subtitle: "Tue Dec 24th 7:00PM",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_event_7.jpg",
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
        <FlatList
          ListHeaderComponent={
            <View style={styles.box1}>
              <View style={styles.box1_1}>
                <Text style={styles.welcome_text}>
                  {userInfo.userFullName}, your next class is:
                </Text>
              </View>
              <View style={styles.box1_2}>
                <View>
                  <TouchableOpacity
                    style={[styles.recommend_card]}
                    onPress={() => {}}
                  >
                    <Image
                      source={state.nextClassImg}
                      style={styles.image_banner}
                    ></Image>
                      <Text style={[styles.card_text, { fontWeight: "bold" }]}>
                    {state.nextClassTitle}
                  </Text>
                  <Text style={styles.card_text}>{state.nextClassSubtitle}</Text>
                  </TouchableOpacity>

                
                </View>
              </View>
              <Text style={styles.welcome_sub_text}>Upcoming</Text>
            </View>
          }
          style={styles.box2}
          showsVerticalScrollIndicator={false}
          data={articleList}
          keyExtractor={(item, index) => index.toString()}

          renderItem={({ item }) => <EventCard props={item}></EventCard>}
        ></FlatList>
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
  },

  box1_1: {
    flex: 1,
    justifyContent: "flex-end",
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
    height:"60%",
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
    alignItems: "center",
    backgroundColor: "#ffffff50",
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: "100%",
    height: 200,
    borderWidth: 0,
    borderRadius: 20,
    justifyContent: "flex-start",
  },

  card_text: {
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default OurClass;
