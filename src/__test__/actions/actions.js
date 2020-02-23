import actions from '../../actions';
import ProductMoock from '../../__moocks__/ProductMoock';

describe('Actions Redux', () => {
  test('addToCar Action', () => {
    const payload = ProductMoock;
    const expectTest = {
      type: 'ADD_TO_CAR',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expectTest);
  });
});
