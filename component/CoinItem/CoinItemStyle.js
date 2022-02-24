import {StyleSheet} from 'react-native';

export default CoinitemStyle = StyleSheet.create({
  coinname: {textAlign: 'left'},
  coinprice: {textAlign: 'left'},
  coinimage: {
    height: 20,
    width: 20,
  },
  coinsymbol: {
    alignItems: 'center',
  },
  coinview: {
    flex: 1,
    justifyContent: 'space-between',
    height: 50,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    marginTop: 20,
    width: '100%',
  },
});
