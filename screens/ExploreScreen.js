import React, {useEffect} from "react";
import {View,FlatList,SafeAreaView,Text,ActivityIndicator} from "react-native";
import {ExplorePosts} from "../components/ExplorePosts";
import {styles} from "../constants/Styles";
import {AppTopBar} from "../components/AppTopBar";
import {StatusBarGap} from "../components/StatusBarGap";
import {connect,Provider} from "react-redux";
import {loadExploreSection} from "../redux/actions/FeedActions";
import store from "../redux/Store";
import {LoadMorePosts} from "../components/LoadMorePosts";

export const ExploreScreen = (props) => {

  useEffect(() => {
    // Mount code
    props.loadExploreSection();
  }, []);

  let {explore} = props;
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBarGap />
          <AppTopBar/>
          <FlatList
            keyExtractor ={(item, index) => {
              return `${index}`
            }}
            data={explore}
            renderItem={({item}) => <ExplorePosts postUrls={item} />}
            ListFooterComponent=
              {
                <LoadMorePosts loadMorePosts={props.loadExploreSection} />
              }
          />
        </SafeAreaView>
      </View>
    </Provider>

  )
};

ExploreScreen.navigationOptions = {
  header:null
};

export default connect((state => state.feed), {
  loadExploreSection: loadExploreSection
})(ExploreScreen);