// SalonesFiltrado.js
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EventoFilter from '../components/Evento';
import FechasFilter from '../components/Fecha';
import LugarFilter from '../components/Lugar';
import PersonasFilter from '../components/Persona';
import PrecioFilter from '../components/Precio';
import TipoFilter from '../components/Tipo';

const SalonesFiltrado = ({ navigation }) => {
  const [filtros, setFiltros] = useState({
    lugar: '',
    tipo: '',
    fechas: [],
    personas: { minimo: 50, maximo: 800 },
    evento: '',
    precio: 5000,
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
      precio: 5000,
    };
    setFiltros({ ...filtros, [key]: defaults[key] });
  };

  const aplicarFiltros = () => {
    // Aquí implementas la lógica para aplicar los filtros
    console.log('Filtros aplicados:', filtros);
    navigation.navigate('ResultadosSalones', { filtros });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#7B2CBF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Salones</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Lugar Filter */}
        <FilterSection
          title="Lugar"
          value={filtros.lugar}
          isExpanded={expandedSection === 'lugar'}
          onToggle={() => toggleSection('lugar')}
          onClear={() => clearFiltro('lugar')}
        >
          <LugarFilter
            value={filtros.lugar}
            onChange={(value) => updateFiltro('lugar', value)}
          />
        </FilterSection>

        {/* Tipo Filter */}
        <FilterSection
          title="Tipo"
          value={filtros.tipo}
          isExpanded={expandedSection === 'tipo'}
          onToggle={() => toggleSection('tipo')}
          onClear={() => clearFiltro('tipo')}
        >
          <TipoFilter
            value={filtros.tipo}
            onChange={(value) => updateFiltro('tipo', value)}
          />
        </FilterSection>

        {/* Fechas Filter */}
        <FilterSection
          title="Fechas"
          value={filtros.fechas.length > 0 ? filtros.fechas.join(', ') : ''}
          isExpanded={expandedSection === 'fechas'}
          onToggle={() => toggleSection('fechas')}
          onClear={() => clearFiltro('fechas')}
        >
          <FechasFilter
            value={filtros.fechas}
            onChange={(value) => updateFiltro('fechas', value)}
          />
        </FilterSection>

        {/* Personas Filter */}
        <FilterSection
          title="Personas"
          value={`${filtros.personas.minimo} - ${filtros.personas.maximo}`}
          isExpanded={expandedSection === 'personas'}
          onToggle={() => toggleSection('personas')}
          onClear={() => clearFiltro('personas')}
        >
          <PersonasFilter
            value={filtros.personas}
            onChange={(value) => updateFiltro('personas', value)}
          />
        </FilterSection>

        {/* Evento Filter */}
        <FilterSection
          title="Evento"
          value={filtros.evento}
          isExpanded={expandedSection === 'evento'}
          onToggle={() => toggleSection('evento')}
          onClear={() => clearFiltro('evento')}
        >
          <EventoFilter
            value={filtros.evento}
            onChange={(value) => updateFiltro('evento', value)}
          />
        </FilterSection>

        {/* Precio Filter */}
        <FilterSection
          title="Precio"
          value={`$${filtros.precio.toLocaleString()}`}
          isExpanded={expandedSection === 'precio'}
          onToggle={() => toggleSection('precio')}
          onClear={() => clearFiltro('precio')}
        >
          <PrecioFilter
            value={filtros.precio}
            onChange={(value) => updateFiltro('precio', value)}
          />
        </FilterSection>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Botón de aplicar filtros */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={aplicarFiltros}
        >
          <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Componente FilterSection reutilizable
const FilterSection = ({ title, value, isExpanded, onToggle, onClear, children }) => {
  return (
    <View style={styles.filterSection}>
      <TouchableOpacity
        style={styles.filterHeader}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <View style={styles.filterHeaderLeft}>
          <Text style={styles.filterTitle}>{title}</Text>
          {value && <Text style={styles.filterValue}>{value}</Text>}
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

      {isExpanded && (
        <View style={styles.filterContent}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  scrollView: {
    flex: 1,
  },
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
  filterHeaderLeft: {
    flex: 1,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  filterValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  clearButton: {
    padding: 4,
  },
  filterContent: {
    padding: 16,
    paddingTop: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  applyButton: {
    backgroundColor: '#7B2CBF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SalonesFiltrado;