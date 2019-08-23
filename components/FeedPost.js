import React, {useState} from "react";
import {View, Text, Image,TouchableWithoutFeedback, Animated, Modal} from "react-native";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import SimpleLineIcon from "@expo/vector-icons/SimpleLineIcons";
import Layout from "../constants/Layout";
import {MediaHeart, useFadeInAnimation} from "./MediaHeart";
import {SharePost} from "./SharePost";

const StoryProfile = ({username='',isStorySeen = false,avatarUrl=''}) => {
    const profileWidth = isStorySeen ? 27 : 30;
    return (
        <View style={{width:35}}>
            <View style={[{height:30,width:30,borderRadius:30,marginLeft:10,marginRight:10},isStorySeen && styles.storySeen]}>
                <Image
                    style={[{width: profileWidth,height:profileWidth,borderRadius:30}]}
                    source={{uri: avatarUrl}}
                />
            </View>
        </View>
    )
};

export const FeedPost = ({location='',username='',imageUrl='',caption='',numberOfComments=0,timestamp='',avatarUrl=''}) => {
    // State
    const [lastImagePress, setLikeTime] = useState(null);
    const [isLiked, setLiked] = useState(false);
    const [isDoubleTapped, setImageTapped] = useState(null);
    const [isCaptionShowed, setCaptionVisibility] = useState(false);
    const [isShareModalOpened, setModalVisibility] = useState(false);

    const animation = useFadeInAnimation({ doAnimation: isLiked, duration: 1000 });
    let opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const handleImageDoublePress = () => {
        // isDoubleTapped
      setImageTapped(!isDoubleTapped);
      setLiked(true);
    };

    return <View>
        {/*Post Header*/}
        <View style={[styles.flexRow, {height: 50, padding: 5}]}>

            {/*Friction Modal goes here*/}
            <SharePost
              setModalVisibility={setModalVisibility}
              isShareModalOpened={isShareModalOpened}
              imageUrl={imageUrl}
            />
            <View style={[styles.centeredView, {marginRight: 15}]}>
                <StoryProfile avatarUrl={avatarUrl} />
            </View>
            <View style={[styles.flexGrow, styles.flexColumn, {paddingTop: 3, paddingBottom: 3}]}>
                <Text style={[styles.feedUserName, styles.textBold, {alignSelf: 'flex-start'}]}>{username || ''}</Text>
                <Text style={[styles.storyProfileText, {alignSelf: 'flex-start'}]}>{location || ''}</Text>
            </View>
            <View style={[{width: 30, alignSelf: 'flex-end'}, styles.centeredView]}>
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
                <MediaHeart isDoubleTapped={isDoubleTapped} isLiked={isLiked}/>
                <Image
                  source={{uri: imageUrl}}
                  style={{width: Layout.window.width,height:Layout.window.width}}
                />
              </View>
            </TouchableWithoutFeedback>
        </View>

        {/*Action Buttons: Like,Comment,Share,Options*/}
        <View style={[styles.flexRow,{padding:5}]}>
            <Animated.View style={[{
              width: 30,
              transform: [
                {scale: opacity}
              ],
            }, styles.centeredView,styles.actionIcon]}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setLiked(!isLiked);
                }}>
                <Ionicons
                  name={isLiked ? "md-heart" : "md-heart-empty"}
                  size={30}
                  color={isLiked ? Colors.heartIcon : Colors.tabIconSelected}
                />
              </TouchableWithoutFeedback>
            </Animated.View>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <SimpleLineIcon
                    name={"bubble"}
                    size={30}
                    color={Colors.tabIconSelected}
                    provider="SimpleLineIcons"
                />
            </View>
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
              <TouchableWithoutFeedback onPress={()=>setModalVisibility(true)}>
                <Ionicons
                  name={"md-paper-plane"}
                  size={30}
                  color={Colors.tabIconSelected}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={styles.flexGrow}/>

            {/*Right*/}
            <View style={[{width: 30}, styles.centeredView,styles.actionIcon]}>
                <Ionicons
                    name={"md-bookmark"}
                    size={30}
                    color={Colors.tabIconSelected}
                />
            </View>
        </View>

        {/*Like Counts, Captions, Comments*/}
        <View style={[{paddingLeft:15,paddingRight:15}]}>
          <Text>
            <Text style={[styles.feedUserName, styles.textBold, {alignSelf: 'flex-start'}]}>{username || ''}</Text>
            <Text>{"  "}</Text>
            <Text>{isCaptionShowed ? caption : caption.substring(0,40)}</Text>
            <TouchableWithoutFeedback onPress={()=>setCaptionVisibility(true)}>
              <Text style={{color:Colors.readMoreCaption}}>{isCaptionShowed ? "" : "...more"}</Text>
            </TouchableWithoutFeedback>
          </Text>
          <TouchableWithoutFeedback onPress={()=>setCaptionVisibility(true)}>
            <Text style={{color:Colors.readMoreCaption}}>
              {`View all ${numberOfComments} comments`}
            </Text>
          </TouchableWithoutFeedback>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
    </View>
};