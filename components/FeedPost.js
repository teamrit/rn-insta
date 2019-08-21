import React, {useState} from "react";
import {View, Text, Image,TouchableWithoutFeedback} from "react-native";
import {styles} from "../constants/Styles";
import {generateAvatarUrl} from "./StoryProfile";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import SimpleLineIcon from "@expo/vector-icons/SimpleLineIcons";
import Layout from "../constants/Layout";

const StoryProfile = ({username='',isStorySeen = false}) => {
    const profileWidth = isStorySeen ? 27 : 30;
    return (
        <View style={{width:35}}>
            <View style={[{height:30,width:30,borderRadius:30,marginLeft:10,marginRight:10},isStorySeen && styles.storySeen]}>
                {/*{isStorySeen && (*/}
                <Image
                    style={[{width: profileWidth,height:profileWidth,borderRadius:30}]}
                    source={{uri: generateAvatarUrl()}}
                />
                {/*)}*/}
            </View>
            {/*<Text numberOfLines={1} style={[{width:70},styles.storyProfileText]}>{username}</Text>*/}
        </View>
    )
};

export const FeedPost = ({location='',username='',imageUrl=''}) => {
    // State
    const [lastImagePress, setLikeTime] = useState(null);
    const [isLiked, setLiked] = useState(false);

    const handleImageDoublePress = () => {
        setLiked(true);
        console.log("is liked");
    };

    return <View style={styles.b1}>
        {/*Post Header*/}
        <View style={[styles.flexRow, {height: 50, padding: 5}]}>
            <View style={[styles.centeredView, {marginRight: 15}]}>
                <StoryProfile />
            </View>
            <View style={[styles.flexGrow, styles.flexColumn, {paddingTop: 3, paddingBottom: 3}]}>
                <Text style={[styles.feedUserName, styles.textBold, {alignSelf: 'flex-start'}]}>{username || ''}</Text>
                <Text styles={[styles.feedUserLocation, {alignSelf: 'flex-start'}]}>{location || ''}</Text>
            </View>
            <View style={[{width: 30, alignSelf: 'flex-end'}, styles.centeredView, styles.b1]}>
                <Ionicons
                    name={"md-more"}
                    size={30}
                    color={Colors.tabIconSelected}
                />
            </View>
        </View>
        {/*Post Media*/}
        <View>
            <TouchableWithoutFeedback onPress={() => {
              const DOUBLE_PRESS_DELAY = 300;
              const now = new Date().getTime();
              if (lastImagePress && (now - lastImagePress) < DOUBLE_PRESS_DELAY) {
                setLikeTime(null);
                handleImageDoublePress();
              }
              else {
                setLikeTime(now);
              }
            }}>
              <View>
                <Ionicons
                  name={isLiked ? "md-heart" : "md-heart-empty"}
                  style={{position: 'absolute',zIndex:10,alignSelf:'center',top:Layout.window.width/2-50}}
                  size={100}
                  color={isLiked ? Colors.heartIcon : Colors.tabIconSelected}
                />
                <Image
                  source={{uri: imageUrl}}
                  style={{width: Layout.window.width,height:Layout.window.width}}
                />
              </View>
            </TouchableWithoutFeedback>
        </View>

        {/*Action Buttons: Like,Comment,Share,Options*/}
        <View style={[styles.flexRow,{padding:5}]}>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <Ionicons
                    name={isLiked ? "md-heart" : "md-heart-empty"}
                    size={30}
                    color={isLiked ? Colors.heartIcon : Colors.tabIconSelected}
                />
            </View>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <SimpleLineIcon
                    name={"bubble"}
                    size={30}
                    color={Colors.tabIconSelected}
                    provider="SimpleLineIcons"
                />
            </View>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <Ionicons
                    name={"md-paper-plane"}
                    size={30}
                    color={Colors.tabIconSelected}
                />
            </View>
            <View style={styles.flexGrow}/>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <Ionicons
                    name={"md-bookmark"}
                    size={30}
                    color={Colors.tabIconSelected}
                />
            </View>
        </View>
    </View>
};