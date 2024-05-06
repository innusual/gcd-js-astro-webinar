import type { Site } from "@/types";
import { seoContentCollection } from "./content/config";

export const site: Site = {
  name: "ansango",
  email: "anibalsantosgo@gmail.com",
  lang: "es",
  pages: {
    home: {
      title: "Home",
      description: "Esta es mi página de notas de tecnología.",
      entriesPerPage: 15,
    },
    tags: {
      title: "Tags",
      description: "Aquí puedes encontrar todas las etiquetas.",
      entriesPerPage: 20,
    },
    ...seoContentCollection,
  },
}

export const baseLongDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
