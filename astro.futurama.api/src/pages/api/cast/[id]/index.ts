import { getCastingById } from "@api/cast";
import { getCastValidation as getValidation } from "@schema";
import { concatErrors, handler } from "@utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getCastingById(Number(params.id));
        if (!item) return handler.notFound();
        return handler.success(item);
    } catch (error) {
        return handler.serverError();
    }
}

export const POST: APIRoute = async () => {
    return handler.badRequest();
}

export const PUT: APIRoute = async ({ request, params }) => {
    try {
        const item = params.id && getCastingById(Number(params.id));
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