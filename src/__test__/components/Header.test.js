import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMoock from '../../__moocks__/providerMoock';
import Header from '../../components/Header';

describe('<Header/>', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMoock>
        <Header />
      </ProviderMoock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMoock>
        <Header />
      </ProviderMoock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header snapshot', () => {
  test('Comprobar el snapshot de header', () => {
    const header = create(
      <ProviderMoock>
        <Header />
      </ProviderMoock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
