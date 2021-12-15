import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
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
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import moodBackground from "../constants/MoodBackground";

type layout1Prop = StackNavigationProp<RootStackParamList, "Home">;
const { width, height } = Dimensions.get("screen");
const ASPECT_RATIO = width / height;
const LATITUDE = 43.64978;
const LONGITUDE = -79.37851;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 1;

function Location({
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
    { title: "", subtitle: "", imgurl: { uri: "url" }, lat: 0.0, long: 0.0 },
  ]);

  const [state, setState] = useState({
    forceRefresh: Math.floor(Math.random() * 100),
    nextClassImg: { uri: "" },
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    markers: [
      {
        coordinate: { latitude: LATITUDE, longitude: LONGITUDE },
        key: id++,
      },
    ],
    data: {},
    date: new Date(),
    address: "",
    mode: "date",
    showPicker: false,
    activeIndex: 0,
  });

  function branchButton(props: any) {
    const item = props.item;
    const index = props.index;
    //console.log(index);
    if (index == state.activeIndex) {
      return (
        <View>
          <TouchableOpacity
            style={[styles.recommend_card, { borderWidth: 2 }]}
            onPress={() => {
              setState({
                ...state,
                activeIndex: index,
                region: {
                  latitude: item.lat,
                  longitude: item.long,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                },
                forceRefresh: Math.floor(Math.random() * 100),
                markers: [
                  {
                    coordinate: {
                      latitude: item.lat,
                      longitude: item.long,
                    },
                    key: id++,
                  },
                ],
              });
            }}
          >
            <Image source={item.imgurl} style={styles.image_banner}></Image>
            <Text style={[styles.card_text, { fontWeight: "bold" }]}>
              {item.title}
            </Text>
            <Text style={styles.card_text}>{item.subtitle}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity
          style={[styles.recommend_card]}
          onPress={() => {
            setState({
              ...state,
              activeIndex: index,
              region: {
                latitude: item.lat,
                longitude: item.long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
              forceRefresh: Math.floor(Math.random() * 100),
              markers: [
                {
                  coordinate: {
                    latitude: item.lat,
                    longitude: item.long,
                  },
                  key: id++,
                },
              ],
            });
          }}
        >
          <Image source={item.imgurl} style={styles.image_banner}></Image>
          <Text style={[styles.card_text, { fontWeight: "bold" }]}>
            {item.title}
          </Text>
          <Text style={styles.card_text}>{item.subtitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function fetchArticleList() {
    setArticleList([
      {
        title: "Main Branch",
        subtitle: "100 Yonge Street Toronto\n9:00~21:00",
        imgurl: {
          uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_building_1.jpg",
        },
        lat: 43.64978,
        long: -79.37851,
      },
      {
        title: "Yonge Branch",
        subtitle: "150 Yonge Street Toronto\n9:00~21:00",
        imgurl: {
          uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_building_2.jpg",
        },
        lat: 43.670597,
        long: -79.38694,
      },
      {
        title: "Dundas Branch",
        subtitle: "200 Yonge Street Toronto\n9:00~21:00",
        imgurl: {
          uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_building_3.jpg",
        },
        lat: 43.65567,
        long: -79.38396,
      },
      {
        title: "College Branch",
        subtitle: "250 Yonge Street Toronto\n9:00~21:00",
        imgurl: {
          uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_building_4.jpg",
        },
        lat: 43.6603,
        long: -79.38846,
      },
      {
        title: "Queen Branch",
        subtitle: "300 Yonge Street Toronto\n9:00~21:00",
        imgurl: {
          uri: "https://blueloy.s3.ca-central-1.amazonaws.com/sample_building_5.jpg",
        },
        lat: 43.65358,
        long: -79.37382	,
      },
    ]);
  }

  useEffect(() => {
    fetchArticleList();
  }, []);

  return (
    <ImageBackground
      source={moodBackground(emotion)}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.box1}>
          <Text style={styles.welcome_text}>
            Need a direction, {userInfo.userFullName}?
          </Text>
          <MapView
            style={styles.map}
            region={state.region}
            key={state.forceRefresh}
            onPress={(e) => {}}
          >
            {state.markers.map((marker) => (
              <Marker key={marker.key} coordinate={marker.coordinate} />
            ))}
          </MapView>
        </View>
        <FlatList
          style={styles.box2}
          showsVerticalScrollIndicator={false}
          data={articleList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => branchButton({ item, index })}
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

  box1: {
    paddingLeft: 10,
    paddingRight: 10,
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
    //backgroundColor: "red",
    padding: 10,
    paddingTop: 5,
    marginBottom: 50,
    flex: 2,
    width: "100%",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  image_banner: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    //backgroundColor:'red'
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
    fontSize: 24,
    color: "#333333",
    marginBottom: 10,
    fontWeight: "300",
  },

  welcome_sub_text: {
    fontSize: 24,
    fontWeight: "300",
    color: "#333333",
    marginBottom: 5,
  },

  map: {
    width: "100%",
    height: "85%",
    borderRadius: 40,
  },

  card_text: {
    paddingLeft: 10,
    fontSize: 18,
    textAlign: "center",
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
    marginBottom: 10,
  },
});

export default Location;
