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

  const days = getDaysInMonth(currentMonth);

  return (
    <View>
      <Text style={styles.calendarTitle}>
        {monthNames[currentMonth.getMonth()]} de {currentMonth.getFullYear()}
      </Text>
      
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

  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
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