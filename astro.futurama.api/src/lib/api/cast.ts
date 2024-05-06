import { cast } from "@db/futurama.json";

export const getAllCasting = () => cast;

export const getCastingById = (id: number) => cast.find((item) => item.id === id);
