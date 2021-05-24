// a helper file for the api

import { Configuration, PetsApi } from "./generated";

const config = new Configuration({
  // you can set base path, api key, auth, etc... here
});

export const petsApi = new PetsApi(config);