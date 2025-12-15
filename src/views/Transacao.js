import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Platform, Alert } from 'react-native';
import { useState } from "react";

import styles from '../styles/styles';
import styleMobile from '../styles/styleMobile';

export default function Transacao({ transacao, navigation }) {
  const { width } = useWindowDimensions(); // Hook SEMPRE no topo
  const isCell = width < 1000;
  const estilos = isCell ? styleMobile : styles;

  const trJson = transacao.toJSON?.() ?? transacao;
  const receita = trJson.tipo === 'receita';
  const colorTipo = receita ? '#81cc2a' : '#cc2a2a';

  const estilo = StyleSheet.create({
    tipoReceita: {
      color: colorTipo,
    },
  });

  return (
    <View style={estilos.verFin.views}>
      <View style={estilos.verFin.viewValores}>
        <Text style={estilos.verFin.text}>{trJson.nome}</Text>
        <Text style={[estilo.tipoReceita, estilos.verFin.val]}>
          {receita ? '+' : '-'}R${trJson.valor}
        </Text>
      </View>

      <View>
        <Text style={estilos.verFin.textDesc}>{trJson.descricao}</Text>
      </View>

      <View style={estilos.verFin.buttons}>
        <TouchableOpacity style={estilos.verFin.buttonEdit} 
          onPress={() =>
            navigation.navigate('Add Edit', { id: trJson.id, edit: true })
          }>
          <Text style={estilos.text2}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.verFin.buttonDelete}>
          <Text style={estilos.text1}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
