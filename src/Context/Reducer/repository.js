import { STAR_REPO } from "../../utils/constant";

export default (
  state = {
    starRepos: []
  },
  action
) => {
  switch (action.type) {
    case STAR_REPO:
      return { ...state, starRepos: action.payload };
    default:
      return state;
  }
};
