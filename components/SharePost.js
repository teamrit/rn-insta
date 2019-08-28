import React from "react";
import {Modal,View, Image,TextInput,Button,Text,ScrollView} from "react-native";
import FrictionModal from '../screens/FrictionModal';
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";
import {SHARE_POST_PLACEHOLDER, SHARE_POST_SEARCH_PLACEHOLDER} from "../constants/App";
import {Ionicons} from "@expo/vector-icons";
import {StoryProfile} from "./StoryProfile";
import {getRandomAvatarUrl, getRandomUsername} from "../constants/DataGenerator";

export function ShareContact() {
  return (<View style={[styles.p1,styles.flexRow]}>
    <StoryProfile size={40} avatarUrl={getRandomAvatarUrl()} />
    <View style={styles.flexGrow}>
      <View style={styles.flexColumn}>
        <Text style={styles.textBold}>{getRandomUsername() || ''}</Text>
        <Text>{getRandomUsername() || ''}</Text>
      </View>
    </View>
    <View>
      <Button style={{alignSelf:'center',height:30,alignContent:'center'}} title="Send" onPress={()=>{}}/>
    </View>
  </View>);
};

export const SharePost = ({isShareModalOpened,setModalVisibility,imageUrl}) => {

  const handleScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.y);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShareModalOpened}
      onRequestClose={() => setModalVisibility(false)}>
      <FrictionModal
        something={"something"}
        onForcedDownSwipe={() => setModalVisibility(false)} >
        <View>
          <View style={{
            height:5,width:50,backgroundColor:Colors.readMoreCaption,borderRadius:20,
            alignSelf:'center',
            margin:10
          }}/>
            {/*Write a message textfield and thumbnail of image to be shared*/}
            <View style={styles.flexRow}>
              <View>
                <Image source={{uri:imageUrl}} style={{width:50,height:50,margin:15,borderRadius:10}} />
              </View>
              <View style={[styles.flexGrow,{paddingTop:15,paddingBottom:15}]}>
                <TextInput
                  placeholder={SHARE_POST_PLACEHOLDER}
                  editable={true} style={styles.mediaShareThumbnail} />
              </View>
            </View>

            {/*Divider*/}
            <View style={styles.divider}/>

            {/*Search Box*/}
            <View style={[styles.mediaShareSearchContainer,styles.flexRow]}>
              <Ionicons
                name={"md-search"}
                size={30}
                color={Colors.timestamp}
                style={{alignSelf:'center'}}
              />
              <TextInput
                placeholder={SHARE_POST_SEARCH_PLACEHOLDER}
                editable={true}
                style={[{padding:5},styles.flexGrow]} />
              <Ionicons
                name={"md-person-add"}
                size={30}
                color={Colors.timestamp}
                style={{alignSelf:'center'}}
              />
            </View>

            {/*List of contacts to share post with*/}
            <ScrollView
              scrollEventThrottle={200}
              style={styles.p2}
              onScroll={handleScroll}>
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
              <ShareContact />
            </ScrollView>
        </View>
      </FrictionModal>
    </Modal>
  );
};