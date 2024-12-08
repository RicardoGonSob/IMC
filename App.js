import {useState} from 'react';
import {Button, StyleSheet, TextInput, Text, View, Pressable} from 'react-native';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [estatura, setEstatura] = useState(0);
  const [imc, setimc ] = useState(null);
  const [estadoNutricional, setEstadoNutricional] = useState(null);

  function PesoInputHadller (enteredText){
    setPeso(enteredText);
  }
  function EstaturaInputHadler (enteredText){
    setEstatura(enteredText);
  }

  function IndicedeMasaCorporal (peso, estatura){
    return peso / (estatura * estatura);
  }

  function DeterminaEstadoNutricional (imc){
    if (imc < 18.5){
      return "Peso Bajo";
    }
    if (imc < 25.0){
      return "Peso Normal";
    }
    if (imc < 30.0){
      return "Sobrepeso";
    }
    if (imc < 40.0){
      return "Obesidad";
    }
    return "Obesidad";
  }

  function onCalcularButtonTagged(){
    const bmi = IndicedeMasaCorporal(peso, estatura);
    setimc(bmi.toFixed(4));
    setEstadoNutricional(DeterminaEstadoNutricional(bmi));
  }

  function onLimpiartButtonTagged(){
    setPeso(0);
    setEstatura(0);
    setimc(null);
    setEstadoNutricional(null);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Peso de la persona en kilogramos' style={styles.textInput}
        onChangeText={PesoInputHadller} value={peso}/>
        <TextInput placeholder='Estatura de la persona en metros' style={styles.textInput}
        onChangeText={EstaturaInputHadler} value={estatura}/>
      </View>

      <View style={styles.comandsContainer}>
        <View>
        <Pressable onPress={onCalcularButtonTagged}>
          <View style={styles.buttonCalcular}>
          <Text style={styles.buttonTextColor}>Calcular</Text>
          </View>
        </Pressable>
        </View>
        <View>
        <Pressable onPress={onLimpiartButtonTagged}>
          <View style={styles.buttonLimpiar}>
          <Text style={styles.buttonTextColor}>Limpiar</Text>
          </View>
        </Pressable>
        </View>
        {/* <Button title='Calcular' color={'green'} onPress={onCalcularButtonTagged}/>
        <Button title='Limpiar' color={'red'} onPress={onLimpiartButtonTagged}/> */}
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>El IMC de la persona es:</Text>
        <Text style={styles.results}>{imc}</Text>
        <Text style={styles.resultText}>El estado nutricional de la persona es:</Text>
        <Text style={styles.results}>{estadoNutricional}</Text>
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
  },
  buttonCalcular: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'green'
  },
  buttonLimpiar:{
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'red'
  },
  buttonTextColor:{
    color: 'white',
  }
});
