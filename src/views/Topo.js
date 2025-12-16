import { View, Text, Image } from "react-native";
import styles from "../styles/styles.js";

export default function Topo() {
    return (
        <View style={styles.top.topo}>
            <Image
                source={require('../img/LogoPreto.png')}
                style={styles.top.topoImg}
                resizeMode="contain"
            />
        </View>
    );
}