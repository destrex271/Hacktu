import React from "react";
import {View, Text, Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/globalStyles";
import BackSVG from '../assets/images/backg.svg'
import { homeStyles } from "../styles/homeStyles";
import LogoSvg from '../assets/images/myShare.svg';

export const Home = ({ navigation }) => {
    const backToHome = () => {
        navigation.goBack()
    }
    const arrow = "<"
    return(
        <SafeAreaView style={global.back}>
            
            <View style={homeStyles.containerTop}>
                {/* <Pressable
                style={[homeStyles.roundBtn, homeStyles.bottomShadow]}
                onPress={backToHome}
                >
                    <Text style={homeStyles.arrow}>
                        {arrow}
                    </Text>
                </Pressable> */}
                <LogoSvg
                    width="150"
                    style={homeStyles.logo} 
                />
            </View>

            <View style={homeStyles.profileView}>

            </View>

        </SafeAreaView>
    )
}