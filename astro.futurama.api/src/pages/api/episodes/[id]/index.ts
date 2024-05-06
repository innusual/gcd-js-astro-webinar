import type { APIRoute, } from "astro";
import { getEpisodeValidation as getValidation, type Episode } from "@schema";
import { concatErrors, handler } from "@utils";
import { getCharactersRelatedByEpisode } from "@api/characters";
import { getEpisodeById } from "@api/episodes";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getEpisodeById(Number(params.id));
        if (!item) return handler.notFound();
        const characters = getCharactersRelatedByEpisode(item as unknown as Episode);
        return handler.success({ ...item, characters });
    } catch (error) {
        return handler.serverError();
    }
}

export const POST: APIRoute = async () => {
    return handler.badRequest();
}

export const PUT: APIRoute = async ({ request, params }) => {
    try {
        const item = params.id && getEpisodeById(Number(params.id));
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