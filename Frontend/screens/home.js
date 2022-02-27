import React from "react";
import {View, Text, Pressable, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/globalStyles";
import BackSVG from '../assets/images/backg.svg'
import { homeStyles } from "../styles/homeStyles";
import LogoSvg from '../assets/images/myShare.svg';
import User from '../assets/images/User.svg'
import HomeS from '../assets/images/home.svg'
import QR from '../assets/images/qr.svg'
import St from '../assets/images/st.svg'

export const Home = ({ navigation }) => {
    return(
        <View style={global.back}>
            <View style={[homeStyles.flexer]}>
                <View style={[homeStyles.round, homeStyles.bottomShadow]}>
                    <View
                    style={{
                        flex: 0.2
                    }}
                    >
                        <View style={{
                            alignSelf:"flex-start",
                            marginTop: 10,
                            paddingTop: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={[homeStyles.title]}>User Name</Text>
                        </View>
                        <View style={{
                            alignSelf:"flex-start",
                            paddingLeft: 20
                        }}>
                            <Text style={[homeStyles.subT]}>+91 9999999999</Text>
                        </View>
                    </View>
                    <View style={{
                        alignSelf:"flex-start",
                        paddingTop: 20,
                        marginTop: 40,
                        paddingLeft: 20,
                        flex: 0.1,
                        flexDirection: "row"
                    }}>
                        <Text style={[homeStyles.subT2]}>Total Pending Amount: </Text><Text style={[homeStyles.subT3]}>₹ 1000</Text>
                    </View>
                    <View style={{
                        alignSelf:"flex-start",
                        // paddingTop: 20,
                        paddingLeft: 20,
                        flex: 0.1,
                        flexDirection: "row"
                    }}>
                        <Text style={[homeStyles.subT2]}>Total Pending Amount: </Text><Text style={[homeStyles.subT3]}>₹ 1000</Text>
                    </View>
                </View>
            </View>
            <View style={[homeStyles.flexer, homeStyles.margT300]}>
                <View style={[homeStyles.round2, homeStyles.bottomShadow]}>
                    <Text style={homeStyles.title}>Pending Transactions</Text>
                </View>
            </View>
            <View style={[homeStyles.flexer]}>
                <View style={[homeStyles.round2, homeStyles.bottomShadow]}>
                    <Text style={homeStyles.title}>Recent Transactions</Text>
                </View>
            </View>
            <View style={[homeStyles.nav]}>
                <HomeS
                width="50"
                height="50"
                />
                <QR
                width="50"
                height="50"
                />
                <St
                width="50"
                height="50"
                />
            </View>
        </View>
    )
}