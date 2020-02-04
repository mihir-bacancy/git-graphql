import { getRepository, searchRepository } from "../../services/git";
import { STAR_REPO } from "../../utils/constant";
export const getRepositories = async dispatch => {
  try {
    const repos = await getRepository();
    dispatch({
      type: STAR_REPO,
      payload: repos.data.viewer.starredRepositories.edges
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchRepositories = async query => {
  try {
    const res = await searchRepository(query);
    return res?.data?.search?.nodes;
  } catch (error) {
    console.log(error);
  }
};
