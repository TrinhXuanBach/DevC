import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const feedData =[{
  id: '1',
  name: 'CoderSchool',
  image: require('./assets/1.png'),
  avatar: require('./assets/avatar.jpg'),
  like: 1
},
{
  id: '2',
  name: 'CoderSchool',
  image: require('./assets/1.png'),
  avatar: require('./assets/avatar.jpg'),
  like: 1
},

{
  id: '3',
  name: 'CoderSchool',
  image: require('./assets/1.png'),
  avatar: require('./assets/avatar.jpg'),
  like: 1
}]

function CustomRow ({name, image, avatar, like}){
  return(
    <View style ={styles.container}>
      <View style={styles.avatarWrapper}> 
        <Image style={styles.avatarImage}
          source ={avatar}
          resizeMode='cover'/>
        <Text style={styles.poster}> 
          {name}
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.imagePoster}
          source={image}
          resizeMode= 'contain'
          resizeMode= 'stretch'
        />
      </View>
      <View style={styles.icon}>
        <Feather
          name='heart'
          size={27}
          color='black'
          style={{
            marginLeft: 10
          }}
          onPress={() =>{ 
            alert("Liked" + like)
            like++
           }
          }
        />
        <Feather
          name='message-square'
          size={27}
          color='black'
          style={{
          marginLeft: 10
          }}
        />
        <Feather
          name='share'
          size={27}
          color='black'
          style={{
            marginLeft: 10
          }}/>
      </View>
      <View style={styles.like}>
        <AntDesign name="heart" size={24} color="black" 
          style={{
            marginLeft: 10
          }}/>
        <Text id= "like" style={{fontSize: 20, marginLeft: 10}}>
          {like} likes
        </Text>
      </View>
  </View>);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.headercontainer}>
        <View style={{width: 27, marginLeft: 2 }}/>
        <Image
          source={{
            uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style = {{
            flex: 1,
            height: 40,
          }}
          resizeMode="contain"
         />
        <Feather name ="inbox" style={styles.inbox} size={27}/>
      </View>
      <View style={styles.body}>
          <FlatList
            data={feedData}
            renderItem={({item})=>
              <CustomRow
                name={item.name}
                image = {item.image}
                avatar= {item.avatar}
                like={item.like}
              />
            }
            keyExtractor={item => item.id}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },

  headercontainer: {
    backgroundColor: '#f3f6fa',
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-between"
  },

  inbox: {
    color: 'black',
    marginRight: 2
  },

  body: {
    flex:1,
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23
  },

  poster: {
    fontWeight: 'bold',
    marginLeft: 12,
    fontSize: 15
  },

  imageWrapper:{
    height: 450,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
   
  },

  imagePoster: {
    flex: 1,
    alignSelf: "center"
  },

  icon:{
    flexDirection: 'row',
    marginVertical: 1
  },
  like: {
    flexDirection: 'row',
    alignItems: "center"
  }
});
