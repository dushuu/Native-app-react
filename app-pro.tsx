import React from 'react'
import { Text, View,StyleSheet,useColorScheme } from 'react-native'

const AppPro = ():JSX.Element => {
    const isDarkMode = useColorScheme() ===  'dark'
  return (
 <View style={styles.container}>
    <Text style={isDarkMode? styles.whiteText : styles.BlackText }>
        Hello
    </Text>
 </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-end'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    BlackText:{
        color:'#000000'
    }
    
})

export default AppPro