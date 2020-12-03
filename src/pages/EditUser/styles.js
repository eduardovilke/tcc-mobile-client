import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: Constants.statusBarHeight + 20,
    flex: 1
  },
  header:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  headerText:{
    fontSize: 10,
    color: '#737380'
  },
  title:{
    fontSize: 25,
    marginBottom: 10,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  editUser: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
  },
  TextEditUser: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#737380'
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#737380',
  }
});
