import React from 'react';
import { Text, View, TouchableOpacity , SafeAreaView , Image , StatusBar } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import {styles} from "../constants/Styles";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export function CameraActionButton(props) {
  return (<TouchableOpacity
    style={{
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    }}
    onPress={props.onPress}>
    {props.children}
  </TouchableOpacity>);
}

export default class CameraExample extends React.Component {

  constructor(props) {
    super(props);
    this.camera = React.createRef();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      imageSource: null
    };
    this.snap = this.snap.bind(this);
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
        quality:1,
        onPictureSaved:(data) => {
          console.log(data);
          this.setState({imageSource: data.uri});
        }
      });
    }
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <SafeAreaView>
        <View style={styles.centeredView}>
          <Text>No Permission</Text>
        </View>
      </SafeAreaView>;
    } else if (hasCameraPermission === false) {
      return <SafeAreaView>
          <View style={styles.centeredView}>
            <Text>No access to camera</Text>
          </View>
        </SafeAreaView>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={true} />

            {
              this.state.imageSource &&
                <View style={styles.flexed}>
                  <Image
                    style={{zIndex:10,flex:1,...Layout.window}}
                    source={{uri: this.state.imageSource}}
                  />
                </View>
            }

            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: this.state.imageSource ? 0 : 1 }} type={this.state.type}>

              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                  marginRight: 30
                }}>
                <TouchableOpacity>
                  <Ionicons
                    name={"md-close"}
                    size={30}
                    color={Colors.white}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {
                  const { state, goBack , navigate } = this.props.navigation;
                  navigate('Home');
                }}>
                  <Ionicons
                    name={"md-arrow-dropright"}
                    size={30}
                    color={Colors.white}
                  />
                </TouchableOpacity>

              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                  marginBottom: 30
                }}>
                <CameraActionButton>
                  <Ionicons
                    name={"md-image"}
                    size={30}
                    color={Colors.white}
                  />
                </CameraActionButton>

                <CameraActionButton>
                  <Ionicons
                    name={"md-flash"}
                    size={30}
                    color={Colors.white}
                  />
                </CameraActionButton>

                <CameraActionButton onPress={() => this.snap()}>
                  <View style={styles.captureButton} />
                </CameraActionButton>

                <CameraActionButton onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  })}}>
                  <Ionicons
                    name={"ios-reverse-camera"}
                    size={30}
                    color={Colors.white}
                  />
                </CameraActionButton>

                <CameraActionButton>
                  <Ionicons
                    name={"md-color-wand"}
                    size={30}
                    color={Colors.white}
                  />
                </CameraActionButton>

              </View>
            </Camera>
          </SafeAreaView>
        </View>
      );
    }
  }
}