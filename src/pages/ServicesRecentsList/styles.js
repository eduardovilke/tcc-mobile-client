import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: Constants.statusBarHeight + 20
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
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  serviceList:{
    marginBottom: 102,
  },
  service:{
    marginTop: 10,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  categorySituation:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceProperty:{
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  serviceValue:{
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
  detailsButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButtonText:{
    color: '#4fb4c8',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
