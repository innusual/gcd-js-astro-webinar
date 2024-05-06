import { episodes } from '@db/futurama.json'
import type { Character } from '@schema'
import Fuse from 'fuse.js'

export const getAllEpisodes = () => episodes
export const getEpisodeById = (id: number) => episodes.find((item) => item.id === id)
export const getEpisodesRelatedByCharacter = (item: Character) => {
    try {
        const { first, last, middle } = item.name
        const characterName = `${first} ${middle} ${last}`
        const fuse = new Fuse(episodes, {
            keys: ['title', 'desc']
        })
        return fuse.search(characterName).map(({ item }) => item)
    } catch (error) {
        throw new Error('Error getting episode by character')
    }

}