import axios from "axios";
import dotenv from 'dotenv';

import { BitnobBadKeyError, errorClass } from './exceptions';

dotenv.config();

class Base {
    apiKey: any;
    production: any;
    BitnobLiveURL: string;
    BitnobSandboxURL: string;
    baseUrl: any;

    constructor() {
      this.apiKey = process.env.BITNOB_API_KEY;
      this.production = process.env.BITNOB_PRODUCTION;
      this.BitnobLiveURL = 'https://api.bitnob.co/api/v1'
      this.BitnobSandboxURL = 'https://sandboxapi.bitnob.co/api/v1'
      if(!this.apiKey) {
        throw new BitnobBadKeyError();
      }
      if(this.production || this.production === ""){
        this.baseUrl = this.BitnobLiveURL;
      } else {
        this.baseUrl = this.BitnobSandboxURL;
      }
    }

    async sendRequest(url:string, method:any, data:any =null) {
      try {
        const response = await axios({
          method: method, //you can set what request you want to be
          url: this.baseUrl + url,
          data: data,
          headers: {
            Authorization: 'Bearer ' + this.apiKey
          }
        });
        return response.data
      } catch (error:any) {
        if(error.response) {
          const statusCode = error.response.status
          const dataError = errorClass[statusCode]
          throw new dataError(error.response.data.message)
        };
        return error.message;
      }
      
    };

//   checkParameter(requiredParam:string[], passedParam:string[]){
//     const requredParam = requiredParam.sort();
//     const passdParam = Object.keys(passedParam).sort();
    
//     for (var i = 0; i < requredParam.length; ++i) {
//         if (requredParam[i] !== passedParam[i]) {
//           throw IncompleterErr(`${requredParam} is missing`);
//           return;
//         }
//       }
    
//     return true;
//     }
  }

const dynamicParam = ({ ...args }) => {
  const obj = args;
  if (args !== {}) {
    let query = '';
    Object.keys(obj).forEach((key, index) => {
      const ampasign = index !== 0 ? '&' : '';
      query += `${ampasign}${key}=${obj[key]}`;
    });
    return query;
  }
};

export {Base, dynamicParam}