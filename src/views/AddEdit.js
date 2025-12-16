import { View, Text, TouchableOpacity, useWindowDimensions, TextInput, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import styles from "../styles/styles.js";
import Topo from "./Topo.js";
import styleMobile from '../styles/styleMobile';
import { Transacao } from "../model/Transacao";
import { TransacaoService } from "../services/TansacaoService";

export default function AddEdit({navigation, route}) {
    const { tr, edit } = route.params;
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;
    const estilos = isCell ? styleMobile : styles;
    const [idTransacao, setIdTransacao] = useState("");
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("receita");

    useEffect(() => {
        if (edit && tr) {
            setNome(tr.nome);
            setValor(String(tr.valor));
            setDescricao(tr.descricao);
            setTipo(tr.tipo);
            setIdTransacao(tr.id);
        }
    }, [edit, tr]);

    const valorNumerico = isNaN(Number(valor)) ? 0 : Number(valor);
    const transacao = new Transacao(idTransacao, nome, valorNumerico, descricao, tipo);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={estilos.page}>
                <Topo navigation={navigation}/>

                <ScrollView style={{flex: 1, width: '100%'}} contentContainerStyle={{
                        alignItems: 'center',
                        flexGrow: 1, 
                        paddingBottom: 150,
                    }}>
                    <View style={estilos.formContainer}>
                        <Text style={estilos.formTitulo}>
                            {edit ? "Editar Transação" : "Nova Transação"}
                        </Text>

                        <View style={estilos.inputContainer}>
                            <Text style={estilos.inputLabel}>Nome da Transação</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="Digite o nome"
                                value={nome}
                                onChangeText={setNome}
                            />
                        </View>

                        <View style={estilos.inputContainer}>
                            <Text style={estilos.inputLabel}>Valor</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="0.00"
                                value={valor}
                                onChangeText={setValor}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={estilos.inputContainer}>
                            <Text style={estilos.inputLabel}>Descrição</Text>
                            <TextInput
                                style={[estilos.input, {height: 80, textAlignVertical: 'top'}]}
                                placeholder="Digite uma descrição"
                                value={descricao}
                                onChangeText={setDescricao}
                                multiline
                                numberOfLines={3}
                            />
                        </View>

                        <View style={estilos.inputContainer}>
                            <Text style={estilos.inputLabel}>Tipo</Text>
                            <View style={estilos.tipoContainer}>
                                <TouchableOpacity
                                    style={[
                                        estilos.tipoButton,
                                        tipo === 'receita' && estilos.tipoButtonReceita
                                    ]}
                                    onPress={() => setTipo('receita')}
                                >
                                    <Text style={[
                                        estilos.tipoText,
                                        tipo === 'receita' && estilos.tipoTextReceita
                                    ]}>
                                        Receita
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        estilos.tipoButton,
                                        tipo === 'despesa' && estilos.tipoButtonDespesa
                                    ]}
                                    onPress={() => setTipo('despesa')}
                                >
                                    <Text style={[
                                        estilos.tipoText,
                                        tipo === 'despesa' && estilos.tipoTextDespesa
                                    ]}>
                                        Despesa
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={estilos.submitButton}
                            onPress={async () => {
                                if (edit) {
                                    await TransacaoService.update(idTransacao, transacao);
                                } else {
                                    await TransacaoService.create(transacao);
                                }
                                navigation.goBack();
                            }}
                        >
                            <Text style={estilos.submitButtonText}>
                                {edit ? "Salvar Alterações" : "Adicionar Transação"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={estilos.cancelButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={estilos.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}