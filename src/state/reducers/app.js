var initialState = {
  name: "RECEP"
};

export function app(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
}
