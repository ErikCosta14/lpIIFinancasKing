import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Platform, Alert } from 'react-native';

import styles from '../styles/styles';
import styleMobile from '../styles/styleMobile';
import { TransacaoService } from '../services/TansacaoService.js';

export default function Transacao({ transacao, navigation, onDelete }) {
  const { width } = useWindowDimensions(); // Hook SEMPRE no topo
  const isCell = width < 1000;
  const estilos = isCell ? styleMobile : styles;

  const trJson = transacao.toJSON();
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
            navigation.navigate('Add Edit', { tr: trJson, edit: true })
          }>
          <Text style={estilos.text2}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={estilos.verFin.buttonDelete}
        onPress={async () => {await TransacaoService.delete(transacao.id); onDelete();}}>
          <Text style={estilos.text1}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
