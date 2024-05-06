import { getEpisodeValidation as getValidation } from "@schema";
import type { APIRoute } from "astro";
import { concatErrors, handler } from "@utils"
import { getAllEpisodes } from "@api/episodes";

export const GET: APIRoute = async () => {
  const episodes = getAllEpisodes();
  return handler.success(episodes);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const episode = await request.json();
    const validation = getValidation(episode);

    if (!validation.success) {
      const errors = validation.error.issues.map((issue) => `${issue.path}`);
      return handler.badRequest(concatErrors(errors));
    }

    return handler.created(episode);
  } catch (error) {
    return handler.serverError();
  }
}

