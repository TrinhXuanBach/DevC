import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [markers, setMakers] = useState([{latitude: 20.1585646,
    longitude: 105.9245955}])
  const [pictures, setPictures] = useState([])

  const getLoction = async () => {
    let {status} =  await Location.requestPermissionsAsync();
    if(status != 'granted') {
      setErrorMsg('Permission to access location was denide');
    }

    let location = await Location.getCurrentPositionAsync({})
    const jsonData = await location.json
    setLocation(jsonData)
    console.log(location.coords)
  }

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setPictures([...pictures,{ image: result.uri }]);
      }
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() =>{
      getLoction()
      getPermissionAsync()
    }, []
  )
/* Lỗi không chọn được ảnh */
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} provider = {PROVIDER_GOOGLE}
        region = {{
          latitude: 20.1585646,
          longitude: 105.9245955,
        }}
        onPress={(e) => {
          setMakers([...markers, e.nativeEvent.coordinate] )
        }}>
          {markers.map((maker) => (
            <Marker
              key = {markers.indexOf(maker)}
              coordinate = {{
                latitude: maker.latitude,
                longitude: maker.longitude
              }}
              title = {String(markers.indexOf(maker))}>
                <Callout onPress = {() => {
                  pickImage()
                  console.log( pictures[markers.indexOf(maker)].image)
                }}>
                    <View style = {styles.image}> 
                      {pictures.length > 0 && <Image source={{ uri: pictures[markers.indexOf(maker)].image}} 
                      style = {{width: 50, height: 50}}/>}
                    </View>
                </Callout>
              </Marker>
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    width: 50,
    height: 50,
    //backgroundColor: 'red'
  }
});