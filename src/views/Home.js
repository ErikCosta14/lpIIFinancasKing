import { useState } from "react";
import { TransacaoService } from "../services/TansacaoService";
import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import Topo from "./Topo";
import styles from "../styles/styles.js";

export default function Home({ navigation }) {
    const [saldo, setSaldo] = useState(0);
    const [receita, setReceita] = useState(0);
    const [despesa, setDespesas] = useState(0);
    const [ultimasTransacoes, setUltimasTransacoes] = useState([]);
    const {width, height} = useWindowDimensions();
    const isCell = width < 1000;

    useFocusEffect(
        useCallback(() => {
            async function carregarDados() {
                try {
                    const saldoAtual = await TransacaoService.getSaldo();
                    setSaldo(saldoAtual);

                    const receitas = await TransacaoService.getReceitas();
                    setReceita(receitas);

                    const despesas = await TransacaoService.getDespesas();
                    setDespesas(despesas);

                    const transacoes = await TransacaoService.getAll();

                    setUltimasTransacoes(transacoes.slice(-5).reverse());
                } catch (error) {
                    console.error("Erro ao carregar dados:", error);
                }
            }

            carregarDados();
        }, [])
    );

    return (
        <View style={styles.homeContainer}>
            <Topo/>
            <View style={styles.container}>
                <Text style={styles.titulo}>Saldo Atual</Text>
                <Text style={[styles.saldo, saldo >= 0 ? styles.positivo : styles.negativo]}>
                    R$ {saldo.toFixed(2)}
                </Text>

                <View style={styles.resumoContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitulo}>Receitas</Text>
                        <Text style={styles.valorReceita}>
                            R$ {receita.toFixed(2)}
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitulo}>Despesas</Text>
                        <Text style={styles.valorDespesa}>
                            R$ {despesa.toFixed(2)}
                        </Text>
                    </View>
                </View>

                <View style={styles.transacoesContainer}>
                    <Text style={styles.transacoesTitulo}>Últimas Transações</Text>

                    <ScrollView style={styles.transacoesScroll}>
                        {ultimasTransacoes.length === 0 ? (
                            <Text style={styles.mensagemVazia}>Nenhuma transação encontrada</Text>
                        ) : (
                            ultimasTransacoes.map((transacao) => (
                                <View key={transacao.id} style={styles.transacaoItem}>
                                    <View style={styles.transacaoInfo}>
                                        <Text style={styles.transacaoNome}>
                                            {transacao.nome}
                                        </Text>
                                        <Text style={styles.transacaoDescricao}>
                                            {transacao.descricao}
                                        </Text>
                                    </View>
                                    <Text
                                        style={[
                                            styles.transacaoValor,
                                            transacao.tipo === 'receita'
                                                ? styles.valorPositivo
                                                : styles.valorNegativo
                                        ]}
                                    >
                                        {transacao.tipo === 'receita' ? '+' : '-'} R$ {Math.abs(transacao.valor).toFixed(2)}
                                    </Text>
                                </View>
                            ))
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}