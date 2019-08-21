import React , {useEffect} from 'react';
import {FlatList, ScrollView, Text, View,} from 'react-native';
import {styles} from "../constants/Styles";
import {StatusBarGap} from "../components/StatusBarGap";
import {AppTopBar} from "../components/AppTopBar";
import {StoriesContainer} from "../components/StoriesContainer";
import {FeedPost} from "../components/FeedPost";
import {connect} from 'react-redux';
import {loadRandomPosts} from "../redux/actions/FeedActions";

function HomeFeedScreen(props) {
  let {posts} = props || [];
  posts = posts[0] || [];
  console.log(posts.length,posts[0]);
  useEffect(() => {
    // Mount code
    props.loadPosts();

    return () => {

    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBarGap />
        <ScrollView
          styles={styles.container}
          showsHorizontalScrollIndicator={false} >
            <AppTopBar />
            <StoriesContainer/>
          {posts &&
            <FlatList
              data={posts}
              style={styles.container}
              keyExtractor={(item) => {
                return item.key+''
              }}
              renderItem={({item}) =>
                <FeedPost
                  location={item.location}
                  isStorySeen={item.isStorySeen}
                  username={item.name || ""}
                  imageUrl={item.imageUrl || ""}
                />}
            />
          }

        </ScrollView>
    </View>
  );
}

HomeFeedScreen.navigationOptions = {
  header: null,
};

export default connect((state => state.feed), {loadPosts: loadRandomPosts})(HomeFeedScreen);