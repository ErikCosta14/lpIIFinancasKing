import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import LogoPreto from "../img/LogoPreto.svg";
import styles from "../styles/styles.js";

export default function Topo() {
    const [dash, setDash] = useState(true);

    return (
        <View style={styles.topo}>
            <Image source={LogoPreto} style={styles.topoImg}/>

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[styles.topoTexto, styles.textMenu, dash ? styles.textoMenuSelect : ""]}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDash(!dash)}>
                    <Text style={[styles.topoTexto, styles.textMenu, !dash ? styles.textoMenuSelect : ""]}>Transações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}