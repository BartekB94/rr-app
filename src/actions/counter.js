export const increaseCounterAction = () => {
  return {
    type: "increaseCounter",
    payload: {
      step: 2,
    },
  };
};

export const setCounterAction = (value) => {
  return {
    type: "setCounter",
    payload: {
      value: value,
    },
  };
};

export const resetCounter = () => {
  return {
    type: "resetCounter",
    // payload: 0,
  };
};
