import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { useState, useEffect } from "react";

import styles from '../styles/styles';
import styleMobile from '../styles/styleMobile';
import { TransacaoService } from "../services/TansacaoService";

export default function Transacao({ id }) {
  const [transacao, setTransacao] = useState(null);
  const { width } = useWindowDimensions(); // Hook SEMPRE no topo
  const isCell = width < 1000;
  const estilos = isCell ? styleMobile : styles;

  const [receita, setReceita] = useState(false);

  useEffect(() => {
    async function carregar() {
      const t = await TransacaoService.getById(id);
      setTransacao(t);
      if (t) {
        setReceita(t.tipo === 'receita');
      }
    }
    carregar();
  }, [id]);

  // ⚠️ AGORA SIM pode condicionar render
  if (!transacao) return null;

  const trJson = transacao.toJSON();
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
        <TouchableOpacity style={estilos.verFin.buttonEdit}>
          <Text style={estilos.text2}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.verFin.buttonDelete}>
          <Text style={estilos.text1}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
