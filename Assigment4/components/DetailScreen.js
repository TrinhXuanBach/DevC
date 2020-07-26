import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function DetailScreen( {route} ){
    const { item } = route.params
    return(
        <SafeAreaView style = {styles.container}>
             <Text>{item.body}</Text>
        </SafeAreaView>
       ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})