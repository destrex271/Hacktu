import React from "react";
import {View, Text, Pressable, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/globalStyles";
import BackSVG from '../assets/images/backg.svg'
import { homeStyles } from "../styles/homeStyles";
import LogoSvg from '../assets/images/myShare.svg';
import User from '../assets/images/User.svg'

export const Home = ({ navigation }) => {
    const backToHome = () => {
        navigation.goBack()
    }
    const arrow = "<"
    return(
        <SafeAreaView style={[global.back]}>
            
            <View style={[homeStyles.cont]}>
                <View style={[homeStyles.profView, homeStyles.bottomShadow]}>
                    <View style={[homeStyles.profileView, homeStyles.bottomShadow]}>
                        <User
                        width="100"
                        />
                    </View>
                    <View style={homeStyles.cont1}>
                        <View style={homeStyles.nameView}>
                            <Text style={homeStyles.namet}>Name Surname</Text>
                            <Text style={homeStyles.numb}>+919999999999</Text>
                        </View>
                        <View style={homeStyles.credView}>
                            <Text style={homeStyles.namet2}>Total Pending Amt : </Text>
                            <Text style={homeStyles.amt}>₹ 1000</Text>
                        </View>
                        <View style={homeStyles.credView2}>
                            <Text style={homeStyles.namet2}>Total Recieved Amt : </Text>
                            <Text style={homeStyles.amt}>₹ 1000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={homeStyles.cont3}>
                <Text style={homeStyles.pend}>Pending Transaction</Text>
                <ScrollView style={homeStyles.round}></ScrollView>
            </View>
            
        </SafeAreaView>
    )
}