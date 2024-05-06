import plugin from "tailwindcss/plugin";

const colorVar = (str: string) => `--color-${str}`;
export const color = (str: string) => `var(${colorVar(str)})`;

const colorsVars = {
  [colorVar("black")]: "#100f0f",
  [colorVar("black-rgb")]: "16, 15, 15",
  [colorVar("white")]: "#fffffc",
  [colorVar("white-rgb")]: "254, 252, 240",
  [colorVar("950")]: "#1c1b1a",
  [colorVar("900")]: "#282726",
  [colorVar("850")]: "#343331",
  [colorVar("800")]: "#403e3c",
  [colorVar("700")]: "#575653",
  [colorVar("600")]: "#6f6e69",
  [colorVar("500")]: "#878580",
  [colorVar("300")]: "#b7b5ac",
  [colorVar("200")]: "#cecdc3",
  [colorVar("150")]: "#dad8ce",
  [colorVar("100")]: "#e6e4d9",
  [colorVar("50")]: "#f2f0e5",
  [colorVar("200-rgb")]: "206, 205, 195",
  [colorVar("red-600")]: "#af3029",
  [colorVar("red-400")]: "#d14d41",
  [colorVar("orange-600")]: "#bc5215",
  [colorVar("orange-400")]: "#da702c",
  [colorVar("yellow-900")]: "#4d3a0b",
  [colorVar("yellow-600")]: "#ad8301",
  [colorVar("yellow-400")]: "#d0a215",
  [colorVar("yellow-100")]: "#fceeb8",
  [colorVar("green-600")]: "#66800b",
  [colorVar("green-400")]: "#879a39",
  [colorVar("cyan-950")]: "#142625",
  [colorVar("cyan-600")]: "#24837b",
  [colorVar("cyan-400")]: "#3aa99f",
  [colorVar("cyan-50")]: "#ebf2e7",
  [colorVar("blue-600")]: "#205ea6",
  [colorVar("blue-400")]: "#4385be",
  [colorVar("purple-600")]: "#5e409d",
  [colorVar("purple-400")]: "#8b7ec8",
  [colorVar("magenta-600")]: "#a02f6f",
};

export const colors = {
  "primary": color("bg-primary"),
  "primary-rgb": color("bg-primary-rgb"),
  "inverted-rgb": color("inverted-rgb"),
  "secondary": color("bg-secondary"),
  "normal": color("tx-normal"),
  "normal-rgb": color("tx-normal-rgb"),
  "muted": color("tx-muted"),
  "faint": color("tx-faint"),
  "ui-normal": color("ui-normal"),
  "ui-hover": color("ui-hover"),
  "ui-active": color("ui-active"),
  "highlight": color("highlight"),
  "action": color("action"),
  "background-hover": color("bg-hover"),
  "selection": color("selection"),
  "red": color("re"),
  "red-hover": color("re-hover"),
  "orange": color("or"),
  "orange-hover": color("or-hover"),
  "yellow": color("ye"),
  "yellow-hover": color("ye-hover"),
  "green": color("gr"),
  "green-hover": color("gr-hover"),
  "cyan": color("cy"),
  "cyan-hover": color("cy-hover"),
  "blue": color("bl"),
  "blue-hover": color("bl-hover"),
  "purple": color("pu"),
  "purple-hover": color("pu-hover"),
  "magenta": color("ma"),
  "magenta-hover": color("ma-hover"),
};

const themeDefault = {
  [colorVar("bg-primary")]: color("white"),
  [colorVar("bg-primary-rgb")]: color("white-rgb"),
  [colorVar("inverted-rgb")]: color("black-rgb"),
  [colorVar("bg-secondary")]: color("50"),
  [colorVar("tx-normal")]: color("black"),
  [colorVar("tx-normal-rgb")]: color("black-rgb"),
  [colorVar("tx-muted")]: color("600"),
  [colorVar("tx-faint")]: color("300"),
  [colorVar("ui-normal")]: color("100"),
  [colorVar("ui-hover")]: color("150"),
  [colorVar("ui-active")]: color("200"),
  [colorVar("highlight")]: color("yellow-100"),
  [colorVar("action")]: color("cyan-600"),
  [colorVar("bg-hover")]: color("cyan-50"),
  [colorVar("selection")]: "rgba(187, 220, 206, 0.3)",
  [colorVar("re")]: color("red-600"),
  [colorVar("re-hover")]: color("red-400"),
  [colorVar("or")]: color("orange-600"),
  [colorVar("or-hover")]: color("orange-400"),
  [colorVar("ye")]: color("yellow-600"),
  [colorVar("ye-hover")]: color("yellow-400"),
  [colorVar("gr")]: color("green-600"),
  [colorVar("gr-hover")]: color("green-400"),
  [colorVar("cy")]: color("cyan-600"),
  [colorVar("cy-hover")]: color("cyan-400"),
  [colorVar("bl")]: color("blue-600"),
  [colorVar("bl-hover")]: color("blue-400"),
  [colorVar("pu")]: color("purple-600"),
  [colorVar("pu-hover")]: color("purple-400"),
  [colorVar("ma")]: color("magenta-600"),
  [colorVar("ma-hover")]: color("magenta-400"),
};

