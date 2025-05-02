import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'solid',
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
  },
  tableCell: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    flexGrow: 1,
    textAlign: 'center',
  },
  lastCell: {
    borderRightWidth: 0,
  },
  zebraRow: {
    backgroundColor: '#fafafa',
  },
  label: {
    fontWeight: 600,
    color: '#000',
    fontSize: 11,
    marginBottom: 6,
  },
});

const MarksTable = ({ studentMark }) => (
  <View>
    <Text style={styles.label}>Academic Marks</Text>
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <Text style={styles.tableCell}>Subject</Text>
        <Text style={styles.tableCell}>Marks</Text>
        <Text style={styles.tableCell}>Maximum</Text>
        <Text style={styles.tableCell}>Month & Year</Text>
        <Text style={styles.tableCell}>HSC Reg. No</Text>
        <Text style={[styles.tableCell, styles.lastCell]}>Attempts</Text>
      </View>
      {studentMark?.map((mark, index) => (
        <View
          key={index}
          style={[styles.tableRow, index % 2 === 1 ? styles.zebraRow : null]}
        >
          <Text style={styles.tableCell}>{mark.subject}</Text>
          <Text style={styles.tableCell}>{mark.marks}</Text>
          <Text style={styles.tableCell}>{mark.maximum}</Text>
          <Text style={styles.tableCell}>{mark.month_year_passing}</Text>
          <Text style={styles.tableCell}>{mark.hsc_reg_no}</Text>
          <Text style={[styles.tableCell, styles.lastCell]}>{mark.no_of_attempt}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default MarksTable;
