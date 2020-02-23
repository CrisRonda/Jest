/* eslint-disable arrow-parens */
import getData from '../../utils/getData';

describe('Fetch API', () => {
  //Habilitamos el fetch con restMock y configurar el setup de Jest
  beforeEach(() => {
    fetch.resetMocks();
  });
  // Lo que hacemos aquí es simular la llamada para eso modificamos el fetch
  // para probar si se tiene la respuesta en el formato que requerimoss
  test('Llama una API y retorna datos', () => {
    //Esta data deberia ser un mock con datos simulados en el apartado de data
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then(resp => {
      expect(resp.data).toEqual('12345');
    });
    //Esta prueba se asegura que se realice la peticion
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
