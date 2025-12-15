import { View, Text, TouchableOpacity, useWindowDimensions, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import styleMobile from '../styles/styleMobile';
import { Transacao } from "../model/Transacao";
import { TransacaoService } from "../services/TansacaoService";

export default function AddEdit({navigation, route}) {
    const { id, edit } = route.params;
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;
    const estilos = isCell ? styleMobile : styles;
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("receita");

    const transacao = new Transacao(0, nome, Number(valor), descricao, tipo);

    return <>
        <SafeAreaProvider>
            <SafeAreaView>
                <Topo />

                <TextInput 
                    placeholder="Digite o nome da transação"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput 
                    placeholder="Digite o valor da transação"
                    value={valor}
                    onChangeText={setValor}
                    keyboardType="numeric"
                />

                <TextInput 
                    placeholder="Digite a descrição da transação"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <TextInput 
                    placeholder="Digite o tipo da transação (receita ou despesa)"
                    value={tipo}
                    onChangeText={setTipo}
                />

                <TouchableOpacity onPress={async () => {await TransacaoService.create(transacao), navigation.goBack()}}>
                    <Text>{edit ? "Salvar Alterações" : "Adicionar Transação"}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}