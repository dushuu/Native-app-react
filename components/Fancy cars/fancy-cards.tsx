import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingsText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
          style={styles.cardImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFBRMqagBMmCQmGyQRbcZ_SmZhHbrmpkpMQ&s'
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Place</Text>
          <Text style={styles.cardLabel}>A description of the beautiful place.</Text>
          <Text style={styles.cardFooter}>More info...</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
          style={styles.cardImage}
          source={{
            uri: 'https://www.treebo.com/blog/wp-content/uploads/2017/04/Places-to-Visit-in-Jaipur.jpg'
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Place</Text>
          <Text style={styles.cardLabel}>A description of the beautiful place.</Text>
          <Text style={styles.cardFooter}>More info...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    margin: 16,
    overflow: 'hidden',
  },
  cardElevated: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    height: 180,
    width: '100%', // Ensure the image takes the full width of the card
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  cardFooter: {
    fontSize: 14,
    color: '#007BFF',
  
  }
});
