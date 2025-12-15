export class Transacao {
    constructor(id, nome, valor, descricao, tipo) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.descricao = descricao;
        this.tipo = tipo;
    }

    static fromJSON(json) {
        return new Transacao(
            json.id,
            json.nome,
            json.valor,
            json.descricao,
            json.tipo
        );
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            valor: this.valor,
            descricao: this.descricao,
            tipo: this.tipo
        };
    }

    validate() {
        const errors = [];

        if (!this.nome || this.nome.trim() === '') {
            errors.push('Nome é obrigatório');
        }

        if (!this.valor || this.valor <= 0) {
            errors.push('Valor deve ser maior que zero');
        }

        if (!this.descricao || this.descricao.trim() === '') {
            errors.push('Descrição é obrigatória');
        }

        if (!['receita', 'despesa'].includes(this.tipo)) {
            errors.push('Tipo deve ser "receita" ou "despesa"');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}