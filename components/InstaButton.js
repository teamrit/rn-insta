import React from "react";
import {View,Image,Text,Animated,Easing} from "react-native";
import {styles} from "../constants/Styles";
import Layout from "../constants/Layout";



export class InstaButton extends React.Component {

  constructor(props) {
    super(props);
    this.loading = new Animated.Value(0)
  }

  componentDidMount() {
    this.leftToRight();
  }

  leftToRight() {
    Animated.sequence([
      Animated.timing(this.loading, {
        toValue: Layout.window.width - 15,
        duration: 800,
        easing: Easing.in()
      }),
      Animated.timing(this.loading, {
        toValue: 0,
        duration: 800,
        easing: Easing.in()
      }),
    ]).start(() => this.leftToRight());
  }

  render() {

    const width = this.loading.interpolate({
      inputRange: [0, Layout.window.width/2 , Layout.window.width],
      outputRange: [15, 15, 15],
    });

    return (
      <View style={[styles.container,styles.centeredView]}>
        <Animated.View style={{
          width:width,height:10,backgroundColor: 'black',
          alignSelf:'flex-start',
          transform: [
            { translateX: this.loading }
          ]
        }}>
        </Animated.View>
      </View>
    );
  }
}


// export const InstaButton = () => {
//
//
//
//   return (
//
//   );
// };