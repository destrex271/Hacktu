import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    flexer: {
        flex: 0.3,
        padding: 10,
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center"
    },
    round:{
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 50,
        elevation: 6,
        backgroundColor: '#272727'
    },
    round2:{
        width: Dimensions.get('screen').width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 50,
        elevation: 6,
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
    margT300: {
        marginTop: 100
    },
    title: {
        fontFamily: "PoppinsBold",
        fontSize: 23,
        color: "#ffffff"
    },
    subT: {
        fontFamily: "PoppinsBold",
        fontSize: 15,
        color: "#ffffff73"
    },
    subT2: {
        fontFamily: "PoppinsBold",
        fontSize: 16,
        color: "#ffffff"
    },
    subT3: {
        fontFamily: "PoppinsBold",
        fontSize: 16,
        color: "#DF3030"
    },
    nav:{
        paddingHorizontal: 20,
        flex:0.1,
        flexDirection:"row",
        justifyContent: "space-between"
    }
})