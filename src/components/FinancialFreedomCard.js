import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FinancialFreedomCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.seriesTitle}>Financial freedom series</Text>
      <Text style={styles.mainTitle}>Building financial resilience</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Strengthssdening</Text>
        <Text style={styles.contentText}>You must heal</Text>
        <Text style={styles.contentText}>your online</Text>
        <Text style={styles.contentText}>about these 5</Text>
        <Text style={styles.contentText}>security</Text>
        <Text style={styles.contentText}>tricks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    margin: 16,
  },
  seriesTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contentContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
    paddingLeft: 12,
  },
  contentText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
});

export default FinancialFreedomCard;
