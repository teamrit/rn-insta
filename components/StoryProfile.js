import React from "react";
import {View,Text,Image} from "react-native";
import {styles} from "../constants/Styles";

export const StoryProfile = ({username='',isStorySeen = false,avatarUrl='',size=60}) => {
    const profileWidth = isStorySeen ? size-6 : size;
    return (
        <View style={{width:80}}>
            <View style={[{height:size,width:size,borderRadius:size/2,marginLeft:10,marginRight:10},isStorySeen && styles.storySeen]}>
                {/*{isStorySeen && (*/}
                <Image
                    style={[{width: profileWidth,height:profileWidth,borderRadius:30}]}
                    source={{uri: avatarUrl}}
                />
                {/*)}*/}
            </View>
            <Text numberOfLines={1} style={[{width:70},styles.storyProfileText]}>{username}</Text>
        </View>
    )
};