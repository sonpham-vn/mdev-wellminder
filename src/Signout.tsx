import React from "react";
import { View, Text, Platform, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import Pulse from "react-native-pulse";
import { StackActions, useNavigation } from "@react-navigation/native";

type signinProp = StackNavigationProp<RootStackParamList, "Signin">;

function Signout() {

  const navigation = useNavigation<signinProp>();

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
        
        <Image
          resizeMode="contain"
          style={{ width: 300, height: 250 }}
          source={require("../assets/Signout-Icon.png")}
        />



<Text style={styles.text_header}>Thank you for using our app!</Text>
<View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: "#FED8B1" }]}
            onPress={() => {
              const popAction = StackActions.pop(1);
                navigation.dispatch(popAction);
            }}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#555",
                },
              ]}
            >
              Back to Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default Signout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf1e4",
  },
  header: {
    flex: 1,
    justifyContent: "center",
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
    textAlign:"center"
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
    width: "80%",
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
