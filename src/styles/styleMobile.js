import { StyleSheet } from "react-native";

export default StyleSheet.create(
{
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        overflow: 'scroll',
        height: '100%',
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
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#00490e',
            height: '20%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
        },
        topoImg: {
            width: '30%',
            height: '30%',
            marginLeft: '5%',
            padding: '11%',
        },
        topoTexto: {
            fontSize: 14,
            color: '#f1f1f1',
            marginLeft: 10,
        },
        menu: {
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: '5%',
        },
        textMenu: {
            padding: 5,
            borderRadius: 10,
        },
        textoMenuSelect: {
            backgroundColor: '#bded85',
            color: '#00490e',
        },
    },
    tabBar: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        height: 70,
        paddingBottom: 10,
        paddingTop: 5,
    },
    tabBarLabel: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: 3,
    },
    tabBarIcon: {
        marginTop: 4,
        marginBottom: 1,
    },
    tabIcon: {
        fontSize: 18,
        lineHeight: 18,
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
            borderWidth: 1,
            borrderColor: '#00490e',
            padding: 10,
            width: '90%',
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
    formContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 25,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 18,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    inputFocused: {
        borderColor: '#00490e',
        backgroundColor: '#fff',
    },
    tipoContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15,
    },
    tipoButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tipoButtonSelected: {
        borderColor: '#00490e',
        backgroundColor: '#f0f8f0',
    },
    tipoButtonReceita: {
        borderColor: '#2ecc71',
        backgroundColor: '#e8f8f0',
    },
    tipoButtonDespesa: {
        borderColor: '#e74c3c',
        backgroundColor: '#fdeaea',
    },
    tipoText: {
        fontSize: 15,
        color: '#666',
        fontWeight: '500',
    },
    tipoTextSelected: {
        color: '#00490e',
        fontWeight: 'bold',
    },
    tipoTextReceita: {
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    tipoTextDespesa: {
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#00490e',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: 'transparent',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#e0e0e0',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: 15,
        fontWeight: '500',
    },
    // Adicione ao styleMobile.js

    transacoesPageWrapper: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    transacoesPageTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    addTransacaoButton: {
        backgroundColor: '#00490e',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },
    addTransacaoButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    transacoesListWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
}
)