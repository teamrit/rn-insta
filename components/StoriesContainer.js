import React from "react";
import {View,FlatList} from "react-native";
import {StoryProfile} from "./StoryProfile";
import {styles} from "../constants/Styles";

export const StoriesContainer = (props) => {
    const {stories} = props || [];
    return (
        <View style={[{height:100,paddingTop:15},styles.flexRow]}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={stories}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({item}) =>
                  <StoryProfile
                    isStorySeen={item.isStorySeen}
                    avatarUrl={item.avatarUrl}
                    username={item.name || ""} />}
            />
            <View style={styles.divider}/>
        </View>
    )
};