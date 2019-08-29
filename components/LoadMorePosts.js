import React from "react";
import {ActivityIndicator, View} from "react-native";

export const LoadMorePosts = ({loadMorePosts}) => {

  // // Debounces fetch posts api call to prevent overloading
  // const debouncedFetch = _.debounce(loadMorePosts, 3000, { 'maxWait': 3000 });
  // debouncedFetch();
  return (<View style={{marginBottom:100,marginTop:30}}>
    <ActivityIndicator size="small" />
  </View>)
};
