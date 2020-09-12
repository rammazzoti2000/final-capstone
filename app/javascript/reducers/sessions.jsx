const initialState = {
  siginin: false,
  name: '',
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return {
        login: true,
        name: action.name,
      };
    case 'SIGNEDOUT':
      return {
        login: false,
        name: '',
      };
    default:
      return state;
  }
};

export default sessionReducer;
