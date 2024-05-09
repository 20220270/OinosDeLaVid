import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
    const carouselItems = [
        {
            imageUrl: require('./images/imagenvinoB.png'),
            iconName: 'chevron-left',
        },
        {
            imageUrl: require('./images/imagenvinoB.png'),
            iconName: 'chevron-right',
        },
        {
            imageUrl: require('./images/imagenvinoB.png'),
            iconName: 'chevron-right',
        },
    ];

    const carouselRef = React.useRef(null);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.imageUrl} style={styles.slideImage} />
                {index === 0 && (
                    <TouchableOpacity onPress={() => carouselRef.current.snapToPrev()} style={styles.icono}>
                        <Feather name={item.iconName} size={24} color="white" />
                    </TouchableOpacity>
                )}
                {index === carouselItems.length - 1 && (
                    <TouchableOpacity onPress={() => carouselRef.current.snapToNext()} style={[styles.icono, styles.iconoDerecha]}>
                        <Feather name={item.iconName} size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image
                    source={require('./images/logo.png')}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.menuH}>
                    <Text style={styles.tresLineas}>≡</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                <Carousel
                    ref={carouselRef}
                    data={carouselItems}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    loop={true}
                />

                <View style={styles.divider} />

                <View style={styles.menuDeVinosContainer}>
                    <Text style={styles.menuDeVinosText}>Menu de Vinos</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Buscar vinos, marcas y categorías"
                            placeholderTextColor="#999"
                        />
                        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Información del Vino</Text>
                        <Text style={styles.cardText}>Tipo: Tinto</Text>
                        <Text style={styles.cardText}>Origen: España</Text>
                        <Text style={styles.cardText}>Año: 2020</Text>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Información del Vino</Text>
                        <Text style={styles.cardText}>Tipo: Tinto</Text>
                        <Text style={styles.cardText}>Origen: España</Text>
                        <Text style={styles.cardText}>Año: 2020</Text>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Información del Vino</Text>
                        <Text style={styles.cardText}>Tipo: Tinto</Text>
                        <Text style={styles.cardText}>Origen: España</Text>
                        <Text style={styles.cardText}>Año: 2020</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.cardContainerUs}>
                    <Text style={styles.SobrenosotrosText}>Sobre nosotros</Text>
                    <View style={styles.cardsAndDividerContainer}>
                        <View style={styles.cardSobreNosotros}>
                            <Text style={styles.cardTitleUs}>Información del Vino</Text>
                            <Text style={styles.cardTextUs}>Tipo: Tinto</Text>
                            <Text style={styles.cardTextUs}>Origen: España</Text>
                            <Text style={styles.cardTextUs}>Año: 2020</Text>
                        </View>

                        <View style={styles.cardSobreNosotros}>
                            <Text style={styles.cardTitleUs}>Información del Vino</Text>
                            <Text style={styles.cardTextUs}>Tipo: Tinto</Text>
                            <Text style={styles.cardTextUs}>Origen: España</Text>
                            <Text style={styles.cardTextUs}>Año: 2020</Text>
                        </View>

                        <View style={styles.cardSobreNosotros}>
                            <Text style={styles.cardTitleUs}>Información del Vino</Text>
                            <Text style={styles.cardTextUs}>Tipo: Tinto</Text>
                            <Text style={styles.cardTextUs}>Origen: España</Text>
                            <Text style={styles.cardTextUs}>Año: 2020</Text>
                        </View>

                        <View style={styles.cardSobreNosotros}>
                            <Text style={styles.cardTitleUs}>Información del Vino</Text>
                            <Text style={styles.cardTextUs}>Tipo: Tinto</Text>
                            <Text style={styles.cardTextUs}>Origen: España</Text>
                            <Text style={styles.cardTextUs}>Año: 2020</Text>
                        </View>

                        {/* Linea divisora */}
                        <View style={styles.dividerBehindCards} />
                    </View>
                </View>




            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navBar: {
        backgroundColor: '#E9E8E8',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    menuH: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
    },
    tresLineas: {
        fontSize: 40,
        color: 'white',
    },
    image: {
        width: 70,
        height: 70,
    },
    scrollView: {
        flex: 1,
        marginTop: 80, // Altura del navBar
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    slide: {
        width: '100%',
        height: 270,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImage: {
        width: '100%',
        height: '100%',
    },
    icono: {
        position: 'absolute',
        left: 10,
        top: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 20,
    },
    iconoDerecha: {
        left: 'auto',
        right: 10,
    },
    divider: {
        width: '100%',
        height: 2,
        marginTop: 10,
        backgroundColor: 'black',
    },
    menuDeVinosContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    menuDeVinosText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    SobrenosotrosText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        marginRight: 10,
    },
    searchIcon: {
        marginRight: 10,
    },

    cardContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    cardContainerUs: {
        alignItems: 'center',
        marginTop: 20,
    },
    SobrenosotrosText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardsAndDividerContainer: {
        backgroundColor: 'black',
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
    },
    cardSobreNosotros: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        
        
    },
    cardTitleUs: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    cardTextUs: {
        fontSize: 16,
        color: 'white',
    },
    dividerBehindCards: {
        height: 1,
        backgroundColor: 'white',
    },

    card: {
        backgroundColor: '#E9E8E8',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
