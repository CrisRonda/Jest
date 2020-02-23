/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});
// Configuracion para fetch y capturar las peticiones
global.fetch = require('jest-fetch-mock');
