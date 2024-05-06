/**
 * Concatenates the provided class names into a single string, separated by spaces.
 *
 * @param classes - The class names to concatenate.
 * @returns The concatenated class names.
 */
export const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

const react = "text-blue-500";
const vuejs = "text-green-500";
const svelte = "text-orange-500";
const astro = "text-purple-500";

/**
 * Retrieves the corresponding CNS icon based on the provided framework.
 * @param framework - The framework for which to retrieve the CNS icon.
 * @returns The CNS icon for the specified framework, or undefined if the framework is not recognized.
 */
export const getCnsIcons = (framework: string | undefined) =>
  framework &&
  {
    astro,
    react,
    vuejs,
    svelte,
  }[framework];
