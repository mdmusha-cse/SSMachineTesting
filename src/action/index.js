import {
    AUTH_REQUEST,
  } from './TypeConstants';
  
  export const authRequestAction = loginData => {
    return {
      type: AUTH_REQUEST,
      loginData,
    };
  }; 