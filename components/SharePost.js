import React from "react";
import {Modal,View, Image,TextInput} from "react-native";
import FrictionModal from '../screens/LinksScreen';
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";

export const SharePost = ({isShareModalOpened,setModalVisibility,imageUrl}) => {
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
          <View style={styles.flexColumn}>
            <View>
              <Image source={{uri:imageUrl}} style={{width:50,height:50,margin:20,borderRadius:10}} />
            </View>
            <View style={styles.flexGrow}>
              <TextInput value={"something"} editable={true} style={{padding:5,borderWidth:1,zIndex:25}} />
            </View>
          </View>
        </View>
      </FrictionModal>
    </Modal>
  );
};