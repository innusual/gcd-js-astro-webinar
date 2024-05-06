import { QueryClient } from "@tanstack/query-core";
import { persistentAtom as atom } from "@nanostores/persistent";

export const client = new QueryClient();

export const counterCharacter = atom(String(1));
