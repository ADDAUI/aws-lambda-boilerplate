import {
  APIGatewayEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
} from "aws-lambda";


// create a Handler function for aws lambda
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
) => {
  try {
    // get the response from main function
    const respose = await main(event);
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: respose.statusCode,
      body: JSON.stringify(respose),
    };
  } catch (error) {
    console.log(error);
    if (error instanceof LambdaError) {
      return {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        statusCode: error.code,
        body: JSON.stringify({
          error: error.message,
          errorCode: error.code,
        }),
      };
    } else {
      return {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        statusCode: 500,
        body: JSON.stringify({
          error: "Internal Server Error",
          errorCode: "INTERNAL_SERVER_ERROR",
        }),
      };
    }

  }
};

const main = async (
  event: APIGatewayProxyEvent
): Promise<MainReturn> => {
  // add your code here


  return {
    statusCode: 200,
  };
}


// create an LambdaError class to handle errors
class LambdaError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}

type lambdaResponse = {
  statusCode: number;
  error?: string;
  errorCode?: string;
};

type MainReturn = {
  // add what the expected response from the lambda function
} & lambdaResponse;

