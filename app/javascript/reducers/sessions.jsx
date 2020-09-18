const initialState = {
  siginin: false,
  id: '',
  name: '',
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return { login: true, id: action.id, name: action.name };
    case 'SIGNEDOUT':
      return { login: false, id: '', name: '' };
    default:
      return state;
  }
};

export default sessionReducer;
