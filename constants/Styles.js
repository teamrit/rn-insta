import {Platform, StyleSheet} from "react-native";
import Colors from "./Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    appTopBar: {
        height: 50
    },
    appBarIcon: {
        width: 50,
        height: 50
    },
    bgCloud: {
        backgroundColor: '#f9f9f9'
    },
    b1: {
        borderWidth: 2,
        borderColor: 'black'
    },
    centeredView: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexed: {
        flex:1
    },
    shadow: {
        elevation: 5,
        shadowColor: '#7c7c7c',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    storyProfileText: {
        fontSize: 12,
        textAlign:'center',
        alignSelf: 'center'
    },
    storySeen: {
        borderWidth:0.25,
        padding:2.75
    },
    textBold: {
        fontWeight: 'bold'
    },
    chocoHeight: {
        height:50
    },
    chocoWidth: {
        width:50
    },
    feedUserName: {
        fontSize:15,
        textAlign:'left'
    },
    feedUserLocation: {
        fontSize:11,
        textAlign:'left'
    },
    flexGrow: {
        flexGrow: 1
    },
    actionIcon: {
        marginLeft: 5,
        marginRight: 5
    },
    timestamp: {
        fontSize:10,
        color: Colors.timestamp
    },
    translucent: {
        backgroundColor: Colors.translucent
    },
    roundedPretty: {
        borderRadius: 15
    }
});

