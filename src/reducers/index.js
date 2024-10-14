const initState = { counter: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "increaseCounter":
      const { step } = action.payload;
      return { ...state, counter: state.counter + step };
    case "setCounter":
      return { ...state, counter: action.payload.value };
    case "resetCounter":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default reducer;
