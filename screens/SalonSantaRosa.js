// screens/SalonSantaRosa.js

import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    Image as RNImage,
    Alert 
} from 'react-native';
// Asegúrate de que los paths a las imágenes son correctos o utiliza placeholder si es necesario
// Asumiendo que 'expo-image' no es esencial para el layout y usando RNImage para consistencia en mobile
import { Image } from 'expo-image';

// Se han modificado y añadido imágenes de referencia para simular la interfaz
const BANNER_IMAGE = '/assets/images/SALON.jpg'; // Imagen del Hero (fondo superior)
const WELCOME_IMAGE = '/assets/images/WELCOME.jpg'; // Imagen lateral de la sección de bienvenida

// Componente para los items de la sección "Lo que Ofrecemos"
const ServiceItem = ({ icon, text }) => (
    <View style={styles.serviceItem}>
        {/* Usamos emojis como simulación de íconos vectoriales (como los de la imagen) */}
        <Text style={styles.serviceIcon}>{icon}</Text>
        <Text style={styles.serviceText}>{text}</Text>
    </View>
);

const SalonSantaRosa = () => {
    // Estados para simular la entrada de datos en los campos
    const [selectedDate, setSelectedDate] = React.useState('Fecha');
    const [selectedDelivery, setSelectedDelivery] = React.useState('Entrega');
    const [peopleCount, setPeopleCount] = React.useState('');

    // Funciones de interacción simuladas
    const handleDateSelect = () => {
        Alert.alert("Calendario Simulado", "Aquí se desplegaría un calendario para seleccionar la fecha.");
    };

    const handleDeliverySelect = () => {
        Alert.alert("Menú de Entrega Simulado", "Aquí se desplegaría un menú de opciones de entrega.");
    };

    const handleSearch = () => {
        Alert.alert("Búsqueda", `Buscando para: ${selectedDate}, ${selectedDelivery}, ${peopleCount} personas`);
    };
    
    const handleOrder = () => {
        Alert.alert("Acción", "Procediendo a realizar pedido...");
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
            {/* 🛑 NAVEGACIÓN SUPERIOR FIJA 🛑 */}
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>E</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput 
                        placeholder="Buscar en Elisea" 
                        placeholderTextColor="#B991C6" // Color de placeholder más claro
                        style={styles.headerInput} 
                    />
                </View>
                <Text style={{ color: 'white', fontSize: 24, paddingLeft: 10 }}>⋮</Text>
            </View>

            <ScrollView style={styles.scrollViewContent}>
                
                {/* === HERO / IMAGEN PRINCIPAL === */}
                <Image
                    source={{ uri: BANNER_IMAGE }}
                    style={styles.hero}
                    contentFit="cover"
                >
                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroTitle}>Salón Santa Rosa</Text>
                        {/* Texto descriptivo de la imagen */}
                        <Text style={styles.heroDescription}>
                            Este salón está diseñado en un ambiente rústico y elegante para vivir momentos inolvidables y llenos de recuerdos...
                        </Text>
                    </View>
                </Image>

                {/* === BUSCADOR (BARRA DE FILTROS AL ESTILO DE LA FOTO) === */}
                {/* 🛑 MODIFICACIÓN CLAVE DE LA BARRA DE FILTROS 🛑 */}
                <View style={styles.buscador}>
                    
                    {/* Campo Fecha */}
                    <TouchableOpacity 
                        style={[styles.simulatedSelect, { flex: 2 }]} // Ajuste de flex para ancho
                        onPress={handleDateSelect}
                    >
                        <Text style={styles.simulatedSelectText}>Fecha</Text>
                        <Text style={styles.selectIcon}>🗓️</Text> 
                    </TouchableOpacity>

                    {/* Campo Entrega */}
                    <TouchableOpacity 
                        style={[styles.simulatedSelect, { flex: 2 }]} // Ajuste de flex para ancho
                        onPress={handleDeliverySelect}
                    >
                        <Text style={styles.simulatedSelectText}>Entrega</Text>
                        <Text style={styles.selectIcon}>▼</Text>
                    </TouchableOpacity>

                    {/* Campo Nº Personas */}
                    <View style={[styles.simulatedSelect, { flex: 2.5 }]}> 
                        <TextInput 
                            placeholder="Nº personas" 
                            placeholderTextColor="#B991C6"
                            keyboardType="numeric"
                            style={styles.personasInput} 
                            value={peopleCount}
                            onChangeText={setPeopleCount}
                        />
                    </View>

                    {/* Botón Buscar */}
                    <TouchableOpacity style={styles.buscadorButton} onPress={handleSearch}>
                        <Text style={styles.buscadorButtonText}>BUSCAR</Text>
                    </TouchableOpacity>
                </View>

                {/* === SECCIÓN DE BIENVENIDA Y GALERÍA === */}
                <View style={styles.bienvenidaSection}>
                    
                    {/* Contenido de Bienvenida (Texto y Galería Vertical Pequeña) */}
                    <View style={styles.bienvenidaContent}>
                        <View style={styles.galeriaIzquierda}>
                            <RNImage source={{ uri: BANNER_IMAGE }} style={styles.galeriaImageSmall} />
                            <RNImage source={{ uri: WELCOME_IMAGE }} style={styles.galeriaImageSmall} />
                        </View>
                        <View style={styles.textoBienvenida}>
                            <Text style={styles.bienvenidaTitle}>Bienvenido al mejor salón de fiestas al aire libre</Text>
                            <Text style={styles.bienvenidaText}>
                                Nos enfocamos en transformar cualquier ocasión especial en un recuerdo inolvidable, ofreciendo un ambiente **elegante, cálido y exclusivo**. Creamos experiencias únicas que superan todas tus expectativas para eventos sociales.
                            </Text>
                            <Text style={styles.bienvenidaLink}>Leer más...</Text>
                        </View>
                    </View>

                    {/* Sección de Servicios "Lo que Ofrecemos" con imagen lateral */}
                    <View style={styles.serviciosContainer}>
                        {/* Imagen lateral grande de la foto */}
                        <RNImage source={{ uri: WELCOME_IMAGE }} style={styles.serviciosImage} />

                        {/* Contenedor de Servicios (Fondo Morado) */}
                        <View style={styles.servicios}>
                            <Text style={styles.serviciosTitle}>Lo que Ofrecemos</Text>
                            <Text style={styles.serviciosSubtitle}>
                                En Salón Santa Rosa de Eventos al Aire Libre, ofrecemos el espacio ideal para tu celebración. Descubre cómo nuestros servicios exclusivos transformarán tu celebración.
                            </Text>

                            <View style={styles.serviciosList}>
                                {/* Columna 1 */}
                                <View style={styles.serviciosColumn}>
                                    <ServiceItem icon="📝" text="Mensaje de bienvenida y SEO" />
                                    <ServiceItem icon="📅" text="Decoración festiva" />
                                    <ServiceItem icon="🔊" text="Área de baile con música" />
                                    <ServiceItem icon="💡" text="Iluminación y sonido" />
                                </View>
                                {/* Columna 2 */}
                                <View style={styles.serviciosColumn}>
                                    <ServiceItem icon="🅿️" text="Estacionamiento para +150 personas" />
                                    <ServiceItem icon="🧹" text="Limpieza antes y después del evento" />
                                    <ServiceItem icon="🍽️" text="Flete de baile" />
                                    <ServiceItem icon="🚻" text="Baños equipados" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
                {/* === BOTÓN PRINCIPAL AL ESTILO DE LA FOTO === */}
                {/* 🛑 Se coloca el botón principal al final de la sección principal 🛑 */}
                <TouchableOpacity style={styles.btnPrincipal} onPress={handleOrder}>
                    <Text style={styles.btnPrincipalText}>REALIZAR PEDIDO</Text>
                </TouchableOpacity>

                {/* Espacio para que el scroll termine por encima del footer fijo */}
                <View style={{ height: 100 }}></View>

            </ScrollView>

            {/* 🛑 NAVEGACIÓN INFERIOR FIJA (FOOTER) 🛑 */}
            <View style={styles.fixedFooterNav}>
                <TouchableOpacity style={styles.footerNavItem}><Text style={styles.footerNavIcon}>🏠</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerNavItem}><Text style={styles.footerNavIcon}>💬</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerNavItemSearch}>
                    <Text style={styles.footerNavSearchIcon}>🔍</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerNavItem}><Text style={styles.footerNavIcon}>🔔</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerNavItem}><Text style={styles.footerNavIcon}>⚙️</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default SalonSantaRosa;

