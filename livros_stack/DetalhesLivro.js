import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function DetalhesLivro({ route, navigation }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>Autor: {livro.autor}</Text>
      <Image source={livro.imagem} style={styles.imagem} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  autor: { fontSize: 16, marginBottom: 20 },
  imagem: { width: 150, height: 150, marginBottom: 20, borderRadius: 8 },
});
