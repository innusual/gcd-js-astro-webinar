import type { Cast, Character, Episode, Metadata } from "./api.types";

const API_URL = import.meta.env.API_URL;

/**
 * Retrieves metadata information from the API.
 * @returns A promise that resolves to the metadata information.
 */
export const getMetadataInfo = async () => {

  try {
    const response = await fetch(`${API_URL}`);
    return response.json() as unknown as Metadata;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Retrieves a character by their ID from the API.
 * @param id - The ID of the character to retrieve.
 * @returns A Promise that resolves to the character object.
 */
export const getCharacterById = async (id: number) => {
  const response = await fetch(`${API_URL}/characters/${id}`);
  return response.json() as unknown as Character;
};

/**
 * Fetches the characters from the API.
 * @returns A promise that resolves to an array of characters.
 */
export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/characters`);
  return response.json() as unknown as {
    id: number;
    name: string;
    image: string;
    occupation: string;
  }[];
};

/**
 * Retrieves an episode by its ID from the API.
 * @param id - The ID of the episode to retrieve.
 * @returns A promise that resolves to the episode data.
 */
export const getEpisodeById = async (id: number) => {
  const response = await fetch(`${API_URL}/episodes/${id}`);
  return response.json() as unknown as Episode;
};

/**
 * Retrieves the list of episodes from the API.
 * @returns A promise that resolves to an array of Episode objects.
 */
export const getEpisodes = async () => {
  const response = await fetch(`${API_URL}/episodes`);
  return response.json() as unknown as Episode[];
};

/**
 * Retrieves a cast member by their ID from the API.
 * @param id - The ID of the cast member to retrieve.
 * @returns A promise that resolves to the cast member object.
 */
export const getCastMemberById = async (id: number) => {
  const response = await fetch(`${API_URL}/cast/${id}`);
  return response.json() as unknown as Cast;
};

/**
 * Fetches the cast members from the API.
 * @returns A promise that resolves to an array of cast members.
 */

export const getCastMembers = async () => {
  const response = await fetch(`${API_URL}/cast`);
  return response.json() as unknown as Cast[];
};
