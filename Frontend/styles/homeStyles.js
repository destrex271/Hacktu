import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    containerTop:{
        flex: 0.1,
        flexDirection: "row",
        marginTop: -10,
        justifyContent: "center",
        paddingTop: 25,
        paddingLeft: 10,
    },
    roundBtn:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: '#272727'
    },
    bottomShadow: {
        shadowOffset: {
          width: 6,
          height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#b6c3db"
    },
    arrow: {
        fontFamily: "PoppinThin",
        fontSize: 40,
        color: "#fff"
    },
    logo: {
        marginTop: 0
    },
    profileView: {
        flex: 1
    }
})