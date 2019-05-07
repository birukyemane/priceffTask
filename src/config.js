export default {
    s3: {
      REGION: "eu-west-2",
      BUCKET: "priceff-task"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://nrfajc3pbg.execute-api.eu-west-2.amazonaws.com/prod"
    },
    /* user atuthenication is not used for this simple application 
    cognito: {
      REGION: "YOUR_COGNITO_REGION",
      USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    }*/
  };
  
