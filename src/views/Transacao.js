import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { useState } from "react";

import styles from '../styles/styles';
import styleMobile from '../styles/styleMobile';

export default function Transacao({id, tipo, valor, nome, descricao}) {
    const {width, height} = useWindowDimensions();
    const [receita, setReceita] = useState(tipo == 'Receita' ? true : false);
    const colorTipo = receita ? '#81cc2a' : '#cc2a2a';
    const isCell = width < 1000;    
    const estilos = isCell ? styleMobile : styles;

    const estilo = StyleSheet.create({
        tipoReceita: {
            color: colorTipo,
        },
    });

    return (
        <View style={estilos.verFin.views}>
            <View style={estilos.verFin.viewValores}>
                <Text style={estilos.verFin.text}>{nome}</Text>
                <Text style={[estilo.tipoReceita, estilos.verFin.val]}>{receita ? "+" : "-"}R${valor}</Text>
            </View>
            
            <View>
                <Text style={estilos.verFin.textDesc}>{descricao}</Text>
            </View>

            <View style={estilos.verFin.buttons}>
                <TouchableOpacity style={estilos.verFin.buttonEdit} onPress={() => {}}>
                    <Text style={estilos.text2}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.verFin.buttonDelete} onPress={() => {}}>
                    <Text style={estilos.text1}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}