import { getCastingById } from "@api/cast";
import { getCharactersByText } from "@api/characters";
import { handler } from "@utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getCastingById(Number(params.id));

        if (!item) return handler.notFound();
        const characters = item.characters.map((text) => getCharactersByText(text));

        return handler.success({ ...item, characters });
    } catch (error) {
        return handler.serverError();
    }
}
