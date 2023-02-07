function titleReducer(state, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        fancyTitle: {
          title: action.payload,
        },
        user: {
          ...state.user,
          name: "Pippo",
          email: "pippo@email.com",
        },
      };

    case "CHANGE_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    default:
      state;
  }
}

export { titleReducer };
