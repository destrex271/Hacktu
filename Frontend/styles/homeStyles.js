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
    cont: {
        flex: 0.5,
        justifyContent: "center",
        alignItems:"center"
    },
    profView:{
        flex: 0.65,
        width: 370,
        height: 200,
        marginTop: -30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        elevation: 8,
        padding: 8,
        backgroundColor: '#272727'
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
    profileView: {
        marginTop:90,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingRight: 0,
        borderRadius: 100,
        elevation: 5,
        backgroundColor: '#474747',
        alignSelf: "flex-end"
    },
    nameView: {
        alignSelf: "flex-start",
        marginTop: -75
    },
    namet: {
        fontFamily: "PoppinsBold",
        fontSize: 20
    },
    numb: {
        fontFamily: "PoppinsBold",
        fontSize: 15,
        color: "#ffffff78"
    },
    cont1: {
        alignSelf: "flex-start",
        marginTop: -10
    },
    namet2: {
        fontFamily: "PoppinsBold",
        fontSize: 16
    },
    amt: {
        fontFamily: "PoppinsBold",
        fontSize: 16,
        color: "#DF3030",
        marginLeft: 10
    },
    credView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 0,
    },
    credView2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: -190,
    },
    cont3: {
        marginTop: 10,
        paddingLeft: 30
    },
    pend: {
        fontFamily: "PoppinsBold",
        fontSize: 22
    },
    round:{
        
        width: 367,
        height: 200,
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#272727',
        marginLeft: -16,
    },
    cont4: {
        marginTop: 10,
        paddingLeft: 30
    },
    pend: {
        fontFamily: "PoppinsBold",
        fontSize: 22
    },
    round:{
        width: 367,
        height: 200,
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#272727',
        marginLeft: -16,
    },
    
})