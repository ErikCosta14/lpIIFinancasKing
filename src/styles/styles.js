import { StyleSheet } from "react-native";

export default StyleSheet.create(
{   
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
    },
    content: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        paddingBottom: 150,
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
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        flexDirection: 'column',
        height: '70%',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        borderRadius: 10,
        marginRight: '5%',
        backgroundColor: '#81cc2a',
    },
    text1: {
        color: '#f1f1f1',
    },
    text2: {
        color: '#1d1c1cff',
    },
    posButton: {
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: '5%',
    },

    top: {
        topo: {
            marginTop: 0,
            backgroundColor: '#00490e',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        topoImg: {
            width:150,
            height: 150,
            marginLeft: '5%',
        },
        topoTexto: {
            fontSize: 20,
            color: '#f1f1f1',
            marginLeft: 10,
        },
        menu: {
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: '5%',
        },
        textMenu: {
            padding: 10,
            borderRadius: 10,
        },
        textoMenuSelect: {
            backgroundColor: '#bded85',
            color: '#00490e',
        },
    },

    verFin: {
        view: {
            width: '100%',
            height: '75%',
        },
        views: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '2%',
            flexDirection: 'column',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
            width: '30%',
            borderRadius: 10,
            backgroundColor: '#ffffff',
        },
        buttons: {
            marginTop: '2%',
            flexDirection: 'row',
        },
        buttonEdit: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '5%',
            borderRadius: 5,
            marginLeft: 'auto',
            backgroundColor: '#ffc145',
        },
        buttonDelete: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '5%',
            borderRadius: 5,
            marginRight: 'auto',
            backgroundColor: '#b80c09',
        },
        viewValores:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        text: {
            fontSize: 20,
            marginRight: '2%',
        },
        val: {
            fontSize: 30,
            marginLeft: '2%',
        },
        textDesc: {
            color: '#1d1c1c64',
        },
    },
}
)