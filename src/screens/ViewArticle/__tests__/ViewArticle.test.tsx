import {render, screen} from '@testing-library/react-native';
import ViewArticle from '../ViewArticle';
import {DetailsScreenProps} from '../../../types/navigation';

jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {
    WebView: View,
  };
});

describe('View Article tests', () => {
  test('Given user is on view article screen then content should load successful', () => {
    const props = {
      route: {
        params: {link: 'http://localhost/a.html'},
      },
    } as DetailsScreenProps;
    render(<ViewArticle {...props} />);
    const element = screen.getByTestId('webview');
    expect(element).toBeOnTheScreen();
  });
});
