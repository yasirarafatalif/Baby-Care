import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  invoiceTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRight: {
    textAlign: 'right',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  infoBox: {
    width: '48%',
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  textRow: {
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#333',
    color: '#fff',
    padding: 8,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
  },
  col1: { width: '70%' },
  col2: { width: '30%', textAlign: 'right' },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    marginTop: 50,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    fontSize: 8,
    color: '#888',
  }
});

const InvoicePDF = ({ data }) => {
  // Amount formatting (assuming the amount is in paisa/subunits)
  const formattedAmount = (data?.amount / 100).toLocaleString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.invoiceTitle}>INVOICE</Text>
          <View style={styles.headerRight}>
            <Text>Invoice ID: {data?.percelId}</Text>
            <Text>Status: {data?.paymentStatus?.toUpperCase()}</Text>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.sectionContainer}>
          {/* Customer Info */}
          <View style={styles.infoBox}>
            <Text style={styles.sectionLabel}>Customer Details</Text>
            <Text style={styles.textRow}><Text style={styles.bold}>Name: </Text>{data?.customerName}</Text>
            <Text style={styles.textRow}><Text style={styles.bold}>Email: </Text>{data?.customerEmail}</Text>
          </View>

          {/* Parcel Info */}
          <View style={styles.infoBox}>
            <Text style={styles.sectionLabel}>Service Details</Text>
            <Text style={styles.textRow}><Text style={styles.bold}>Service: </Text>{data?.percelName}</Text>
            <Text style={styles.textRow}><Text style={styles.bold}>Parcel ID: </Text>{data?.percelId}</Text>
          </View>
        </View>

        {/* Payment Details Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>Description</Text>
            <Text style={styles.col2}>Amount</Text>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.col1}>
              <Text style={styles.bold}>{data?.percelName}</Text>
              <Text style={{ fontSize: 8, marginTop: 2 }}>Payment Intent: {data?.paymentIntentId}</Text>
            </View>
            <Text style={styles.col2}>{formattedAmount} {data?.currency?.toUpperCase()}</Text>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalSection}>
          <View style={{ textAlign: 'right' }}>
            <Text style={{ fontSize: 10, color: '#555' }}>Total Paid</Text>
            <Text style={styles.totalAmount}>{formattedAmount} {data?.currency?.toUpperCase()}</Text>
          </View>
        </View>

        {/* Bottom Metadata */}
        <View style={styles.footer}>
          <Text>Session ID: {data?.sessionId}</Text>
          <Text>Session Status: {data?.sessionStatus}</Text>
        </View>

      </Page>
    </Document>
  );
};

export default InvoicePDF;