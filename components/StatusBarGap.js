import React from "react";
import {View,StatusBar} from "react-native";

export const StatusBarGap = () => {
    return (
        <View style={{height: StatusBar.currentHeight}}/>
    )
};