import React from "react"
import { Button, SafeAreaView,
        StyleSheet,
        Text ,
        TouchableOpacity,
        View,
        Image, Dimensions} from "react-native"

import Choices from "../data/Choices.js";


let pointUser = 0, pointComputer = 0


function GameInteraction(props){
    return(
        <TouchableOpacity 
            style = {styles.button}
            onPress ={() => props.event(props.id)}>
            <Text style = {{textAlign: 'center', color: 'white'}}>
                {props.name}
            </Text>
        </TouchableOpacity>
        
    )  
}

function ImageScreen(props){
    return(
        <Image 
            style = {styles.image}
            
            source={props.src === null ? require ("../assets/splash.png"):{
                uri: props.src,
              }}
            resizeMode = "contain"
            />
    )
    
}


function Point(props){
    return(
        <View style={styles.result}>
            <Text backgroundColor = 'blue'>
                User: {props.userPoint}
            </Text>

            <Text backgroundColor = 'blue'>
                Computer: {props.computerPoint}
            </Text>
        </View>
    )
}

function Result(user, computer) {
    if(user === computer){
        return 0
    }
    if(user === 0){
        if(computer === 1) return -1
        else return 1
    }
    if(user === 1){
        if(computer === 2) return -1
        else return 1
    }
    if(user === 2){
        if(computer === 1) return -1
        else return 1
    }
}

function Notification(props){
    return(
        <View style = {{alignItems: "center"}}>
            <Text style = {{ color: 'red', textAlign: "center" }}>
                {props.notification}
            </Text>
        </View>
    )
    
}

class MainScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userPoint: pointUser,
            computerPoint: pointComputer,
            notification: "", 
            notificationColor: "black",
            imageUser: null,
            imageComputer: null
        }
    }

    addEvent = (id) => {
        const position = Math.floor(Math.random()*3)
        const result = Result(id, position)
        if (result === 0){
            this.setState({
                imageUser: Choices[id].uri,
                imageComputer: Choices[position].uri, 
                notification: "Tie Game!",
                userPoint: pointUser,
                computerPoint: pointComputer, 
            })  
        }else if (result === -1){
            pointComputer++
            this.setState({
                imageUser: Choices[id].uri,
                imageComputer: Choices[position].uri, 
                notification: "Loose Game!",
                userPoint: pointUser,
                computerPoint: pointComputer, 
            })  
        }else{
            pointUser++
            this.setState({
                imageUser: Choices[id].uri,
                imageComputer: Choices[position].uri, 
                notification: "Win Game!",
                userPoint: pointUser,
                computerPoint: pointComputer, 
            })  
        }
       
    }

    render(){
        return(
        <SafeAreaView style = {styles.container}>

            <Point
                userPoint={this.state.userPoint}
                computerPoint={this.state.computerPoint}/>
            <Notification
                notification={this.state.notification}/>
            <View style={styles.gameScreen}>
                <ImageScreen 
                    src = {this.state.imageUser}/>
                <ImageScreen 
                    src = {this.state.imageComputer}/>
            </View>
            <View style={styles.gameInteraction}> 
                <GameInteraction
                    name = "Rock"
                    event= {this.addEvent}
                    id = {0}/>
                <GameInteraction
                    name = "Paper"
                    event= {this.addEvent}
                    id = {1}/>
                <GameInteraction
                    name = "Scissors"
                    event= {this.addEvent}
                    id = {2}/>
            </View>

           
        </SafeAreaView>
        )
       
    }

}

export default MainScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20
    },

    result: {
        backgroundColor: 'yellow',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    gameScreen: {
        flex:2.5,
        borderWidth:1,
        borderColor:'blue',
        flexDirection: 'row'
    },

    gameInteraction: {
        flex:0.5,
        alignItems:'center',
        justifyContent: 'center'
    },

    button: {
        width: 200, 
        backgroundColor: "red",
        margin: 2,
        borderRadius:25
    },

    image: {
        width: Dimensions.get('window').width/2,
        margin: 2
    }
  });