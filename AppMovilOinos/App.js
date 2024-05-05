import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.redBox}>
      </View>

      {/* Imagen */}
      <Image
        source={require('./images/logo.png')}
        style={styles.image}
      />

      <View style={styles.line}></View>

      <Text style = {styles.textoBienvenido} >BIENVENIDO</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alias del administrador:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su alias"
          keyboardType="default"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Clave:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su clave"
          secureTextEntry={true} // Asegura que el texto se oculte mientras se escribe
          keyboardType="default"
        />
      </View>

      <TouchableOpacity style = {styles.boton}>
      <Text style={styles.textoBoton}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.botonRecu}>
      <Text style={styles.recuContra}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },

  redBox: {
    backgroundColor: '#871313',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },

  textoBienvenido:{
    fontWeight: 'bold',
    marginBottom:30,
    marginTop:20
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  boton:{
    backgroundColor : '#871313',
    width: 130,
    height: 40,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textoBoton:{
    color: '#fff'
  },

  botonRecu:{
    margin:15
  },

  recuContra:{
    fontStyle: 'italic',
    fontSize: 15,
    margin:15
  }

});
