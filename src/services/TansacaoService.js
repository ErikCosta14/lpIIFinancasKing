import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transacao } from '../model/Transacao';

const STORAGE_KEY = '@transacao';

export const TransacaoService = {
    async create(transacao) {
        try {
            const transacoes = await this.getAll();
            const novoId = transacoes.length > 0 ? Math.max(...transacoes.map(t => t.id)) + 1 : 1;

            const novaTransacao = new Transacao(
                novoId,
                transacao.nome,
                transacao.valor,
                transacao.descricao,
                transacao.tipo
            );

            const valitacao = novaTransacao.validate();
            if (!valitacao.isValid) {
                throw new Error(valitacao.errors.join(', '));
            }

            transacoes.push(novaTransacao);
            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(transacoes.map(t => t.toJSON()))
            );

            return novaTransacao;
        } catch (error) {
            throw new Error('Erro ao criar transação: ' + error.message);
        }
    },

    async getAll() {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            if (!data) return [];

            const jsonArray = JSON.parse(data);
            const transacoes = jsonArray.map(json => Transacao.fromJSON(json));
            return transacoes;
        } catch (error) {
            throw new Error('Erro ao buscar transações: ' + error.message);
        }
    },

    async getById(id) {
        try {
            const transacoes = await this.getAll();
            const transacao = transacoes.find(t => t.id === id);
            return transacao;
        } catch (error) {
            throw new Error('Erro ao buscar transação: ' + error.message);
        }
    },

    async update(id, updatedData) {
        try {
            const transacoes = await this.getAll();
            const index = transacoes.findIndex(t => t.id === id);

            if (index === -1) {
                throw new Error('Transação não encontrada');
            }

            const updatedTransacao = new Transacao(
                id,
                updatedData.nome,
                updatedData.valor,
                updatedData.descricao,
                updatedData.tipo
            );

            const validation = updatedTransacao.validate();
            if (!validation.isValid) {
                throw new Error(validation.errors.join(', '));
            }

            transacoes[index] = updatedTransacao;

            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(transacoes.map(t => t.toJSON()))
            );

            return updatedTransacao;
        } catch (error) {
            throw new Error('Erro ao atualizar transação: ' + error.message);
        }
    },

    async delete(id) {
        try {
            const transacoes = await this.getAll();
            const filteredTransacoes = transacoes.filter(t => t.id !== id);

            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(filteredTransacoes.map(t => t.toJSON()))
            );

            return true;
        } catch (error) {
            throw new Error('Erro ao deletar transação: ' + error.message);
        }
    }
};