import React from "react";
import {View,FlatList,SafeAreaView,Text} from "react-native";
import {ExplorePosts} from "../components/ExplorePosts";
import {styles} from "../constants/Styles";
import {AppTopBar} from "../components/AppTopBar";
import {StatusBarGap} from "../components/StatusBarGap";

export const ExploreScreen = () => {
  let newArray = new Array(20).fill(1,0);
  newArray = newArray.map((a,index)=> {
    return {item:a,key:index+''}
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBarGap />
        <AppTopBar/>
        <FlatList
          data={newArray}
          renderItem={({item}) => <ExplorePosts/>}
          ListFooterComponent={<View style={{margin:100}}><Text>BOTTOM</Text></View>}
        />
      </SafeAreaView>
    </View>
  )
};

ExploreScreen.navigationOptions = {
  header:null
};
