export default (
  state = {
    starRepos: []
  },
  action
) => {
  switch (action.type) {
    case "STAR_REPO":
      console.log("action", action);
      return { ...state, starRepos: action.payload };
    default:
      return state;
  }
};
