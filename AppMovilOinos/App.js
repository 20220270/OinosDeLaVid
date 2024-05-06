import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { getCurrentDate } from './utils/obtenerfecha'; // Importamos la función para obtener la fecha actual
import React, { useState, useEffect } from 'react';
import Pie from 'react-native-pie';

export default function App() {

    //Codigo para obtener la fecha actual
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Función para actualizar la fecha y hora cada segundo
        const intervalo = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Limpiamos el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []); // El segundo parámetro [] asegura que se ejecute solo una vez al montar el componente

    // Formatear la fecha y hora
    const formattedDateTime = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;


    //Grafico
    const Data = [
        {percentage : 40, color : '#FFAB0F'},
        {percentage : 40, color : '#247AFD'},
        {percentage : 20, color : '#FE4455'}
    ]

    return (
        <View style={styles.container}>

            <View style={styles.redBox}>
                <Text style={styles.cerrarS}>Cerrar Sesión</Text>
                <TouchableOpacity style={styles.menuH}>
                    <Text style={styles.tresLineas}>≡</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.bienvenida}>BIENVENIDO</Text>

            <View style = {styles.fondo}>
            <Text style={styles.bienvenida}>Aqui va el grafico</Text>

            

            </View>

            <Text style={styles.fechaActual}>Fecha y Hora actual: {formattedDateTime}</Text>

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
    redBox: {
        backgroundColor: '#871313',
        width: '100%',
        height: 70,
        flexDirection: 'row', // Alinea los elementos horizontalmente
        justifyContent: 'space-between', // Espacio entre los elementos
        alignItems: 'center', // Alinea verticalmente
        paddingHorizontal: 10, // Espacio interno horizontal
    },
    cerrarS: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20
    },
    menuH: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
    },

    tresLineas: {
        fontSize: 40,
        color: 'white'
    },

    bienvenida: {
        margin: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },

    fondo:{
        backgroundColor : '#345691',
        marginBottom : 10
    },


});
