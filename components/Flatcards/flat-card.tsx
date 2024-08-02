import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingsText}>Flat Cards</Text>
      <View style={styles.container}>
      <View style={[styles.card, styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardone]}>
          <Text>Red</Text>
        </View>

 
      
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex:1,
    flexDirection:'row',
    padding:8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cardone: {
    backgroundColor: '#EF5354',
  },

  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
//   cardFour: {
//     backgroundColor: '#EF5354',
//   },
});

export default FlatCards;
