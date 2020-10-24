import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 13,
      paddingRight: 13
    },
    header:{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    title:{
      fontSize: 25,
      marginBottom: 10,
      marginTop: 48,
      color: '#13131a',
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: 18,
      marginBottom: 20,
    },
    serviceList:{
      marginBottom: 10
    },
    service: {
      shadowColor: '#000000',
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 20,
      borderRadius: 10,
      marginTop: 20
    },
    icons: {
      marginLeft: 20,
    },
    nameService: {
      fontSize: 15,
      marginLeft: 20
    }
})