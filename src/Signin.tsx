import React from "react";
import { View, Text, Platform, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Pulse from "react-native-pulse";
import SigninTab from "./SigninTab";
import SignupTab from "./SignupTab";

type homeProp = StackNavigationProp<RootStackParamList, "Main">;

function Singin() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pulse
          color="#FED8B1"
          numPulses={3}
          diameter={4000}
          speed={10}
          duration={1000}
        />
        <Image
          resizeMode="contain"
          style={{ width: 300, height: 100 }}
          source={require("../assets/wellminder_logo.png")}
        />
        <Text style={styles.text_header}>Your journey await!</Text>
        <Image
          resizeMode="contain"
          style={{ width: 300, height: 250 }}
          source={require("../assets/Home-Icon.png")}
        />
      </View>

      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "#FED8B100",
          },
          indicatorStyle: {
            backgroundColor: "darkred",
          },
        }}
      >
        <Tab.Screen name="Sign In" component={SigninTab} />
        <Tab.Screen name="Sign Up" component={SignupTab} />
      </Tab.Navigator>
    </View>
  );
}

export default Singin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf1e4",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "Cochin",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -5,
    paddingLeft: 10,
    color: "#96d459",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
