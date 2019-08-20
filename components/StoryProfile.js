import React from "react";
import {View,Text,Image} from "react-native";
import {styles} from "../constants/Styles";

export const names = ['David','Jon','Harry','Miller','Sas','Pop','Dog','Chap'];

export const getRandomName = () => {
    return names[Math.floor(Math.random()*names.length)];
};

export const generateImageUrl = () => {
    return `https://api.adorable.io/avatars/400/${getRandomName()}@adorable.io.png`;
};

export const StoryProfile = ({username='',isStorySeen = false}) => {
    const profileWidth = isStorySeen ? 54 : 60;
    return (
        <View style={{width:80}}>
            <View style={[{height:60,width:60,borderRadius:30,marginLeft:10,marginRight:10},isStorySeen && styles.storySeen]}>
                {/*{isStorySeen && (*/}
                <Image
                    style={[{width: profileWidth,height:profileWidth,borderRadius:30}]}
                    source={{uri: generateImageUrl()}}
                />
                {/*)}*/}
            </View>
            <Text numberOfLines={1} style={[{width:70},styles.storyProfileText]}>{username}</Text>
        </View>
    )
};