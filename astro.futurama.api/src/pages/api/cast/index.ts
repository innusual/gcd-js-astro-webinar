
import { getCastValidation as getValidation } from "@schema";
import type { APIRoute } from "astro";
import { concatErrors, handler } from "@utils"
import { getAllCasting } from "@api/cast";

export const GET: APIRoute = async () => {
    const cast = getAllCasting();
    return handler.success(cast);
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const cast = await request.json();
        const validation = getValidation(cast);

        if (!validation.success) {
            const errors = validation.error.issues.map((issue) => `${issue.path}`);
            return handler.badRequest(concatErrors(errors));
        }

        return handler.created(cast);
    } catch (error) {
        return handler.serverError();
    }
}

