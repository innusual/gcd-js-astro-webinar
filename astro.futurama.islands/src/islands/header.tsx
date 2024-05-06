import { getCharacterById } from "@lib/api";
import { useStore } from "@nanostores/react";
import { client, counterCharacter } from "@store";
import { useQuery } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const SVGCursor = ({ children }: PropsWithChildren) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-6 w-6 text-neutral-600 sm:h-8 sm:w-8"
  >
    <title>Cursor</title>
    <g fill="none" fillRule="evenodd">
      {children}
    </g>
  </svg>
);

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  disabled: boolean;
};

const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-200 disabled:opacity-50 disabled:hover:bg-transparent sm:h-10 sm:w-10"
    {...rest}
  >
    {children}
  </button>
);

const Header = () => {
  const characterId = useStore(counterCharacter);
  const parsedCharacterId = characterId && Number.parseInt(characterId);

  const setNextCharacter = () =>
    parsedCharacterId && counterCharacter.set(`${parsedCharacterId + 1}`);
  const setPreviousCharacter = () =>
    parsedCharacterId && counterCharacter.set(`${parsedCharacterId - 1}`);

  const { data } = useQuery(
    {
      queryKey: ["character", characterId],
      queryFn: () => getCharacterById(Number(characterId)),
      placeholderData: (prev) => prev,
      select: (response) => ({
        ...response,
        images: response.images.main,
        name: `${response.name.first} ${response.name.last}`,
      }),
    },
    client,
  );

  return (
    <section className="flex items-center justify-between py-5">
      <h1 className="text-4xl font-medium sm:text-6xl">{data?.name}</h1>
      <div className="flex items-center gap-2">
        <Button onClick={setPreviousCharacter} disabled={Boolean(!data?.cursor.prev)}>
          <SVGCursor>
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
            />
          </SVGCursor>
        </Button>
        <Button onClick={setNextCharacter} disabled={Boolean(!data?.cursor.next)}>
          <SVGCursor>
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
            />
          </SVGCursor>
        </Button>
      </div>
    </section>
  );
};

export default Header;
