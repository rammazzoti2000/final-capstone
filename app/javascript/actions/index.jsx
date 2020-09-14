const SIGNEDIN = (id, name) => ({
  type: 'SIGNEDIN',
  id,
  name,
});
const SIGNEDOUT = () => ({ type: 'SIGNEDOUT' });

export { SIGNEDIN, SIGNEDOUT };
