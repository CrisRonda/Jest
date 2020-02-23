// eslint-disable-next-line arrow-parens
const getData = api => {
  return fetch(api)
    .then(resp => resp.json)
    .catch(error => error);
};
export default getData;
