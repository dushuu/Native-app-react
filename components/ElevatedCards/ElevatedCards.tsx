import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingsText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>

        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>

        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>

        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>

        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>More...</Text>

        </View>


      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    headingsText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
        cardElevated:{
            backgroundColor:'#CAD5E2',
            elevation:4,
            shadowOffset:{
                width:1,
                height:1
            },
            shadowColor:'#333',
            shadowOpacity:1,


        },
 
    card: {
        width:100,
        height:100,
        flex:1,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        color:'#00000',
        margin:8,

    
    },
    container: {
        flex:1,
        flexDirection:'row',
        padding:8,
      },
    // cardone: {
    //   backgroundColor: '#EF5354',
    // },
    // cardTwo: {
    //   backgroundColor: '#50DBB4',
    // },
    // cardThree: {
    //   backgroundColor: '#5DA3FA',
    // },
  });
export default ElevatedCards