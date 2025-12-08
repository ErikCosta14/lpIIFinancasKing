import { View, Text } from 'react-native';

export default function Transacao({id, tipo, valor, descricao}) {
    return (
        <View>
            <Text>Transação {id}</Text>
            <Text>{tipo}: R$ {valor} - {descricao}</Text>
        </View>
    )
}