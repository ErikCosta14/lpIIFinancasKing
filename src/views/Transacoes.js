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
    const alturaFlatList = height * 0.75;
    
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
            <Topo navigation={navigation}/>
            <SafeAreaView style={estilos.page}>
                

                <TouchableOpacity style={[estilos.button, estilos.posButton]} onPress={() => {navigation.navigate('AddEdit', {id: 0, edit: false})}}>
                    <Text style={estilos.text1}>Adicionar Transação</Text>
                </TouchableOpacity>

                <View style={[estilos.verFin.view, { height: alturaFlatList, flex: undefined }]}>
                    <FlatList
                        data={dados}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ 
                            flexGrow: 1, 
                            paddingBottom: 150
                        }}
                        removeClippedSubviews={true}
                        windowSize={5}
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