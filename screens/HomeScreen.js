import React , {useEffect} from 'react';
import {FlatList, ScrollView, SafeAreaView, View, RefreshControl} from 'react-native';
import {styles} from "../constants/Styles";
import {StatusBarGap} from "../components/StatusBarGap";
import {AppTopBar} from "../components/AppTopBar";
import {StoriesContainer} from "../components/StoriesContainer";
import {FeedPost} from "../components/FeedPost";
import {connect} from 'react-redux';
import {loadRandomPosts, loadRandomStories} from "../redux/actions/FeedActions";

function HomeFeedScreen(props) {

  const [refresh, setRefresh] = React.useState(false);

  let {posts, stories} = props || {};

  useEffect(() => {
    // Mount code
    props.loadStories();
    props.loadPosts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBarGap />
      <SafeAreaView >
        <AppTopBar onCameraPress={()=> {
          const {navigate,state} = props.navigation;
          navigate('Camera', { go_back_key: state.key })
        }} />

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={()=>{
                setRefresh(true);
                props.loadPosts();
                setInterval(() => setRefresh(false), 500);
              }}
            />
          }
          styles={styles.container}
          showsVerticalScrollIndicator={false}>

          <StoriesContainer stories={stories} />
          {posts &&
          <FlatList
            data={posts}
            style={styles.container}
            keyExtractor={(item) => {
              return Date.now()+item.key+''
            }}
            renderItem={({item}) =>
              <FeedPost
                location={item.location}
                isStorySeen={item.isStorySeen}
                username={item.name || ""}
                imageUrl={item.imageUrl || ""}
                caption={item.caption || ""}
                numberOfComments={item.numberOfComments || 0}
                timestamp={item.timestamp}
                avatarUrl={item.avatarUrl}
              />}
          />
          }

        </ScrollView>
      </SafeAreaView>

    </View>
  );
}

HomeFeedScreen.navigationOptions = {
  header: null,
};

export default connect((state => state.feed), {
  loadPosts: loadRandomPosts,
  loadStories: loadRandomStories
})(HomeFeedScreen);