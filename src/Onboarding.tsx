import React, { FC } from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import * as Animatable from 'react-native-animatable';
import Pulse from 'react-native-pulse';

type squareProp = {
  isLight: boolean,
  selected: boolean
};

const Square = (props: squareProp) => {
  let backgroundColor;
  if (props.isLight) {
    backgroundColor = props.selected ? '#FED8B1' : '#555555';
  } else {
    backgroundColor = props.selected ? '#FED8B1' : '#555555';
  }
  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor,
      }}
    />
  );
};

const Next = ({ ...props }) => (
  <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:18, color:'#555555'}}>Next</Text>
    </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:18, color:'#555555'}}>Sign In</Text>
    </TouchableOpacity>
);

const Skip = ({ ...props }) => (
  <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:18, color:'#555555'}}>Skip</Text>
    </TouchableOpacity>
);

type homeProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

function Onboarding() {
  const navigation = useNavigation<homeProp>();

  return (
    <OnboardingSwiper
    DotComponent={Square}
    bottomBarColor='FFFFFF00'
    bottomBarHighlight={false}
    controlStatusBar={false}
    titleStyles={{ color: '#77AA46', fontSize: 20 }}
    onSkip={() => navigation.navigate('Signin')}
    onDone={() => navigation.navigate('Signin')}
    SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
    pages={[
      {
        backgroundColor: '#fff',
        title: '',
        subtitle: '',
        image: (<SafeAreaView>
          <Pulse color='#FED8B1' numPulses={3} diameter={4000} speed={10} duration={1000} />
          <View style={styles.headerTop}>
              <Text style={styles.headerTitle}>
              </Text>
              <Text style={styles.headerSubtitle}>WELCOME TO</Text>
            
            <Animatable.View
                duration={10000}
                animation="fadeIn"
            >
              
              <Image resizeMode="contain" style={{ width: 300, height: 100 }} source={require('../assets/wellminder_logo.png')} />
            </Animatable.View>
          </View>
        </SafeAreaView>),
      },
      {
        backgroundColor: '#fff',
        title: '',
        subtitle: '',
        image: (<SafeAreaView>
          
          <View style={styles.headerTop}>
              
             
              <Text style={styles.headerSubtitle}>
                <Text>BREATH</Text>
                <Text style={{color:"brown"}}> IN </Text>
                <Text>AND </Text>
                <Text style={{color:"brown"}}>OUT</Text>
              </Text>
              
            <View>
              <Image resizeMode="contain" style={{ width: 300, height: 300 }} source={require('../assets/Onboarding-1.png')} />
            </View>
            <Text style={styles.headerSubtitle}>Learn our meditation tips</Text>
          </View>
        </SafeAreaView>),
      },
      {
        backgroundColor: '#fff',
        title: '',
        subtitle: '',
        image: (<SafeAreaView>
          
          <View style={styles.headerTop}>
              <Text style={styles.headerSubtitle}>
                <Text>BUILD MORE </Text>
                <Text style={{color:"brown"}}>ENERGY </Text>
              </Text>
              
            <View>
              <Image resizeMode="contain" style={{ width: 300, height: 300 }} source={require('../assets/Onboarding-2.png')} />
            </View>
            <Text style={styles.headerSubtitle}>Go to our classes</Text>
          </View>
        </SafeAreaView>),
      },
      {
        backgroundColor: '#fff',
        title: '',
        subtitle: '',
        image: (<SafeAreaView>
          
          <View style={styles.headerTop}>
              <Text style={styles.headerSubtitle}>
                <Text>MAKE NEW </Text>
                <Text style={{color:"brown"}}>FRIENDS </Text>
              </Text>
            <View>
              <Image resizeMode="contain" style={{ width: 300, height: 300 }} source={require('../assets/Onboarding-3.png')} />
            </View>
            <Text style={styles.headerSubtitle}>Join our weekly group acitivities</Text>
          </View>
        </SafeAreaView>),
      }

    ]}
  />
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  image: {
    width: 10,
    height: 10
  },
  headerTop: {
    alignItems: 'center',
    padding: 10
  },
  headerTitle:{
    top: -50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerSubtitle:{
    padding:10,
    fontSize: 30,
    color:'#555555',
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  greenText:{
    color:'#555555'
  }
})