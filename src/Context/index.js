import React, { createContext, useContext, useReducer } from "react";

import { applyMiddleware } from "./middleware";

import reducer from "./Reducer/index";

export const Context = createContext();

const combinedReducers = (state = {}, action = {}) =>
  Object.assign(
    {},
    ...Object.keys(reducer).map(k => ({ [k]: reducer[k](state[k], action) }))
  );

export default function Provider({ children }) {
  console.log("combinedReducers({})", combinedReducers({}));
  const [state, dispatch] = useReducer(combinedReducers, combinedReducers({}));
  console.log("satet", dispatch);
  return (
    <Context.Provider value={[state, applyMiddleware(dispatch)]}>
      {children}
    </Context.Provider>
  );
}

export const useStore = () => useContext(Context);

// import React, { createContext, useEffect, useState } from "react";
// import { getRepository } from "../services/git";

// export const starRepo = [];

// export const StarRepoContext = createContext(starRepo);

// function StarRepoProvider() {
//   const [starRepos, setStarRepos] = useState([]);

//   const getStartRepos = async () => {
//     try {
//       return await getRepository();
//     } catch (error) {
//       alert(error);
//     }
//   };

//   useEffect(async () => {
//     const starRepos = getStartRepos();
//     setStarRepos(starRepos.data.viewer.starredRepositories.edges);
//   }, []);

//   return (
//     <StarRepoContext.Provider value={{ starRepos }}>
//       {this.props.children}
//     </StarRepoContext.Provider>
//   );
// }

// export default StarRepoProvider;
