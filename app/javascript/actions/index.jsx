const SIGNEDIN = name => ({
  type: 'SIGNEDIN',
  name,
});
const SIGNEDOUT = () => ({ type: 'SIGNEDOUT' });

export { SIGNEDIN, SIGNEDOUT };