// --- ESTILOS DE REACT NATIVE MODIFICADOS ---
const PURPLE_DARK = '#210535';
const PURPLE_MEDIUM = '#3b004f';
const PURPLE_LIGHT = '#431B5F';
const ACCENT_COLOR = '#B991C6';
const WHITE = 'white';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    scrollViewContent: {
        // Estilo solo para el ScrollView, no para el contenedor principal
    },
    
    // === HEADER (SUPERIOR FIJO) ===
    header: {
        backgroundColor: PURPLE_DARK,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        top: 0,
        zIndex: 100, // Asegura que esté por encima de todo
    },
    logo: {
        borderWidth: 2,
        borderColor: WHITE,
        borderRadius: 50,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBarContainer: {
        flex: 1,
        backgroundColor: PURPLE_MEDIUM,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginLeft: 10,
        height: 35,
    },
    searchIcon: {
        color: ACCENT_COLOR,
        marginRight: 5,
        fontSize: 18,
    },
    headerInput: {
        flex: 1,
        color: WHITE,
        fontSize: 14,
        padding: 0,
    },

    // === HERO / IMAGEN PRINCIPAL ===
    hero: {
        width: '100%',
        height: 350, // Más alto para que se vea más el fondo morado en la imagen
        marginTop: 55, // Espacio para el header
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Overlay sutil para mejorar la legibilidad del texto
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: WHITE,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },
    heroDescription: {
        fontSize: 14,
        color: WHITE,
        maxWidth: '70%',
        marginTop: 5,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },

    // === BUSCADOR (BARRA DE FILTROS) ===
    buscador: {
        backgroundColor: PURPLE_DARK,
        marginHorizontal: 15,
        marginTop: -30, // Se superpone a la imagen
        marginBottom: 20,
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Sombra suave para destacar
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    simulatedSelect: {
        // Estilo unificado para TouchableOpacity (Fecha, Entrega) y View (Nº personas)
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: PURPLE_DARK,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: PURPLE_LIGHT, // Fondo morado medio
    },
    simulatedSelectText: {
        color: ACCENT_COLOR, // Texto claro para la opción estática
        fontSize: 13,
    },
    selectIcon: {
        color: ACCENT_COLOR,
        fontSize: 15, 
        marginLeft: 5,
    },
    personasInput: {
        flex: 1,
        color: WHITE, // Texto introducido en blanco
        fontSize: 13,
        height: '100%', 
        padding: 0,
    },
    buscadorButton: {
        backgroundColor: ACCENT_COLOR, // Botón con el color acentuado
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1.5, // Le damos menos ancho que a los selectores
    },
    buscadorButtonText: {
        color: PURPLE_DARK, // Texto oscuro en botón claro
        fontWeight: '800',
        fontSize: 13,
    },

    // === SECCIÓN DE BIENVENIDA ===
    bienvenidaSection: {
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    bienvenidaContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    galeriaIzquierda: {
        flexDirection: 'column',
        marginRight: 15,
        marginTop: 5,
    },
    galeriaImageSmall: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    textoBienvenida: {
        flex: 1,
    },
    bienvenidaTitle: {
        fontSize: 22,
        color: PURPLE_DARK,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    bienvenidaText: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'left',
        color: '#666',
    },
    bienvenidaLink: {
        fontSize: 14,
        color: ACCENT_COLOR,
        marginTop: 5,
        fontWeight: 'bold',
    },

    // === SECCIÓN DE SERVICIOS "Lo que Ofrecemos" ===
    serviciosContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden', // Necesario para el borde de la imagen
    },
    serviciosImage: {
        width: '30%', // Imagen lateral
        height: 'auto',
        minHeight: 250, // Altura mínima para asegurar que se ve
        contentFit: 'cover',
    },
    servicios: {
        flex: 1,
        backgroundColor: PURPLE_DARK,
        padding: 20,
    },
    serviciosTitle: {
        fontSize: 20,
        marginBottom: 5,
        color: WHITE,
        fontWeight: 'bold',
    },
    serviciosSubtitle: {
        fontSize: 12,
        marginBottom: 20,
        color: ACCENT_COLOR,
        lineHeight: 18,
    },
    serviciosList: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    serviciosColumn: {
        width: '48%', // Dos columnas
        gap: 12,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceIcon: {
        // Simulación del ícono circular
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: ACCENT_COLOR,
        marginRight: 8,
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 14,
        overflow: 'hidden',
    },
    serviceText: {
        color: WHITE,
        fontSize: 13,
        flexShrink: 1,
    },

    // === BOTÓN PRINCIPAL ===
    btnPrincipal: {
        marginVertical: 30,
        backgroundColor: ACCENT_COLOR,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 5, // Más cuadrado para la foto
        alignSelf: 'flex-start', // Alineado a la izquierda (en la foto)
        marginLeft: 15,
    },
    btnPrincipalText: {
        color: PURPLE_DARK, // Texto oscuro
        fontSize: 14,
        fontWeight: 'bold',
    },

    // === NAVEGACIÓN INFERIOR FIJA ===
    fixedFooterNav: {
        backgroundColor: PURPLE_DARK,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#1a0029',
    },
    footerNavItem: {
        padding: 10,
    },
    footerNavIcon: {
        fontSize: 24,
        color: ACCENT_COLOR,
    },
    footerNavItemSearch: {
        backgroundColor: ACCENT_COLOR, // Botón central de búsqueda destacado
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, // Elevado sobre la barra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    footerNavSearchIcon: {
        fontSize: 28,
        color: PURPLE_DARK,
    }
});