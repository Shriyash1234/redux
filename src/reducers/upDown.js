const initialState = {
    name: ''
  };
  
  const changeTheName = (state = initialState, action) => {
    switch (action.type) {
      case "CNAME":
        return {
          ...state,
          name: action.payload
        };
      default:
        return state;
    }
  }
  
  export default changeTheName;
  