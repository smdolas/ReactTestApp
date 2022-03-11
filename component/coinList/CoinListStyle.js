import {StyleSheet} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';

export default Style = StyleSheet.create({
  coinListView: {
    flex: 1,
    marginTop: 1,
    marginBottom: 2,
    backgroundColor: ThemeConstants.WHITE_SMOKE,
  },
  coinListText: {
    fontSize: ThemeConstants.FONT_SIZE_10,
    color: ThemeConstants.GRAY,
  },
  coinListTextContainer: {
    backgroundColor: ThemeConstants.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinListColumn: {
    flex: 1,
    marginTop: 50,
    marginBottom: 25,
    backgroundColor: ThemeConstants.WHITE_SMOKE,
  },
  coinListViewHeaderContainer: {
    marginTop: 0,
    marginBottom: 5,
    backgroundColor: ThemeConstants.WHITE_SMOKE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  coinListViewBodyContainer: {
    height: 1,
    marginBottom: 3,
    marginTop: 0,
    backgroundColor: ThemeConstants.BORDER_COLOR,
  },
});
