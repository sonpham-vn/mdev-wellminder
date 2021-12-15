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
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import moodBackground from "../constants/MoodBackground";
import RecommendCard from "../components/RecommendCard";
import ArticleCard from "../components/ArticleCard";
import { BorderlessButton } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

type layout1Prop = StackNavigationProp<RootStackParamList, "Setting">;

function Home({
  emotionChanger,
  emotion,
  userInfo,
  ...rest
}: {
  emotionChanger: any;
  emotion: any;
  userInfo: any;
}) {
  const navigation = useNavigation<layout1Prop>();
  const [recommendList, setRecommendList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);
  const [articleList, setArticleList] = useState([
    { title: "", subtitle: "", imgurl: "url" },
  ]);
  const [emotionList, setEmotionList] = useState([
    {
      text: "normal",
      color: "#fc6a0380",
      recommendText: "Recommend for you:",
      active: true,
    },
    {
      text: "delight",
      color: "#fe7d6a80",
      recommendText: "Good to hear. I'm happy too.",
      active: false,
    },
    {
      text: "fine",
      color: "#63c5da80",
      recommendText: "How about do a quick session now?",
      active: false,
    },
    {
      text: "angry",
      color: "#8b008b80",
      recommendText: "Take a deep breath!",
      active: false,
    },
    {
      text: "gloomy",
      color: "#9a7b4f80",
      recommendText: "Sad to hear that. Let's rest!",
      active: false,
    },
  ]);
  const [state, setState] = useState({
    activeIndex: 0,
    recommendTitle: "Recommend for you:",
  });

  function moodButton(props: any) {
    const item = props.item;
    const index = props.index;
    //console.log(index);
    if (index == state.activeIndex) {
      return (
        <TouchableOpacity
          style={[
            styles.mood_button,
            { backgroundColor: item.color, borderWidth: 2 },
          ]}
          onPress={() => {
            emotionChanger(item.text.toLowerCase());
            fetchRecommendList(item.text.toLowerCase());
            setState({
              activeIndex: index,
              recommendTitle: emotionList[index].recommendText,
            });
          }}
        >
          <Text style={{ color: "#fcfcfc", textTransform: "capitalize" }}>
            {item.text}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.mood_button, { backgroundColor: item.color }]}
        onPress={() => {
          emotionChanger(item.text);
          fetchRecommendList(item.text);
          setState({
            activeIndex: index,
            recommendTitle: emotionList[index].recommendText,
          });
        }}
      >
        <Text style={{ color: "black", textTransform: "capitalize" }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  }

  function fetchRecommendList(emotion: string) {
    switch (emotion) {
      case "normal":
        setRecommendList([
          {
            title: "Mindful Walking",
            subtitle: "Take a short journey",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
          },
          {
            title: "Mindful Cleaning",
            subtitle: "Listen while clean your house",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_2.png",
          },
          {
            title: "Breath Exercise 3",
            subtitle: "5 minutes of breathing",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_3.png",
          },
        ]);
        break;

      case "delight":
        setRecommendList([
          {
            title: "Raise your happiness",
            subtitle: "Enjoy the feeling",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_4.png",
          },
          {
            title: "Bellows Breath",
            subtitle: "Increase your energy",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_5.png",
          },
          {
            title: "Relaxing Breathing",
            subtitle: "4-7-8 breathing exercise",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_6.png",
          },
        ]);
        break;

      case "gloomy":
        setRecommendList([
          {
            title: "Counting the Breath",
            subtitle: "Strive for a ten-minute breathing practice",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_7.png",
          },
          {
            title: "Body Scan Meditation",
            subtitle: "Tune out distractions while focusing on various areas",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_8.png",
          },
          {
            title: "Extended scan",
            subtitle: "Immediately release tension",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_9.png",
          },
        ]);
        break;

      case "fine":
        setRecommendList([
          {
            title: "Diaphragmatic Breathing",
            subtitle: "Ease stress and anxiety",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
          },
          {
            title: "Breathing shallow",
            subtitle: "Contribute to feelings of anxiety, panic, or stress",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_2.png",
          },
          {
            title: "Progressive Muscle Relaxation",
            subtitle: "Tense and release all the muscles in your body",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_3.png",
          },
        ]);
        break;
      case "angry":
        setRecommendList([
          {
            title: "Visualization",
            subtitle: "Beautiful way to calm and relax the body",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_4.png",
          },
          {
            title: "Blackboard Technique",
            subtitle: "Erasing them in your mind",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_5.png",
          },
          {
            title: "Focused Meditation",
            subtitle: "Improve your concentration and focus",
            imgurl:
              "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_6.png",
          },
        ]);
        break;
    }
  }

  function fetchArticleList() {
    setArticleList([
      {
        title: "Mindful Walking",
        subtitle: "Take a short journey",
        imgurl: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img.png",
      },
      {
        title: "Mindful Cleaning",
        subtitle: "Listen while clean your house",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_2.png",
      },
      {
        title: "Breath Exercise 3",
        subtitle: "5 minutes of breathing",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_3.png",
      },
      {
        title: "Raise your happiness",
        subtitle: "Enjoy the feeling",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_4.png",
      },
      {
        title: "Bellows Breath",
        subtitle: "Increase your energy",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_5.png",
      },
      {
        title: "Relaxing Breathing",
        subtitle: "4-7-8 breathing exercise",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_6.png",
      },
      {
        title: "Counting the Breath",
        subtitle: "Strive for a ten-minute breathing practice",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_7.png",
      },
      {
        title: "Visualization",
        subtitle: "Beautiful way to calm and relax the body",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_8.png",
      },
      {
        title: "Focused Meditation",
        subtitle: "Improve your concentration and focus",
        imgurl:
          "https://blueloy.s3.ca-central-1.amazonaws.com/sample_img_9.png",
      },
    ]);
  }

  useEffect(() => {
    fetchRecommendList(emotion);
    fetchArticleList();
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
                <View style={styles.box1_1_1}>
                  <Text style={styles.welcome_text}>
                    Good morning, {userInfo.userFullName}
                  </Text>

                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      marginTop: -20,
                      marginRight: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Setting", { emotion: emotion });
                      }}
                    >
                      <Ionicons
                        name="ios-person-circle-outline"
                        size={50}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.welcome_sub_text}>
                  How are you feeling today?
                </Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={emotionList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => moodButton({ item, index })}
                />
              </View>
              <View style={styles.box1_2}>
                <Text style={styles.welcome_sub_text}>
                  {state.recommendTitle}
                </Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={recommendList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <RecommendCard props={item}></RecommendCard>
                  )}
                />
              </View>
              <Text style={styles.welcome_sub_text}>Explore more</Text>
            </View>
          }
          style={styles.box2}
          showsVerticalScrollIndicator={false}
          data={articleList}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => <ArticleCard props={item}></ArticleCard>}
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
    //backgroundColor: "red",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 30,
  },

  box1_1: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  box1_1_1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },

  box1_2: {
    flex: 2,
    marginBottom: 30,
  },

  box2: {
    //backgroundColor: "red",
    padding: 10,
    marginBottom: 50,
    flex: 1,
    width: "100%",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  mood_button: {
    alignItems: "center",
    backgroundColor: "#ffffff50",
    margin: 5,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: 70,
    height: 40,
    borderWidth: 0,
    borderStartColor: "white",
    borderEndColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderRadius: 40,
    borderColor: "#555555",
    justifyContent: "center",
  },

  welcome_text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
  },

  welcome_sub_text: {
    fontSize: 24,
    fontWeight: "300",
    color: "#333333",
    marginBottom: 5,
  },
});

export default Home;
