import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
  },

  row: {
    marginBottom: 8,
  },
});

const InvoicePDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Payment Invoice</Text>

        <View style={styles.row}>
          <Text>Customer: {data?.customer_details?.name}</Text>
        </View>

        <View style={styles.row}>
          <Text>Email: {data?.customer_details?.email}</Text>
        </View>

        <View style={styles.row}>
          <Text>Service: {data?.metadata?.percelName}</Text>
        </View>

        <View style={styles.row}>
          <Text>Payment ID: {data?.payment_intent}</Text>
        </View>

        <View style={styles.row}>
          <Text>
            Amount: {(data?.amount_total / 100).toFixed(2)} {data?.currency}
          </Text>
        </View>

        <View style={styles.row}>
          <Text>Status: {data?.payment_status}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;