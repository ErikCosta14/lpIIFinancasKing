import {useState} from "react";
import {TransacaoService} from "../services/TansacaoService";
import {FlatList, TouchableOpacity, View} from "react-native";

export default function Home() {
    const [saldo, setSaldo] = useState(TransacaoService.getSaldo());

    return (
        <View>
            <h1>{saldo}</h1>
        </View>
    )
}