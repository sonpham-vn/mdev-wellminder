import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "react-native-paper";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { State } from "react-native-gesture-handler";

type homeProp = StackNavigationProp<RootStackParamList, "Main">;

function SigninTab() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const textInputChange = (val: string) => {
    const reg = /\S+@\S+/;
    if (reg.test(val) === true) {
      setData(
        {
          ...data,
          email: val,
          check_textInputChange: true,
          isValidUser: true,
        }
      );
    } else {
      setData(
        {
          ...data,
          email: val,
          check_textInputChange: false,
          isValidUser: false,
        }
      );
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 8) {
      setData(
        {
          ...data,
          password: val,
          isValidPassword: true,
        }
      );
    } else {
      setData(
        {
          ...data,
          password: val,
          isValidPassword: false,
        }
      );
    }
  };

  const updateSecureTextEntry = () => {
    setData(
      {
        ...data,
        secureTextEntry: !data.secureTextEntry,
      }
    );
  };

  const handleValidUser = (val: string) => {
    const reg = /\S+@\S+/;
    if (reg.test(val) === true) {
      setData(
        {
          ...data,
          isValidUser: true,
        }
      );
    } else {
      setData(
        {
          ...data,
          isValidUser: false,
        }
      );
    }
  };

  const signinActivity = async () => {
    //setData({...data,email:"etest7@gmail.com",password:"abcdef"})
    try {
      const encryptedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        data.password
      );
      console.log("Encrypted Pass: ", encryptedPassword);
      const response = await fetch(
        "https://zjil8ive37.execute-api.ca-central-1.amazonaws.com/dev/wm/signin",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserName: data.email,
            Password: encryptedPassword,
          }),
        }
      );

      const json = await response.json();
      if (json.UserId) {
        await AsyncStorage.setItem("userId", json.UserId);
        setData({ ...data, email: "", password: "" });
        navigation.navigate("Main", { userFullName: json.FullName });
      } else {
        Alert.alert(
          " ",
          "ERROR: " + json.Error,
          [
            {
              text: "OK",
              onPress: () => {},
            },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const navigation = useNavigation<homeProp>();

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: "#F1F1F1",
          },
        ]}
      >
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="darkred" size={20} />
          <TextInput
            placeholder="johndoe@gmail.com"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            value = {data.email}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#FED8B1" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : null}
        {/*<Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Email must contain @</Text>
                </Animatable.View>*/}

        <View style={[styles.action, { marginTop: 45 }]}>
          <Feather name="lock" color="darkred" size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            value = {data.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : null}
        {
          null /*
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>*/
        }

        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: "#FED8B1" }]}
            onPress={() => signinActivity()}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#555",
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SigninTab;

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
