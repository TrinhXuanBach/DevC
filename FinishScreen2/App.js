import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView, Dimensions, ScrollView
} from 'react-native';
//import AutoHeightImage from 'react-native-auto-height-image';
import { IconButton, Button,  List  } from 'react-native-paper';
//import SegmentedControlTab from "react-native-segmented-control-tab";

export default function App() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  const [index, setIndex]         = React.useState(0)

  const handlePress = (expanded, setExpanded) => setExpanded(!expanded);
  // Setup Icon.Button onPress quay lại 
  // Chưa Xử Lý SegmentControlTab
  return (
     <SafeAreaView style = {styles.container}>
       <View>
        {/* <AutoHeightImage
          width = {Dimensions.get('window').width}
          source = {require('./assets/banner.png')}/> */}
          
        <IconButton
          icon="arrow-left"
          color="white"
          size={20}
          onPress={() => console.log('Pressed')}
          style = {styles.icon}
        />   
       </View>
        <Button style = {styles.button} mode = 'contained' onPress = {() => console.log('Button Press')}>
          Yêu cầu thêm thông tin
        </Button>
        <ScrollView>
          <View style = {styles.informationview}>
            <Text style = {{ fontWeight: 'bold', color: '#6c7a89', fontSize: 15 }}>
              CHÍNH CHỦ CẦN BÁN CĂN HỘ CC: ...
            </Text>
            <View style = {styles.informationdetail}>
              <Text style = {styles.textinformationdetail}>
                Giá: 
              </Text>
              <Text style = {styles.textinformationdetail}>
                Diện tích:
              </Text>
              <Text style = {styles.textinformationdetail}>
                Loại:
              </Text>
            </View>
            <Text style = {styles.textinformationdetail}>
              Địa chỉ: 
            </Text>
            <Text>
              172 Ngọc Khánh, Quận Ba Đình, Hà Nội
            </Text>
          </View>
          <List.Section>
            <List.Accordion
                title = {<Text style = {styles.headerstyle}>
                  Miêu tả chi tiết
                </Text>}
                expanded={expanded}
                onPress={() => handlePress(expanded, setExpanded)}>
                <View style = {{ marginLeft: 20}}>
                  <Text style = {styles.textinformationdetail, { fontSize: 15}}>Phòng: {}</Text>
                  <Text style = {styles.textinformationdetail, { fontSize: 15}}>Hướng: {}</Text>
                  <Text style = {styles.textinformationdetail, { fontSize: 15}}>Giao Thông: {}</Text>
                </View>
            </List.Accordion>
            <List.Accordion
              title = {<Text style = {styles.headerstyle}>
                Tình hình thị trường
              </Text>}
              expanded={expanded2}
              onPress={() => handlePress(expanded2, setExpanded2)}
            >
              <View style = {{flexDirection: "row", marginLeft: 15}}>
                <Text style = {{flex: 1, textAlign: 'center'}}>Giá trị trung bình theo đường{"\n"}</Text>
                <Text style = {{flex: 1, textAlign: 'center'}}>Giá trị trung bình theo quận{"\n"}</Text>
                <Text style = {{flex: 1, textAlign: 'center'}}>Giá trị dự báo trong 2021{"\n"}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title = {<Text style = {styles.headerstyle}>
                Giá các căn hộ tương tụ
              </Text>}
              expanded={expanded3}
              onPress={() => handlePress(expanded3, setExpanded3)}
            > 
              <View>
                <View style = {{flexDirection: "row", marginLeft: 15, borderBottomWidth: 1,
                borderColor: 'black'}}>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1}}>Đống Đa{"\n"}</Text>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1}}>Hai Bà Trưng{"\n"}</Text>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1}}>Hoàng Mai{"\n"}</Text>
                </View>
                <View style = {{flexDirection: "row", marginLeft: 15}}>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                borderColor: 'black'}}>Hoàn Kiếm{"\n"}</Text>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                borderColor: 'black'}}>Thanh Xuân{"\n"}</Text>
                  <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                borderColor: 'black'}}>Tây Hồ{"\n"}</Text>
                </View>
              </View>
            </List.Accordion>
            {/* <List.Accordion
              title = {<Text style = {styles.headerstyle}>
                Biến động giá
              </Text>}
              expanded={expanded4}
              onPress={() => handlePress(expanded4, setExpanded4)}>
                <View>
                  <View>
                  <SegmentedControlTab
                    values={["Diện tích", "Phân khúc"]}
                    selectedIndex={index}
                    onTabPress={() => setIndex(index == 0 ? 1 : 0)}
                    tabStyle ={styles.tabsContainerStyle}
                    //tabTextStyle = {{color: black}}
                    activeTabStyle = {{backgroundColor: 'white'}}
                   />
                  </View>
                </View>
            </List.Accordion> */}
          </List.Section>
        </ScrollView>
        <View style = {{height: 50}}></View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  icon: {
    position: "absolute",
    left: 0,
    top: 0,
  },

  button: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#6c7a89',
    alignItems: "center",
    justifyContent: "center",
  },

  informationview: {
    justifyContent: 'center',
    
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5
  }, 

  informationdetail: {
    flexDirection: "row"
  },

  textinformationdetail: {
    flex: 1, 
    fontWeight: 'bold'
  }, 

  headerstyle: {
    fontWeight: 'bold', 
    fontSize: 25
  },

  tabsContainerStyle: {
    backgroundColor: '#6c7a89',
  },

})