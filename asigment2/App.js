/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {default as AutoResizeImage} from 'react-native-scalable-image';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions, Image
} from 'react-native';

const imgData = [
  { id: '1', imgSource: require ('./Assets/chi_pu.png')},
  { id: '2', imgSource: require('./Assets/bhri.jpg') },
  { id: '3', imgSource: require('./Assets/lux2_pp_630.jpg') },
  { id: '4', imgSource: require('./Assets/lux3_pp_942.jpg') },
  { id: '5', imgSource: require('./Assets/bhri.jpg') },
  { id: '6', imgSource: require('./Assets/hoang_yen.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);


export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.appbar}>
        <Icon name='arrowleft' size={Dimensions.get('window').width/20} color='rgb(51, 60, 87)'/>
        <Icon name='appstore1' size={Dimensions.get('window').width/20} color='rgb(51, 60, 87)'/>
      </View>
      

      <View style={styles.wrapperinformation}>
        <Image source={require ('./Assets/chi_pu.png')} 
              style={styles.avatarimage}
              resizeMode="cover"/>

        <View style={styles.wrapperinformationdescription}>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{fontSize: 20}}>
                YUI HATANO
              </Text>
            </View>
            
            <View style={{marginLeft: 10, flex: 1}}>
              <Text style={{color: 'aqua'}}>
                Diễn viên
              </Text>
            </View>

            <View style={{flex: 1, marginLeft: 10, flexDirection: 'row'}}>
              <View style={{flex: 2.5,
                backgroundColor: 'rgb(71,113,246)', 
                alignContent: 'center',
                borderRadius: 20}}>
                <Text style={{
                  paddingTop: 10,
                  textAlign: 'center',
                  color: 'white'
                }}>
                  Follow
                </Text>
              </View>
              
              <View style={{flex: 1.5, backgroundColor: 'rgb(120,213,250)',borderRadius: 20, marginLeft: 5}}>
                <View style={{ alignItems: 'center', padding: 5}}> 
                  <Icon name='caretright' size={25} color='white' />
                </View>
              </View>
            </View>
        </View>
      </View>
      <View style={styles.wrappers}>
        <View style={{flex: 1}}>
          <Text style={{
            fontSize: 40, 
            textAlign:'center',
            fontWeight: "bold"
          }}>
            210
          </Text>

          <Text style={{
            fontSize: 15, textAlign:'center', color:'rgb(120,213,250)'
          }}>
            Photos
          </Text>
        </View>

        <View style={{flex: 1}}>
        <Text style={{
            fontSize: 40, 
            textAlign:'center',
            fontWeight: "bold"
          }}>
            15K
          </Text>

          <Text style={{
            fontSize: 15, textAlign:'center', color:'rgb(120,213,250)'
          }}>
            Followers
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={{
            fontSize: 40, 
            textAlign:'center',
            fontWeight: "bold"
          }}>
            605
          </Text>

          <Text style={{
            fontSize: 15, textAlign:'center', color:'rgb(120,213,250)'
          }}>
            Following
          </Text>
        </View>
      </View>

    
      <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
          style={{
            flexDirection: 'column'
          }}
        >
          {imgData.slice(0, centerImgData).map(item => {
            return <AutoResizeImage source = {item.imgSource}
                      width = {Dimensions.get('window').width/2.5}
                      borderRadius = {30}
                      marginTop = {10}
                      />;

          })}
        </View>
        
        <View
          style={{
            flexDirection: 'column'
          }}>
          {imgData.slice(centerImgData).map(item => {
            return <AutoResizeImage source = {item.imgSource}
                      width = {Dimensions.get('window').width/2.5}
                      borderRadius = {20} 
                      marginTop = {10}
                      />;

          })}

      </View>
      </ScrollView>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    margin: 25
  },

  appbar: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  wrapperinformation: {
    flexDirection: "row",
    marginTop:10,
    marginLeft:10,
    marginTop:10,
  },

  avatarimage:{
    flex: 2,
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    borderRadius: Dimensions.get('window').width/6
  },

  wrapperinformationdescription: {
    flex: 3,
    flexDirection: "column",
  },

  wrappers:{
    flexDirection: 'row',
    marginTop :30
  }, 
})



































































