import React from "react";
import {View,FlatList} from "react-native";
import {StoryProfile} from "./StoryProfile";
import {styles} from "../constants/Styles";
import {getRandomStories} from "../constants/DataGenerator";

export const StoriesContainer = () => {
    const followers = getRandomStories() || [];
    console.log(followers);
    return (
        <View style={[{height:100,paddingTop:15,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'},styles.flexRow]}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={followers}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({item}) => <StoryProfile isStorySeen={item.isStorySeen} username={item.name || ""} />}
            />
        </View>
    )
};