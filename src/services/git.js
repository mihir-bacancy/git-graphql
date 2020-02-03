import { client_id, client_secret } from "../config";

export const getAuthToken = code => {
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
