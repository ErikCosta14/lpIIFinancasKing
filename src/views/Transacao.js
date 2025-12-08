import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from "react";

import styles from '../styles/styles';

export default function Transacao({id, tipo, valor, nome, descricao}) {
    const [receita, setReceita] = useState(tipo == 'Receita' ? true : false);
    const colorTipo = receita ? '#81cc2a' : '#cc2a2a';
    const estilo = StyleSheet.create({
        tipoReceita: {
            color: colorTipo,
        },
    });

    return (
        <View style={styles.verFin.views}>
            <View style={styles.verFin.viewValores}>
                <Text style={styles.verFin.text}>{nome}</Text>
                <Text style={[estilo.tipoReceita, styles.verFin.val]}>{receita ? "+" : "-"}R${valor}</Text>
            </View>
            
            <View>
                <Text style={styles.verFin.textDesc}>{descricao}</Text>
            </View>

            <View style={styles.verFin.buttons}>
                <TouchableOpacity style={styles.verFin.buttonEdit} onPress={() => {}}>
                    <Text style={styles.text2}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.verFin.buttonDelete} onPress={() => {}}>
                    <Text style={styles.text1}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}