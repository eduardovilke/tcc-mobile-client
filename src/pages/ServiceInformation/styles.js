import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    marginTop: 40
  },
  service: {
    shadowColor: '#000000',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginTop: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  titleAbout: {
  },
  description: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  descriptionAbout: {

  },
  client: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  buttons: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  getService: {
    backgroundColor: '#4fb4c8',
    borderRadius: 7,
    height: 44,
    width: 115,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textGetService:{
    color: 'white'
  },
  zap: {
    borderRadius: 7,
    backgroundColor: '#07d755',
    height: 44,
    width: 115,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textZap: {
    color: 'white'
  },
  getServiceDisable: {
    backgroundColor: '#cccccc',
    borderRadius: 7,
    height: 44,
    width: 115,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textGetServiceDisable: {
    color: '#666666'
  }
})