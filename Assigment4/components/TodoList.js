import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TODOS from '../data/data.js'
import { FlatList, ScrollView } from 'react-native-gesture-handler';


function Item(props){ 
    return (
    <TouchableOpacity style={styles.item}
        onPress={() => {(props.navigation.navigate('Detail', {
            item: props.item,
        }))
        }}>
      <Text>{props.item.body}</Text>
    </TouchableOpacity>
  );
}

function setData(setDatas, datas, body, setBody){
    datas.push({id: datas.length + 1, status: "Active", body: body})
    let newTodoList = [...datas]
    setBody('')
    setDatas(newTodoList)
}

export default function TodoList({ navigation }){
    const [datas, setDatas] = useState(TODOS)
    const [body, setBody] = useState('')
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.list}>
                <FlatList
                    style={{flex: 1}}
                    data={datas}
                    renderItem={
                        ({ item }) => (
                            <Item item = {item} navigation = {navigation}/>
                        )
                    }
                    keyExtractor={item => item.id}
                    extraData={datas}
                />
            </View>

            <View style = {styles.addtodo}>
                <TextInput style = {{backgroundColor: 'white'}}
                    onChangeText = {text => setBody(text)}
                    value = {body}>
                </TextInput>
                <TouchableOpacity style={{marginLeft: 10, 
                    backgroundColor: 'blue', 
                    borderColor: 'black', 
                    borderWidth: 1,
                    borderRadius: 5,}}
                    
                    onPress = {() => setData(setDatas, datas, body, setBody)}>
                    <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    list: {
        flex: 4,
        backgroundColor: 'red'
    },

    addtodo: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5
    }
})