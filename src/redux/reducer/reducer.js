const initialState = {
  lang:
    window.localStorage.getItem("lang") !== null
      ? window.localStorage.getItem("lang")
      : "en",
  notification: {
    message: '',
    show: false,
    error: true,
  },
  headerModal:false
};

export const reducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case "SET_NAVIGATION":
      return {
        ...state,
        navi: payLoad,
      };
    default:
      return state;
  }
};