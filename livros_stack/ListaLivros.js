import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';

const livros = [
  {
    id: '1',
    titulo: 'O Pai do Laravel',
    autor: 'Techuk, Pedro',
    imagem: require('./assets/livro_laravel.png'),
  },
  {
    id: '2',
    titulo: 'Golpe do Tigre aos Chineses',
    autor: 'Basso, João',
    imagem: require('./assets/livro_tigre.png'),
  },
  {
    id: '3',
    titulo: 'Dev do Sítio',
    autor: 'Godoi, Matheus',
    imagem: require('./assets/livro_sitio.png'),
  },
];

export default function ListaLivros({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>Autor: {item.autor}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 20, padding: 15, borderWidth: 1, borderRadius: 8 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  autor: { fontSize: 14, marginBottom: 10 },
});
