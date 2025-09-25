import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Tela Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details', { produtoId: 101 })}
      />
    </View>
  );
}
