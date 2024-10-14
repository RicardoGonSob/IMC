import { Button, StyleSheet, TextInput, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Peso de la persona en kilogramos' style={styles.textInput}/>
        <TextInput placeholder='Estatura de la persona en metros' style={styles.textInput}/>
      </View>

      <View style={styles.comandsContainer}>
        <Button title='Calcular' color={'green'}/>
        <Button title='Limpiar' color={'red'}/>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>El IMC de la persona es:</Text>
        <Text style={styles.results}>24.36</Text>
        <Text style={styles.resultText}>El estado nutricional de la persona es:</Text>
        <Text style={styles.results}>Peso normal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // gap: 50,
    alignItems: 'fill',
    justifyContent: 'top',
  },
  inputContainer: {
    flex: 0,
    borderColor: 'lightgray',
    borderWidth: 2,
    padding: 8,
  },
  comandsContainer: {
    flex: 0,
    // borderColor: 'lightgray',
    // borderWidth: 3,
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
    gap: 48,
  },
  resultsContainer: {
    flex: 0,
    borderColor: 'lightgray',
    borderWidth: 2,
    padding: 8,
  },
  textInput: {
    borderColor: 'lightgray',
    borderWidth: 2.5,
    margin: 4,
    fontSize: 18,
  },
  resultText: {
    fontSize: 18,
  },
  results: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16
  }
});
