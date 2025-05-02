import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from '@react-pdf/renderer';
import logo from "../assets/img/Logo.jpg";

const styles = StyleSheet.create({
  page: {
    paddingTop: 130,
    paddingBottom: 70,
    paddingHorizontal: 50,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    position: 'absolute',
    top: 30,
    left: 50,
    right: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 700,
    color: '#2b2b2b',
  },
  address: {
    fontSize: 10,
    color: '#555',
    marginTop: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: '#58213f',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#58213f',
    paddingBottom: 5,
  },
  section: {
    marginBottom: 18,
  },
  field: {
    fontSize: 11,
    marginBottom: 8,
  },
  label: {
    fontWeight: 600,
    color: '#000',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    flexGrow: 1,
  },
  lastCell: {
    borderRightWidth: 0,
  },
  note: {
    fontSize: 11,
    color: '#444',
    marginTop: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 9,
    color: '#666',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 6,
  },
});

const ApplicationAckPdf = ({ application, studentMark }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.headerInfo}>
          <Text style={styles.collegeName}>Einstein College of Arts & Science</Text>
          <Text style={styles.address}>Sir C.V. Raman Nagar, Seethaparpanallur</Text>
          <Text style={styles.address}>Near MS University, Tirunelveli, Tamil Nadu - 627012</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Application Acknowledgment</Text>

      {/* Application Details */}
      <View style={styles.section}>
        <Text style={styles.field}><Text style={styles.label}>Name:</Text> {application.name}</Text>
        <Text style={styles.field}><Text style={styles.label}>Email:</Text> {application.email}</Text>
        <Text style={styles.field}><Text style={styles.label}>Application ID:</Text> {application.id}</Text>
        <Text style={styles.field}><Text style={styles.label}>Date:</Text> {application.date}</Text>
        <Text style={styles.field}><Text style={styles.label}>Course:</Text> {application.course}</Text>
        <Text style={styles.field}><Text style={styles.label}>Payment Status:</Text> {application.payment_status}</Text>
      </View>

      {/* Student Marks Table */}
    
      {/* Student Marks Table */}
<View style={styles.section}>
  <Text style={[styles.label, { marginBottom: 6 }]}>Academic Marks</Text>
  <View style={styles.table}>
    {/* Header Row */}
    <View style={[styles.tableRow, styles.tableHeader]}>
      <Text style={[styles.tableCell, { width: '25%' }]}>Subject</Text>
      <Text style={[styles.tableCell, { width: '10%' }]}>Marks</Text>
      <Text style={[styles.tableCell, { width: '15%' }]}>Maximum</Text>
      <Text style={[styles.tableCell, { width: '20%' }]}>Month & Year</Text>
      <Text style={[styles.tableCell, { width: '15%' }]}>HSC Reg. No</Text>
      <Text style={[styles.tableCell, { width: '15%' }]}>Attempts</Text>
    </View>

    {/* Data Rows */}
    {studentMark?.map((mark, index) => (
      <View style={styles.tableRow} key={index}>
        <Text style={[styles.tableCell, { width: '25%' }]}>{mark.subject}</Text>
        <Text style={[styles.tableCell, { width: '10%' }]}>{mark.marks}</Text>
        <Text style={[styles.tableCell, { width: '15%' }]}>{mark.maximum}</Text>
        <Text style={[styles.tableCell, { width: '20%' }]}>{mark.month_year_passing}</Text>
        <Text style={[styles.tableCell, { width: '15%' }]}>{mark.hsc_reg_no}</Text>
        <Text style={[styles.tableCell, { width: '15%' }]}>{mark.no_of_attempt}</Text>
      </View>
    ))}
  </View>
</View>

   

      {/* Note */}
      <Text style={styles.note}>
        Thank you for your application. We have successfully received your information.
        Our team will review your submission and contact you shortly if any further action is needed.
      </Text>

      {/* Footer */}
      <Text style={styles.footer}>
        This is a computer-generated document and does not require a signature.
      </Text>
    </Page>
  </Document>
);

export default ApplicationAckPdf;
