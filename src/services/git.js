import { client_id, client_secret } from "../config";
// import { gql } from "apollo-boost";
// import { client } from "./apollo";

export const getAuthToken = code => {
  console.log("called");
  return fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&&client_secret=${client_secret}&&code=${code}`,
    {
      method: "POST",
      headers: { Accept: "application/json" }
    }
  )
    .then(resp => resp.json())
    .catch(err => console.log(err));
};

// Get All the repository
// export const getRepository = () => {
//   const REPO_LIST = gql`
//     query {
//       viewer {
//         login
//         name
//         starredRepositories(first: 20) {
//           edges {
//             cursor
//             node {
//               id
//               name
//               description
//               primaryLanguage {
//                 id
//                 name
//                 color
//               }
//             }
//           }
//         }
//       }
//     }
//   `;
//   return client.query({
//     query: REPO_LIST,
//     fetchPolicy: "no-cache"
//   });
// };

// // Search results
// export const searchRepositories = variables => {
//   const SEARCH_REPO = gql`
//     query topRepos($query: String!) {
//       search(first: 10, query: $query, type: REPOSITORY) {
//         repositoryCount
//         nodes {
//           ... on Repository {
//             name
//             id
//             nameWithOwner
//             stargazers {
//               totalCount
//             }
//           }
//         }
//       }
//     }
//   `;
//   return client.query({
//     query: SEARCH_REPO,
//     variables
//   });
// };
