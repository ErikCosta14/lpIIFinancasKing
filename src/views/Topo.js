import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useState } from "react";

import LogoPreto from "../img/LogoPreto.png";
import styles from "../styles/styles.js";
import styleMobile from "../styles/styleMobile.js";

export default function Topo({ navigation}) {
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;
    const estilos = isCell ? styleMobile : styles;
    

    return (
        <View style={estilos.top.topo}>
            <Image source={LogoPreto} style={estilos.top.topoImg}/>

            <View style={estilos.top.menu}>
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}}>
                    <Text style={[estilos.top.topoTexto, estilos.top.textMenu]}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Transações', {navigation: navigation})}}>
                    <Text style={[estilos.top.topoTexto, estilos.top.textMenu]}>Transações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}