import { characters } from "@db/futurama.json";
import type { Episode } from "@schema";
import Fuse from "fuse.js";

export const getAllCharacters = () => {
    return characters.map(({ id, name: { first, last }, images: { main: image }, homePlanet, occupation }) => ({
        id,
        name: `${first} ${last}`,
        image,
        homePlanet,
        occupation,
    }));
}
export const getCharacterById = (id: number) => characters.find((item) => item.id === id);

export const getCharactersRelatedByEpisode = (episode: Episode) => {
    try {
        return characters.filter(({ name: { first, last } }) => episode.desc.includes(first) || episode.desc.includes(last)).map(({ id, name: { first, last }, images: { main: image } }) => ({
            id,
            name: `${first} ${last}`,
            image,
        }));
    } catch (error) {
        throw new Error("Error getting characters by episode");
    }
}
export const getCharactersByText = (text: string) => {
    try {
        const fuse = new Fuse(characters, {
            keys: ["name.first", "name.last", "name.middle"],
        });
        return fuse.search(text).map(({ item }) => item);
    } catch (error) {
        throw new Error("Error getting characters by text");
    }
}