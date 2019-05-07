import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import usersStat from './reducers';
import Amplify from "aws-amplify";
import config from "./config";

const store = createStore(usersStat);
store.subscribe(()=>{ // for testing redux
  console.log('store changed to',store.getState())
})

Amplify.configure({
  /*
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },*/
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    //identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "priceffTask",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)