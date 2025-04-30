import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from '@react-pdf/renderer';
import logo from '../assets/img/about/imagesOur.jpg'; // Adjust the path to your logo


const styles = StyleSheet.create({
  page: {
    paddingTop: 120,
    paddingBottom: 50,
    paddingHorizontal: 30,
    fontSize: 12,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  AddressText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginBottom: 10,
    marginTop:25,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: 'center',
    borderTopWidth: 1,
    paddingTop: 5,
  },
});

// Component
const ApplicationAckPdf = ({ application }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View >
        <Text style={styles.headerText}>Einstein Arts & Science College</Text>
        <Text style={styles.AddressText}>Sir C.V. Raman Nagar, Seethaparpanallur,</Text>
        <Text style={styles.AddressText}>Tirunelveli, Tamil Nadu 627012.</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.section}>
        <Text style={styles.title}>Application Acknowledgment</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Name:</Text> {application.name}</Text>
        <Text><Text style={styles.label}>Email:</Text> {application.email}</Text>
        <Text><Text style={styles.label}>Application ID:</Text> {application.id}</Text>
        <Text><Text style={styles.label}>Date:</Text> {application.date}</Text>
      </View>

      <View style={styles.section}>
        <Text>
          Thank you for your application. We have received your information and will process it shortly.
        </Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>This is a computer-generated document and does not require a signature.</Text>
    </Page>
  </Document>
);

export default ApplicationAckPdf;
