import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Fechas = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Funciones para navegar
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDate(null); // Limpiar selección al cambiar mes
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null); // Limpiar selección al cambiar mes
  };

  const goToPreviousYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth()));
    setSelectedDate(null);
  };

  const goToNextYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth()));
    setSelectedDate(null);
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <View>
      {/* Selector de Año */}
      <View style={styles.yearSelector}>
        <TouchableOpacity onPress={goToPreviousYear} style={styles.navButton}>
          <Ionicons name="chevron-back" size={24} color="#7B2CBF" />
        </TouchableOpacity>
        <Text style={styles.yearText}>{currentMonth.getFullYear()}</Text>
        <TouchableOpacity onPress={goToNextYear} style={styles.navButton}>
          <Ionicons name="chevron-forward" size={24} color="#7B2CBF" />
        </TouchableOpacity>
      </View>

      {/* Selector de Mes */}
      <View style={styles.monthSelector}>
        <TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton}>
          <Ionicons name="chevron-back" size={20} color="#7B2CBF" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {monthNames[currentMonth.getMonth()]}
        </Text>
        <TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
          <Ionicons name="chevron-forward" size={20} color="#7B2CBF" />
        </TouchableOpacity>
      </View>
      
      {/* Calendario */}
      <View style={styles.calendar}>
        <View style={styles.weekHeader}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        
        <View style={styles.daysGrid}>
          {days.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayCell,
                day === null && styles.dayCellEmpty,
                selectedDate === day && styles.dayCellSelected,
              ]}
              disabled={day === null}
              onPress={() => {
                setSelectedDate(day);
                const dateString = `${day} de ${monthNames[currentMonth.getMonth()]} del ${currentMonth.getFullYear()}`;
                onChange([dateString]);
              }}
            >
              {day && <Text style={[
                styles.dayText,
                selectedDate === day && styles.dayTextSelected,
              ]}>{day}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Selector de Año
  yearSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  yearText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
  },
  
  // Selector de Mes
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  navButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3E8FF',
  },

  calendar: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    width: 40,
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  dayCellEmpty: {
    backgroundColor: 'transparent',
  },
  dayCellSelected: {
    backgroundColor: '#7B2CBF',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  dayTextSelected: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Fechas;