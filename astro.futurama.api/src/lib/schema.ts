import { z } from "zod";

export const episode = z.object({
    number: z.string(),
    title: z.string(),
    writers: z.array(z.string()),
    originalAirDate: z.string(),
    desc: z.string(),
    characters: z.array(z.string()).optional(),
});

export type Episode = z.infer<typeof episode>;

export const getEpisodeValidation = (obj: unknown) =>
    episode.safeParse(obj);

export const character = z.object({
    name: z.object({
        first: z.string(),
        middle: z.string(),
        last: z.string(),
    }),
    images: z.object({
        main: z.string(),
        "head-shot": z.string(),
    }),
    gender: z.string(),
    species: z.string(),
    occupation: z.string(),
    homePlanet: z.string(),
    age: z.string(),
    sayings: z.array(z.string()),
});

export type Character = z.infer<typeof character>;

export const getCharacterValidation = (obj: unknown) =>
    character.safeParse(obj);

export const cast = z.object({
    name: z.string(),
    born: z.string(),
    died: z.string(),
    bio: z.object({
        text: z.string(),
        url: z.string(),
    }),
    characters: z.array(z.string()),
})

export type Cast = z.infer<typeof cast>;

export const getCastValidation = (obj: unknown) =>
    cast.safeParse(obj);