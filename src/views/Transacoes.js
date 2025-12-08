import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import Transacao from "./Transacao.js";

export default function Transacoes() {
    const dados = [{id: 1, tipo: 'Receita', valor: 2500, nome: 'Salário mensal', descricao: 'Pagamento mensal do salário'},
                   {id: 2, tipo: 'Despesa', valor: 150, nome: 'Conta de luz', descricao: 'Conta da luz do mês'},
                   {id: 3, tipo: 'Despesa', valor: 200, nome: 'Supermercado', descricao: 'Compra do mês'},
                   {id: 4, tipo: 'Receita', valor: 300, nome: 'Freelance', descricao: 'Trabalho de freelancer do fim de semana'},
                   {id: 5, tipo: 'Despesa', valor: 100, nome: 'Transporte', descricao: 'Pagamento do mês de passagens'}];
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={styles.page}>
                <Topo />

                <TouchableOpacity style={[styles.button, styles.posButton]} onPress={() => {}}>
                    <Text style={styles.text1}>Adicionar Transação</Text>
                </TouchableOpacity>

                <View style={styles.verFin.view}>
                    <FlatList
                        data={dados}
                        renderItem={({item}) => <Transacao {...item}/>}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}