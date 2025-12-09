import { View, FlatList, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import Transacao from "./Transacao.js";
import styleMobile from '../styles/styleMobile';

export default function Transacoes() {
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;    
    const estilos = isCell ? styleMobile : styles;
    const dados = [{id: 1, tipo: 'Receita', valor: 2500, nome: 'Salário mensal', descricao: 'Pagamento mensal do salário'},
                   {id: 2, tipo: 'Despesa', valor: 150, nome: 'Conta de luz', descricao: 'Conta da luz do mês'},
                   {id: 3, tipo: 'Despesa', valor: 200, nome: 'Supermercado', descricao: 'Compra do mês'},
                   {id: 4, tipo: 'Receita', valor: 300, nome: 'Freelance', descricao: 'Trabalho de freelancer do fim de semana'},
                   {id: 5, tipo: 'Despesa', valor: 100, nome: 'Transporte', descricao: 'Pagamento do mês de passagens'}];
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={estilos.page}>
                <Topo />

                <TouchableOpacity style={[estilos.button, estilos.posButton]} onPress={() => {}}>
                    <Text style={estilos.text1}>Adicionar Transação</Text>
                </TouchableOpacity>

                <View style={estilos.verFin.view}>
                    <FlatList
                        data={dados}
                        renderItem={({item}) => <Transacao {...item}/>}
                        contentContainerStyle={{ paddingBottom: 80 }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}