import { StyleSheet } from "react-native";

export default StyleSheet.create(
{
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
        backgroundColor: '#5ab334',
        color: '#00490e',
    },
}
)