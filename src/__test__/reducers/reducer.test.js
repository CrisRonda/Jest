import reducers from '../../reducers';
import ProductMoock from '../../__moocks__/ProductMoock';

describe('Reducers', () => {
  test('Retornar el initialState', () => {
    expect(reducers({}, '')).toEqual({});
  });
  test('ADD_TO_CARD', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMoock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expectTest = {
      cart: [ProductMoock],
    };
    expect(reducers(initialState, action)).toEqual(expectTest);
  });
});
