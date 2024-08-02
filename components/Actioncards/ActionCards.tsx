import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCards() {
  const openWebsite = (websiteLink:string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingsText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCards]}>
        <View style={styles.headingsContainer}>
          <Text style={styles.headingsTextContent}>Sample Header</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600'
          }}
        />
        <TouchableOpacity onPress={() => openWebsite('https://18.220.87.17:8080/campaign-execution/109353/result')}>
          <Text style={styles.linkText}>Visit Website</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#f8f9fa',

  },
  headingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  elevatedCards: {
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  headingsContainer: {
    marginBottom: 10,
  },
  headingsTextContent: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  linkText: {
    color: '#1e90ff',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