const themeDark = {
  "color-scheme": "dark",
  [colorVar("bg-primary")]: color("black"),
  [colorVar("bg-primary-rgb")]: color("black-rgb"),
  [colorVar("inverted-rgb")]: color("white-rgb"),
  [colorVar("bg-secondary")]: color("950"),
  [colorVar("tx-normal")]: color("200"),
  [colorVar("tx-normal-rgb")]: color("200-rgb"),
  [colorVar("tx-muted")]: color("500"),
  [colorVar("tx-faint")]: color("700"),
  [colorVar("ui-normal")]: color("900"),
  [colorVar("ui-hover")]: color("850"),
  [colorVar("ui-active")]: color("800"),
  [colorVar("highlight")]: color("yellow-900"),
  [colorVar("action")]: color("cyan-400"),
  [colorVar("bg-hover")]: color("cyan-950"),
  [colorVar("selection")]: "rgba(30, 95, 91, 0.3)",
  [colorVar("re")]: color("red-400"),
  [colorVar("re-hover")]: color("red-600"),
  [colorVar("or")]: color("orange-600"),
  [colorVar("or-hover")]: color("orange-400"),
  [colorVar("ye")]: color("yellow-600"),
  [colorVar("ye-hover")]: color("yellow-400"),
  [colorVar("gr")]: color("green-600"),
  [colorVar("gr-hover")]: color("green-400"),
  [colorVar("cy")]: color("cyan-600"),
  [colorVar("cy-hover")]: color("cyan-400"),
  [colorVar("bl")]: color("blue-600"),
  [colorVar("bl-hover")]: color("blue-400"),
  [colorVar("pu")]: color("purple-600"),
  [colorVar("pu-hover")]: color("purple-400"),
  [colorVar("ma")]: color("magenta-600"),
  [colorVar("ma-hover")]: color("magenta-400"),
};

export const selectors = {
  ":root": colorsVars,
  ":root, html": themeDefault,
  "html.dark": themeDark,
  "html.dark .astro-code.astro-code-themes, html.dark .astro-code.astro-code-themes span": {
    "color": "var(--shiki-dark) !important",
    "background-color": "var(--shiki-dark-bg) !important",
    /* Optional, if you also want font styles */
    "font-style": "var(--shiki-dark-font-style) !important",
    "font-weight": "var(--shiki-dark-font-weight) !important",
    "text-decoration": "var(--shiki-dark-text-decoration) !important",

  }
}

const reset = {
  color: colors.normal,
  fontWeight: 300,
  lineHeight: 1.5,
  fontSize: "calc(0.975em + 0.2vw)",
  margin: 0,
};

const headings = {
  "h1": { ...reset, fontWeight: 500, fontSize: "calc(1.3em + 0.55vw)", margin: "1em 0 0.5em 0" },
  "h2": { ...reset, fontWeight: 500, fontSize: "calc(1.25em + 0.2vw)", margin: "0.95em 0 0.45em 0 !important" },
  "h3": { ...reset, fontWeight: 500, fontSize: "calc(1.15em + 0.2vw)", margin: "0.75em 0 0.35em 0 !important" },
  "h4": { ...reset, fontWeight: 500, fontSize: "calc(1.10em + 0.2vw)", margin: "0.75rem 0" },
  "h5": { ...reset, fontWeight: 500, fontSize: "calc(1em + 0.2vw)", margin: "0.75rem 0" },
  "h6": { ...reset, fontWeight: 500, fontSize: "calc(0.975em + 0.2vw)", margin: "0.75rem 0" },
}

const ul = {
  listStyleType: "none",
  paddingLeft: 0,
  "& li": {
    paddingLeft: "0.125em",
    margin: 0,
    "& > a": {
      textDecoration: "underline",
    }
  },
};

const a = {
  ...reset,
  textDecoration: "none",
  "&:hover": {
    color: colors.action,
  },
};

const p = {
  ...reset,
  margin: "0.75rem 0",
}

const typographyConfigDefault = {
  ...reset,
  ...headings,
  ul,
  a,
  p,
};

export const buildTheme = plugin(({ addBase, }) => { addBase(selectors) }, {
  theme: {
    extend: {
      colors,
      fontSize: {
        caption: "calc(0.75em + 0.2vw)",
        title: headings.h1.fontSize,
        subtitle: headings.h2.fontSize,
        heading: headings.h3.fontSize,
        subheading: headings.h4.fontSize,

      },
      typography: () => {
        return {
          DEFAULT: {
            css: typographyConfigDefault,
          },
        }
      },
    },
  }
});