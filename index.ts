import { APIGatewayProxyResultV2,APIGatewayProxyEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from lambda! CHANGE!!!!!'),
    };
    return response
}