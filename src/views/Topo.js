import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { useState } from "react";

import LogoPreto from "../img/LogoPreto.png";
import styles from "../styles/styles.js";
import styleMobile from "../styles/styleMobile.js";

export default function Topo() {
    const {width, height} = useWindowDimensions();
    const [dash, setDash] = useState(true);
    const isCell = width < 768;
    const estilos = isCell ? styleMobile : styles;

    return (
        <View style={estilos.top.topo}>
            <Image source={LogoPreto} style={estilos.top.topoImg}/>

            <View style={estilos.top.menu}>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[estilos.top.topoTexto, estilos.top.textMenu, dash ? estilos.top.textoMenuSelect : ""]}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[estilos.top.topoTexto, estilos.top.textMenu, !dash ? estilos.top.textoMenuSelect : ""]}>Transações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}