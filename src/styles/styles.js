import { StyleSheet } from "react-native";

export default StyleSheet.create(
{   
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        overflow: 'scroll',
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
            height: '20%',
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