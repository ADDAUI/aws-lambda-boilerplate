## Typescript Lambda Boilerplate

#### Setup

- Write the expected successful return type in the `MainReturn` type declaration.
- Write the function logic in `main` function.
- Write the environment in the `.env.sh`.
- To test the lambda write the expected request in `event.json` and use `npm start`.

#### Error Handling

Return any successful reponse from the main function.
to return an error throw a `LambdaError` containing the status code and the message.
any other type of error will return a `500` error.

#### Deployment

###### Create the function

Create the function using the CLI or the console.

###### Update the function

to updatethe function code create **three** branches in the repo.
one is the default `main` branch, two are deployment branches `dev` and `prod`.
in the repo settings add the following variables

- FUNCTION_NAME

- DEV_AWS_ACCESS_KEY_ID
- DEV_AWS_SECRET_ACCESS_KEY
- DEV_AWS_REGION

- PROD_AWS_ACCESS_KEY_ID
- PROD_AWS_SECRET_ACCESS_KEY
- PROD_AWS_REGION

> [!TODO]  
> The github action can be updated to use environments
