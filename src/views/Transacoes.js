import { View, FlatList, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import Transacao from "./Transacao.js";

export default function Transacoes() {
    const dados = [{id: 1, tipo: 'Receita', valor: 2500, descricao: 'Salário mensal'},
                   {id: 2, tipo: 'Despesa', valor: 150, descricao: 'Conta de luz'},
                   {id: 3, tipo: 'Despesa', valor: 200, descricao: 'Supermercado'},
                   {id: 4, tipo: 'Receita', valor: 300, descricao: 'Freelance'},
                   {id: 5, tipo: 'Despesa', valor: 100, descricao: 'Transporte'}];
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={styles.page}>
                <Topo />
                
                <View>
                    <FlatList
                        data={dados}
                        renderItem={({item}) => <Transacao {...item}/>}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}