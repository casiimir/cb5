function titleReducer(state, action) {
  switch (action.type) {
    case "change_title":
      return {
        fancyTitle: {
          title: "Un altro titolo",
        },
      };
    default:
      throw new Error();
  }
}

export { titleReducer };
