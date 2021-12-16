import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import Main from "./Main";
import Onboarding from "./Onboarding";
import Signin from "./Signin";
import Setting from "./Setting";
import Event from "./Event";
import Signout from "./Signout";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ title: "Onboarding", headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Signin",
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Main", headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ title: "Setting", headerShown: false }}
      />

      <Stack.Screen
        name="Event"
        component={Event}
        options={{ title: "Event", headerShown: false }}
      />

<Stack.Screen
        name="Signout"
        component={Signout}
        options={{ title: "Signout", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
