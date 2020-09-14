const SIGNEDIN = (name, id) => ({
  type: 'SIGNEDIN',
  name,
  id,
});
const SIGNEDOUT = () => ({ type: 'SIGNEDOUT' });

export { SIGNEDIN, SIGNEDOUT };
