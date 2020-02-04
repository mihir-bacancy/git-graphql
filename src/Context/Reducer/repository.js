let state = {
  starRepos: []
};

export default (state, action) => {
  switch (action.type) {
    case "START_REPO":
      console.log("action", action);
      return (state = { ...state, state, starRepos: action.payload });
    default:
      return state;
  }
};
