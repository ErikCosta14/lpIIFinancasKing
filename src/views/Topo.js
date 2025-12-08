import { View, Image, Text } from "react-native";

import LogoPreto from "../img/LogoPreto.svg";
import styles from "../styles/styles.js";

const nomePagina = "Finanças King";

export default function Topo() {
  return (
    <View style={styles.topo}>
        <Image source={LogoPreto} style={styles.topoImg}/>
        <Text style={styles.topoTexto}>{nomePagina}</Text>
    </View>
  );
}