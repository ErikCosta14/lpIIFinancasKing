import { useState, useEffect } from "react";
import { TransacaoService } from "../services/TansacaoService";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
    const [saldo, setSaldo] = useState(0);
    const [receita, setReceita] = useState(0);
    const [despesa, setDespesas] = useState(0);
    const [ultimasTransacoes, setUltimasTransacoes] = useState([]);

    useEffect(() => {
        async function carregarDados() {
            try {
                const saldoAtual = await TransacaoService.getSaldo();
                setSaldo(saldoAtual);

                const receitas = await TransacaoService.getReceitas();
                setReceita(receitas);

                const despesas = await TransacaoService.getDespesas();
                setDespesas(despesas);

                const transacoes = await TransacaoService.getAll();
                // Pega as 3 últimas transações
                setUltimasTransacoes(transacoes.slice(0, 3));
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        }

        carregarDados();
    }, []);

    return (
        <ScrollView style={styles.scrollView}>
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

                    {ultimasTransacoes.length === 0 ? (
                        <Text style={styles.mensagemVazia}>Nenhuma transação encontrada</Text>
                    ) : (
                        ultimasTransacoes.map((transacao) => (
                            <View key={transacao.id} style={styles.transacaoItem}>
                                <View style={styles.transacaoInfo}>
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
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
    },
    titulo: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    saldo: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    positivo: {
        color: '#2ecc71',
    },
    negativo: {
        color: '#e74c3c',
    },
    resumoContainer: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        minWidth: 150,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitulo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    valorReceita: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    valorDespesa: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    transacoesContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    transacoesTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    transacaoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    transacaoInfo: {
        flex: 1,
    },
    transacaoDescricao: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        marginBottom: 4,
    },
    transacaoData: {
        fontSize: 12,
        color: '#999',
    },
    transacaoValor: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    valorPositivo: {
        color: '#2ecc71',
    },
    valorNegativo: {
        color: '#e74c3c',
    },
    mensagemVazia: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        marginTop: 10,
    },
});