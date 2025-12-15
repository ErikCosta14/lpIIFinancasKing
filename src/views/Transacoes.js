import { View, FlatList, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect  } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import Transacao from "./Transacao.js";
import styleMobile from '../styles/styleMobile';
import { TransacaoService } from "../services/TansacaoService.js";

export default function Transacoes({navigation}) {
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;    
    const estilos = isCell ? styleMobile : styles;
    const [dados, setDados] = useState([]);
    
    function removerTransacao() {
        async function carregar() {
            const  lista = await TransacaoService.getAll();
            setDados(lista);
        }
        carregar();
    }

    useFocusEffect(
        useCallback(() => {
            async function carregar() {
            const lista = await TransacaoService.getAll();
            setDados(lista);
            }
            carregar();
        }, [])
    );
    
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={estilos.page}>
                <Topo />

                <TouchableOpacity style={[estilos.button, estilos.posButton]} onPress={() => {navigation.navigate('Add Edit', {id: 0, edit: false})}}>
                    <Text style={estilos.text1}>Adicionar Transação</Text>
                </TouchableOpacity>

                <View style={estilos.verFin.view}>
                    <FlatList
                        data={dados}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Transacao transacao={item} navigation={navigation} onDelete={removerTransacao}/>
                        )}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}