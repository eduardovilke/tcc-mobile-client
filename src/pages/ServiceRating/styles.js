import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    marginTop: 40,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  rating: {
    marginTop: 30
  },
  ratingDescription: {
    marginTop: 40
  },
  buttonAvaliar:{
    marginTop: 40,
    alignItems: 'center'
  },
  avaliar: {
    backgroundColor: '#4fb4c8',
    borderRadius: 7,
    height: 44,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAvaliar:{
    color: 'white'
  },
})