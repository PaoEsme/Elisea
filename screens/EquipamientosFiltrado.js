// screens/EquipamientosFiltrado.js
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Evento from '../components/Filters/Evento';
import Fechas from '../components/Filters/Fecha';
import Lugar from '../components/Filters/Lugar';
import PaqueteEquipamiento from '../components/Filters/PaqueteEquipamiento';
import Personas from '../components/Filters/Persona';
import Tipo from '../components/Filters/TipoEquipamiento';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const EquipamientosFiltrado = ({ navigation }) => {
  const [filtros, setFiltros] = useState({
    lugar: '',
    tipo: '',
    fechas: [],
    personas: { minimo: 50, maximo: 800 },
    evento: '',
    paquetes: 0,
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const updateFiltro = (key, value) => {
    setFiltros({ ...filtros, [key]: value });
  };

  const clearFiltro = (key) => {
    const defaults = {
      lugar: '',
      tipo: '',
      fechas: [],
      personas: { minimo: 50, maximo: 800 },
      evento: '',
      paquetes: 0,
    };
    setFiltros({ ...filtros, [key]: defaults[key] });
  };

  // Navegar al carrito con el item construido desde los filtros
  const agregarAlCarrito = () => {
    navigation.navigate('Carrito', {
      nuevoItem: {
        titulo: `Paquete ${filtros.tipo || 'Equipo'}`,
        proveedor: 'Elisea Equipos',
        fecha: filtros.fechas[0] || 'Por definir',
        precio: filtros.paquetes,
        imagen: 'https://i.ibb.co/NWjzc93/deco.jpg', // imagen de prueba
      },
    });
  };

  return (
    <View style={styles.container}>
      <Navbar />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#7B2CBF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Equipamientos</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        <FilterSection
          title="Lugar"
          value={filtros.lugar}
          isExpanded={expandedSection === 'lugar'}
          onToggle={() => toggleSection('lugar')}
          onClear={() => clearFiltro('lugar')}
        >
          <Lugar value={filtros.lugar} onChange={(v) => updateFiltro('lugar', v)} />
        </FilterSection>

        <FilterSection
          title="Tipo"
          value={filtros.tipo}
          isExpanded={expandedSection === 'tipo'}
          onToggle={() => toggleSection('tipo')}
          onClear={() => clearFiltro('tipo')}
        >
          <Tipo value={filtros.tipo} onChange={(v) => updateFiltro('tipo', v)} />
        </FilterSection>

        <FilterSection
          title="Fechas"
          value={filtros.fechas.length > 0 ? filtros.fechas.join(', ') : ''}
          isExpanded={expandedSection === 'fechas'}
          onToggle={() => toggleSection('fechas')}
          onClear={() => clearFiltro('fechas')}
        >
          <Fechas value={filtros.fechas} onChange={(v) => updateFiltro('fechas', v)} />
        </FilterSection>

        <FilterSection
          title="Personas"
          value={`${filtros.personas.minimo} - ${filtros.personas.maximo}`}
          isExpanded={expandedSection === 'personas'}
          onToggle={() => toggleSection('personas')}
          onClear={() => clearFiltro('personas')}
        >
          <Personas value={filtros.personas} onChange={(v) => updateFiltro('personas', v)} />
        </FilterSection>

        <FilterSection
          title="Evento"
          value={filtros.evento}
          isExpanded={expandedSection === 'evento'}
          onToggle={() => toggleSection('evento')}
          onClear={() => clearFiltro('evento')}
        >
          <Evento value={filtros.evento} onChange={(v) => updateFiltro('evento', v)} />
        </FilterSection>

        <FilterSection
          title="Paquetes"
          value={`$${(filtros.paquetes || 0).toLocaleString()}`}
          isExpanded={expandedSection === 'paquetes'}
          onToggle={() => toggleSection('paquetes')}
          onClear={() => clearFiltro('paquetes')}
        >
          <PaqueteEquipamiento
            value={filtros.paquetes}
            onChange={(v) => updateFiltro('paquetes', v)}
            personas={filtros.personas}
          />
        </FilterSection>

        {/* Espacio para que el scroll no quede oculto por el botón fijo */}
        <View style={{ height: 180 }} />
      </ScrollView>

      {/* Solo botón de carrito */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={agregarAlCarrito}>
          <Ionicons name="cart" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.cartButtonText}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>

      {/* Footer presente pero no visible (ya tienes un botón fijo abajo) */}
      <View style={{ height: 0, overflow: 'hidden' }}>
        <Footer />
      </View>
    </View>
  );
};

const FilterSection = ({ title, value, isExpanded, onToggle, onClear, children }) => (
  <View style={styles.filterSection}>
    <TouchableOpacity style={styles.filterHeader} onPress={onToggle} activeOpacity={0.7}>
      <View style={styles.filterHeaderLeft}>
        <Text style={styles.filterTitle}>{title}</Text>
        {value ? <Text style={styles.filterValue}>{value}</Text> : null}
      </View>

      {value ? (
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            onClear();
          }}
          style={styles.clearButton}
        >
          <Ionicons name="close-circle" size={20} color="#7B2CBF" />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>

    {isExpanded && <View style={styles.filterContent}>{children}</View>}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12, // un poco más compacto
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#7B2CBF' },
  scrollView: { flex: 1 },
  filterSection: {
    backgroundColor: '#E8D5F2',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  filterHeaderLeft: { flex: 1 },
  filterTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  filterValue: { fontSize: 14, color: '#666', marginTop: 4, fontWeight: '500' },
  clearButton: { padding: 4 },
  filterContent: { padding: 16, paddingTop: 0 },

  // botón fijo abajo
  buttonContainer: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  cartButton: {
    backgroundColor: '#006B3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});

export default EquipamientosFiltrado;