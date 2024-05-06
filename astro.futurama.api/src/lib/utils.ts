const headers: ResponseInit["headers"] = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",

}

type Status = 200 | 201 | 204 | 400 | 403 | 404 | 500

type Options = Record<Status, ResponseInit>

const options: Options = {
    200: {
        headers,
        status: 200,
        statusText: "OK",
    },
    201: {
        headers,
        status: 201,
        statusText: "Created",
    },
    204: {
        headers,
        status: 204,
        statusText: "No Content",
    },
    400: {
        headers,
        status: 400,
        statusText: "Bad Request",
    },
    403: {
        headers,
        status: 403,
        statusText: "Forbidden",
    },
    404: {
        headers,
        status: 404,
        statusText: "Not Found",
    },
    500: {
        headers,
        status: 500,
        statusText: "Internal Server Error",
    },
}


const handlerJSONResponse = (json: any, status: Status): Response => new Response(JSON.stringify(json), options[status]);
const handlerNullResponse = (status: Status): Response => new Response(null, options[status]);

const handlerSuccess = (json: any): Response => handlerJSONResponse(json, 200);
const handlerCreated = (json: any): Response => handlerJSONResponse(json, 201);

const handlerNoContent = (): Response => handlerNullResponse(204);

const handlerBadRequest = (error = options[400].statusText): Response => handlerJSONResponse({ error }, 400);
const handlerForbidden = (error = options[403].statusText): Response => handlerJSONResponse({ error }, 403);
const handlerNotFound = (error = options[404].statusText): Response => handlerJSONResponse({ error }, 404);
const handlerServerError = (error = options[500].statusText): Response => handlerJSONResponse({ error }, 500);



export const handler = {
    success: handlerSuccess,
    created: handlerCreated,
    badRequest: handlerBadRequest,
    forbidden: handlerForbidden,
    notFound: handlerNotFound,
    serverError: handlerServerError,
    noContent: handlerNoContent,
};

export const concatErrors = (errors: (string | number)[], message = "Invalid, you missed"): string => `${message}: `.concat(...errors.join(", "));


