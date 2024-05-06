
import { getCharacterValidation as getValidation } from "@schema";
import type { APIRoute } from "astro";
import { concatErrors, handler } from "@utils"
import { getAllCharacters } from "@api/characters";

export const GET: APIRoute = async () => {
  const characters = getAllCharacters();
  return handler.success(characters);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const character = await request.json();
    const validation = getValidation(character);

    if (!validation.success) {
      const errors = validation.error.issues.map((issue) => `${issue.path}`);
      return handler.badRequest(concatErrors(errors));
    }

    return handler.created(character);
  } catch (error) {
    return handler.serverError();
  }
}

