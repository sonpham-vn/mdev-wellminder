import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import ClassScreen from './OurClass';
import OurLocationScreen from './Location';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { State } from 'react-native-gesture-handler';


type homeProp = StackNavigationProp<RootStackParamList, 'Main'>;
const Tab = createBottomTabNavigator();

function Main(props: any) {
  const navigation = useNavigation<homeProp>();
  const userFullName = props.route.params.userFullName;
  const[emotion, setEmotion]=useState("normal");
  

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = '';

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Class') {
          iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
        } else if (route.name === 'Location') {
          iconName = focused ? 'ios-location' : 'ios-location-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      
    })}

    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: "#55555580",
        borderTopColor: "transparent",
        position: 'absolute',
        elevation: 0,
        borderRadius: 20,
        padding: 5,


      },
    }}
  >
    <Tab.Screen name="Home" children={()=><HomeScreen emotionChanger={setEmotion} emotion={emotion} userInfo={{userFullName:userFullName}}/>} />
    <Tab.Screen name="Class" children={()=><ClassScreen emotionChanger={setEmotion} emotion={emotion} userInfo={{userFullName:userFullName}}/>} />
    <Tab.Screen name="Location" children={()=><OurLocationScreen emotionChanger={setEmotion} emotion={emotion} userInfo={{userFullName:userFullName}}/>}  />
  </Tab.Navigator>
  );
}

export default Main;