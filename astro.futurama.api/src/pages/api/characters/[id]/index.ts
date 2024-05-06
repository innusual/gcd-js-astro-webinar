import type { APIRoute, } from "astro";
import { getCharacterValidation as getValidation } from "@schema";
import { concatErrors, handler } from "@utils";
import { getCharacterById } from "@api/characters";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getCharacterById(Number(params.id));
        const next = params.id && getCharacterById(Number(params.id) + 1)?.id;
        const prev = params.id && getCharacterById(Number(params.id) - 1)?.id;
        if (!item) return handler.notFound();
        return handler.success({ ...item, cursor: { next, prev } });
    } catch (error) {
        return handler.serverError();
    }
}

export const POST: APIRoute = async () => {
    return handler.badRequest();
}

export const PUT: APIRoute = async ({ request, params }) => {
    try {
        const item = params.id && getCharacterById(Number(params.id));
        if (!item) return handler.notFound();

        const episode = await request.json();
        const validation = getValidation(episode);

        if (!validation.success) {
            const errors = validation.error.issues.map((issue) => `${issue.path}`);
            return handler.badRequest(concatErrors(errors));
        }

        return handler.success(episode);
    } catch (error) {
        return handler.serverError();
    }
}

export const DELETE: APIRoute = async () => {
    return handler.noContent();
}