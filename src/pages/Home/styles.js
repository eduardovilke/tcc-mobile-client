import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      containerImage: {
        flex: 1,
        justifyContent: 'center',
      },
      image: {
        resizeMode: 'contain',
        marginTop: 35,
        width: 390,
        height: 390
      },
      inputArea: {
        flex: 1,
        justifyContent: 'center'
      },
      title: {
        marginTop: 55,
        fontSize: 30,
        marginLeft: 17,
        color: '#4b5c6b'
      },
      containerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 17,
        paddingLeft: 17,
        marginTop: 40
      },
      buttonEntrar: {
        backgroundColor: '#4fb4c8',
        height: 50,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textEntrar: {
        color: 'white'
      },
      buttonRegistrar: {
        backgroundColor: '#4fb4c8',
        height: 50,
        width: 150,
        borderRadius: 5,
        borderColor: '#4fb4c8',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textCadastrar: {
        backgroundColor: '#f7f9fa',
        borderRadius: 5,
        color: '#4fb4c8',
        width: 146,
        height: 46,
        paddingTop: 14,
        paddingLeft: 28
      }
});