export const appReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
