import { getCharacterById } from "@api/characters";
import { getEpisodesRelatedByCharacter } from "@api/episodes";
import type { Character } from "@schema";
import { handler } from "@utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getCharacterById(Number(params.id));
        if (!item) return handler.notFound();
        const episodes = getEpisodesRelatedByCharacter(item as Character);
        return handler.success(episodes);
    } catch (error) {
        return handler.serverError();
    }
}
