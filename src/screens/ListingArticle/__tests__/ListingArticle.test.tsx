import {render, screen} from '@testing-library/react-native';
import ListingArticle from '../ListingArticle';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

jest.mock('@react-navigation/native', () => ({useNavigation: jest.fn()}));
jest.useFakeTimers();

describe('Listing Article tests', () => {
  beforeAll(() => {
    const data = {
      data: [
        {
          id: '123',
          title: 'Title 1',
          thumb: 'http://localhost/img.png',
          link: 'http://localhost/a.html',
        },
      ],
    };
    fetchMock.mockOnce(() =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify(data),
      }),
    );
  });

  test('Given user is on news screen then listing article loaded successful', async () => {
    render(
      <Provider store={store}>
        <ListingArticle />,
      </Provider>,
    );
    const elements = await screen.findAllByTestId('article');
    expect(elements).toHaveLength(1);
  });
});
