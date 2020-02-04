import { getRepository } from "../../services/git";

export const getRepositories = async dispatch => {
  let repos;
  try {
    repos = await getRepository();
    console.log("repos", dispatch);
    dispatch({
      type: "START_REPO",
      payload: repos.data.viewer.starredRepositories.edges
    });
  } catch (error) {
    console.log(error);
  }
};
