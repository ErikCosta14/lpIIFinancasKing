import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import LogoPreto from "../img/LogoPreto.svg";
import styles from "../styles/styles.js";

export default function Topo() {
    const [dash, setDash] = useState(true);

    return (
        <View style={styles.top.topo}>
            <Image source={LogoPreto} style={styles.top.topoImg}/>

            <View style={styles.top.menu}>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[styles.top.topoTexto, styles.top.textMenu, dash ? styles.top.textoMenuSelect : ""]}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[styles.top.topoTexto, styles.top.textMenu, !dash ? styles.top.textoMenuSelect : ""]}>Transações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}