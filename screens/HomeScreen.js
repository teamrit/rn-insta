import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import {styles} from "../constants/Styles";
import {MonoText} from '../components/StyledText';
import {StatusBarGap} from "../components/StatusBarGap";
import {AppTopBar} from "../components/AppTopBar";
import {StoriesContainer} from "../components/StoriesContainer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBarGap />
      <AppTopBar />
      <StoriesContainer/>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}