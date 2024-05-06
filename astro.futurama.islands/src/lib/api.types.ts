/**
 * Represents a creator of a resource.
 */
type Creator = {
  name: string;
  url: string;
};
/**
 * Represents information about a TV show.
 */
export type Info = {
  /**
   * A brief summary of the TV show.
   */
  synopsis: string;
  /**
   * The years during which the TV show aired.
   */
  yearsAired: string;
  /**
   * The creators of the TV show.
   */
  creators: Creator[];
};

/**
 * Represents the metadata for an API.
 */
export type Metadata = {
  /**
   * The title of the API.
   */
  title: string;
  /**
   * The long description of the API.
   */
  longDesc: string;
  /**
   * The short description of the API.
   */
  desc: string;
  /**
   * Additional information about the API.
   */
  info: Info;
  /**
   * The categories that the API belongs to.
   */
  categories: string[];
  /**
   * The endpoints of the API.
   */
  endpoints: [];
};

/**
 * Represents a cursor object used for pagination.
 */
type Cursor = {
  next?: string;
  prev?: string;
};

/**
 * Represents a character in the Futurama Islands API.
 */
export interface Character {
  /**
   * The unique identifier of the character.
   */
  id: number;

  /**
   * The name of the character.
   */
  name: {
    /**
     * The first name of the character.
     */
    first: string;

    /**
     * The middle name of the character.
     */
    middle: string;

    /**
     * The last name of the character.
     */
    last: string;
  };

  /**
   * The images associated with the character.
   */
  images: {
    /**
     * The main image of the character.
     */
    main: string;

    /**
     * The head-shot image of the character.
     */
    "head-shot": string;
  };

  /**
   * The gender of the character.
   */
  gender: string;

  /**
   * The species of the character.
   */
  species: string;

  /**
   * The occupation of the character.
   */
  occupation: string;

  /**
   * The home planet of the character.
   */
  homePlanet: string;

  /**
   * The age of the character.
   */
  age: string;

  /**
   * The sayings associated with the character.
   */
  sayings: string[];

  /**
   * The cursor used for pagination.
   */
  cursor: Cursor;
}

/**
 * Represents an episode of Futurama.
 */
export type Episode = {
  /**
   * The unique identifier of the episode.
   */
  id: number;

  /**
   * The original air date of the episode.
   */
  originalAirDate: string;

  /**
   * The writers of the episode.
   */
  writers: string;

  /**
   * The characters featured in the episode.
   */
  characters?: string[];

  /**
   * A description of the episode.
   */
  desc: string;
};

/**
 * Represents a cast member.
 */
export type Cast = {
  /**
   * The unique identifier of the cast member.
   */
  id: number;
  /**
   * The name of the cast member.
   */
  name: string;
  /**
   * The date of birth of the cast member.
   */
  born: string;
  /**
   * The date of death of the cast member.
   */
  died: string;
  /**
   * The biography of the cast member.
   */
  bio: {
    /**
     * The text description of the cast member's biography.
     */
    text: string;
    /**
     * The URL to the cast member's biography.
     */
    url: string;
  };
  /**
   * The characters played by the cast member.
   */
  characters: string[];
};
