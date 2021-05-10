  
// a helper file for the api

import { Configuration } from "./generated";
import * as Apis from './generated'



const config = new Configuration({
  basePath:"https://localhost:44348",
  //TODO: fetch token from login and use it for auth
  
  apiKey: `bearer ${JSON.parse(localStorage.getItem("jwt"))}`
});

export const userApi = new Apis.UserApi(config);
export const examinationApi  = new Apis.ExaminationApi(config);
export const donationApi = new Apis.DonationApi(config);
export const bloodTypeApi = new Apis.BloodTypeApi(config);
export const bloodDonatorApi = new Apis.BloodDonatorApi(config);
export const bloodStorageApi = new Apis.BloodStorageApi(config);