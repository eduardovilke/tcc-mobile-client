import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
    
  },
  headerIcon: {
    marginTop: 50
  },
  header: {
    marginTop: 13,
    color: '#4b5c6b',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginLeft: 10
  },
  problemTitle: {
    marginTop: 20
  },
  problemDescription: {
    marginTop: 30
  },
  priorities: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  prioritiesOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 60,
    backgroundColor: '#4fb4c8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 40
  },
  txtButton: {
    color: 'white',
    fontWeight: 'bold'
  }
 
});