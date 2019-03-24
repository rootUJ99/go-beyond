import axios from 'axios';
import ApiConstants from './apiConstants';
const currentApiUrlPrefix = 'http://localhost:8000'
const getAxiosApiConfig = (apiKey) => {
  if (apiKey && ~apiKey.indexOf('.')) {
    const apiKeyParams = apiKey.split('.');
    if (apiKey && ApiConstants[apiKeyParams[0]] && ApiConstants[apiKeyParams[0]][apiKeyParams[1]]) {
      const currentApi = ApiConstants[apiKeyParams[0]][apiKeyParams[1]];
      const apiConfig = { ...currentApi.apiConfig };
      if (currentApi.attachPrefix) {
        apiConfig.url = currentApiUrlPrefix + apiConfig.url;
      }
      return {
        ...apiConfig,
      };
    }
  }
  return null;
};



const serviceCall =  new Promise((resolve, reject) => {
  axios(this.apiConfig)
  .then((response) => {
    // this.completeCallBack(response);
    console.log(response)
    resolve(response);
  }).catch((error) => {
    // this.handleSessionTimout(error);
    // this.completeCallBack(error);
    console.log(error);
    reject(error);
  });
});

export default getAxiosApiConfig;