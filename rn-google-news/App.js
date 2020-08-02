import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, 
  Text, 
  View,
  ActivityIndicator, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { FlatList } from 'react-native';
import { Linking} from 'react-native'

const onPress = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  });
};

const renderArticleItem = ({ item }) => {
  return(
    <Card title={item.title} image = {{ uri: item.urlToImage}}>
        <View style={styles.row}>
          <Text style = {styles.label}>Source</Text>
          <Text style = {styles.info}>{item.source.name}</Text>
        </View>
        <Text style = {{ marginBotton: 10 }}>{item.content}</Text>
        <View style={styles.row}>
          <Text Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}
           </Text>
        </View>
        <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4"  onPress = {() => onPress(item.url)}/>
    </Card>
  )
}

const filterForUniqueArticles = arr => {
  const cleaned = [];
  arr.forEach(itm => {
    let unique = true;
    cleaned.forEach(itm2 => {
      const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
};

export default function App() {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);
  const [refresh, setRefresh] = useState(true)
  useEffect(() => {
    getNews()
  }, [getNews])

  const getNews = useCallback(async () => {
    if (lastPageReached) return;
    //setLoading(true);
    try{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=${pageNumber}`)
    const jsonData = await response.json()
    const hasMoreArticles = jsonData.articles.length > 0
    if(hasMoreArticles) {
      const newArticleList = filterForUniqueArticles(
        articles.concat(jsonData.articles)
      );
      setArticles(newArticleList)
      setPageNumber(pageNumber + 1)
    }else {
      setLastPageReached(true);
    }
  } catch (error) {
    setHasApiError(true)
  }
    setLoading(false)
    //setRefresh(false)
}, [articles])


  if(loading){
    return(
      <SafeAreaView style = {styles.container}>
        <ActivityIndicator size = "large" loading = {loading}/>
      </SafeAreaView>
    )
  }
  return(
    <SafeAreaView style = {styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Articles Count:</Text>
        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <FlatList
        //onRefresh={() => getNews()}
        //refreshing = {refresh}
        onEndReached = {getNews}
        onEndReachedThreshold = {1}
        data = {articles}
        renderItem = {renderArticleItem}
        keyExtractor = {item => item.title}
        ListFooterComponent = {lastPageReached ? <Text>No more articles</Text>: <ActivityIndicator size={"large"} loading = {loading}/>}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },

  row: {
    flexDirection: 'row'
  },

  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },

  info: {
    fontSize: 16,
    color: 'grey'
  }

});
