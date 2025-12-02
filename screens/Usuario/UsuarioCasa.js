import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Usamos MaterialCommunityIcons para los iconos de la barra de navegación y más
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Importar useRouter para simular navegación
import { useRouter } from 'expo-router';

// --- Definición de Colores ---
const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#8D2FE9'; // Un morado más claro para acentos
const TEXT_LIGHT = '#FFFFFF';
const TEXT_DARK = '#333333';
const PLACEHOLDER_GREY = '#E5E5E5';

const { width } = Dimensions.get('window');

// URL de una imagen de ejemplo para el banner superior
const BANNER_IMAGE_URI = 'https://picsum.photos/id/102/800/400'; // Puedes reemplazar esta URL por tu propia imagen

// --- Componente de Tarjeta Pequeña ---
const CardParaTi = () => (
    <View style={styles.cardParaTi}>
        {/* Placeholder del contenido */}
        <View style={styles.cardPlaceholder} />
        <Text style={styles.cardText}>Información general</Text>
    </View>
);

// --- Componente Principal ---
const CasaUsuarios = () => {
    const router = useRouter();

    // Función simulada de navegación para la barra inferior
    const handleNavPress = (screenName) => {
        // En un proyecto real, esto navegaría a la ruta correspondiente
        console.log(`Navegando a: ${screenName}`);
        // router.push(screenName);
    };

    return (
        <View style={styles.container}>

            {/* 1. BANNER CON INFORMACIÓN DEL EVENTO */}
            <ImageBackground
                source={{ uri: BANNER_IMAGE_URI }}
                style={styles.bannerBackground}
                // Añadir un overlay oscuro para mejorar la legibilidad del texto blanco
                imageStyle={styles.bannerImage}
            >
                <View style={styles.bannerOverlay} />

                {/* Contenido del Banner */}
                <View style={styles.bannerContent}>
                    <Text style={styles.daysCount}>12</Text>
                    <Text style={styles.daysLabel}>Días para</Text>
                    <Text style={styles.eventDate}>Septiembre 15, 2025 | Despedida de soltera</Text>
                </View>

            </ImageBackground>

            {/* 2. HEADER (Flotante encima del banner) */}
            <View style={styles.headerAbsolute}>
                {/* Logo 'E' */}
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>E</Text>
                </View>

                {/* Barra de Búsqueda */}
                <View style={styles.searchBar}>
                    <Icon name="magnify" size={20} color="rgba(0, 0, 0, 0.6)" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Buscar en Elisea"
                        placeholderTextColor="rgba(0, 0, 0, 0.6)"
                        style={styles.searchInput}
                    />
                </View>

                {/* Ícono de Más Opciones */}
                <Icon name="dots-vertical" size={24} color={TEXT_LIGHT} />
            </View>


            {/* 3. CONTENIDO PRINCIPAL SCROLLABLE */}
            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>

                {/* Espacio para compensar la altura del banner que se superpone */}
                <View style={{ height: 250 }} />

                {/* 4. SECCIÓN PARA TI */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionTitle}>PARA TI</Text>
                    {/* Botón de Añadir (+) */}
                    <TouchableOpacity style={styles.addButton}>
                        <Icon name="plus" size={24} color={TEXT_LIGHT} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.paraTiScroll}>
                    <CardParaTi />
                    <CardParaTi />
                    <CardParaTi />
                    <CardParaTi />
                </ScrollView>

                {/* 5. SECCIÓN PUEDE SER QUE TE GUSTE (Cuadrícula Irregular) */}
                <Text style={styles.sectionTitle}>PUEDE SER QUE TE GUSTE</Text>
                <View style={styles.gustoGridContainer}>

                    {/* Columna 1 */}
                    <View style={styles.gustoColumna}>
                        <View style={[styles.gustoCard, styles.gustoCardLarge]} />
                        <View style={[styles.gustoCard, styles.gustoCardWide]} />
                    </View>

                    {/* Columna 2 (Grid más denso) */}
                    <View style={styles.gustoColumnaGrid}>
                        <View style={[styles.gustoCard, styles.gustoCardMedium]} />
                        <View style={styles.gustoInnerGrid}>
                            <View style={[styles.gustoCard, styles.gustoCardSmall]} />
                            <View style={[styles.gustoCard, styles.gustoCardSmall]} />
                        </View>
                        <View style={[styles.gustoCard, styles.gustoCardSmall]} />
                    </View>
                </View>

                {/* Espacio extra al final del scroll para que el contenido no quede debajo del Nav Bar */}
                <View style={{ height: 100 }} />

            </ScrollView>

            {/* 6. BARRA DE NAVEGACIÓN INFERIOR (Fija) */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButtonActive} onPress={() => handleNavPress('Home')}>
                    <View style={styles.navActiveCircle}>
                        <Icon name="home" size={24} color={PURPLE_DARK} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Chat')}>
                    <Icon name="chat" size={24} color={TEXT_LIGHT} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Search')}>
                    <Icon name="magnify" size={24} color={TEXT_LIGHT} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Notifications')}>
                    <Icon name="bell" size={24} color={TEXT_LIGHT} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// --- Estilos ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: TEXT_LIGHT,
    },
    // --- 1. BANNER CON INFORMACIÓN DEL EVENTO ---
    bannerBackground: {
        width: '100%',
        height: 250, // Altura del banner
        position: 'absolute',
        top: 0,
    },
    bannerImage: {
        resizeMode: 'cover',
    },
    bannerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: PURPLE_DARK,
        opacity: 0.3, // Opacidad para oscurecer la imagen y que el texto blanco resalte
    },
    bannerContent: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        paddingBottom: 15,
        // Agregamos un degradado sutil si fuera necesario, pero por ahora solo el overlay
    },
    daysCount: {
        color: TEXT_LIGHT,
        fontSize: 50,
        fontWeight: 'bold',
        lineHeight: 50, // Ajuste para que el texto '12' no sea demasiado alto
    },
    daysLabel: {
        color: TEXT_LIGHT,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    eventDate: {
        color: TEXT_LIGHT,
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
    },

    // --- 2. HEADER (Ahora Absolute) ---
    headerAbsolute: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingTop: 40, // Espacio para la barra de estado
        backgroundColor: 'transparent', // Transparente para que se vea el banner
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10, // Asegura que esté por encima del banner
    },
    logoContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: TEXT_LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        overflow: 'hidden',
    },
    logoText: {
        color: PURPLE_DARK,
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: TEXT_LIGHT,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginHorizontal: 10,
    },
    searchIcon: {
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 0,
    },

    // --- 3. CONTENIDO PRINCIPAL SCROLLABLE ---
    contentScroll: {
        flex: 1,
    },
    // Estilos internos del scroll
    sectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PURPLE_DARK,
    },
    addButton: {
        backgroundColor: ACCENT_COLOR, // El morado claro para el círculo
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // --- 4. SECCIÓN PARA TI ---
    paraTiScroll: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 15, // Añadido padding para que el contenido empiece correctamente
    },
    cardParaTi: {
        width: width * 0.28, // Ajustado a un valor más pequeño para que quepan 3.5 en la pantalla
        marginRight: 15,
        alignItems: 'center',
    },
    cardPlaceholder: {
        width: '100%',
        height: 100,
        backgroundColor: PLACEHOLDER_GREY,
        borderRadius: 8,
        marginBottom: 5,
    },
    cardText: {
        fontSize: 12,
        color: TEXT_DARK,
        textAlign: 'center',
    },

    // --- 5. SECCIÓN PUEDE SER QUE TE GUSTE (Grid) ---
    gustoGridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    gustoColumna: {
        width: '48%',
    },
    gustoColumnaGrid: {
        width: '48%',
    },
    gustoCard: {
        backgroundColor: PLACEHOLDER_GREY,
        borderRadius: 8,
        marginBottom: 10,
    },
    gustoCardLarge: {
        height: 200,
    },
    gustoCardMedium: {
        height: 120,
    },
    gustoCardWide: {
        height: 80,
    },
    gustoCardSmall: {
        width: '48%',
        height: 80,
    },
    gustoInnerGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    // --- 6. BARRA DE NAVEGACIÓN INFERIOR ---
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: PURPLE_DARK,
        height: 65,
        paddingBottom: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    navButton: {
        padding: 10,
    },
    navButtonActive: {
        position: 'relative',
        top: -20,
    },
    navActiveCircle: {
        backgroundColor: TEXT_LIGHT,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: PURPLE_DARK,
    }
});

export default CasaUsuarios;