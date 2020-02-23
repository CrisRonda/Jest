import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMoock from '../../__moocks__/providerMoock';
import ProductMoock from '../../__moocks__/ProductMoock';
import Product from '../../components/Product';

/*
Siempre debemos garantizar que el componente que estamos probando se muestre en la pantalla (render)
para esto se usa "length"
Para simular un click en una pantalla usamos los mismos nombre de las funciones/propiedades del componente
para esto se usa "jest.fn()". Usamos mount pues requerimos del store de toda la aplicación
*/
describe('<Product/>', () => {
  test('Render del componente Product ', () => {
    const product = shallow(
      <ProviderMoock>
        <Product />
      </ProviderMoock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de comprar', () => {
    const handleAddToCar = jest.fn();
    const wrapper = mount(
      <ProviderMoock>
        <Product product={ProductMoock} handleAddToCart={handleAddToCar} />
      </ProviderMoock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCar).toHaveBeenCalledTimes(1);
  });
});
