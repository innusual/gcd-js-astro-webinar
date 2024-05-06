<script setup lang="ts">
import { getCharacterById } from "@lib/api";
import { useStore } from "@nanostores/vue";
import { counterCharacter, client } from "@store";
import { QueryClient, useQuery } from "@tanstack/vue-query";

const queryClient = new QueryClient({
  queryCache: client.getQueryCache(),
});

const characterId = useStore(counterCharacter);

const { data: character, isLoading } = useQuery(
  {
    queryKey: ["character", characterId],
    queryFn: () => getCharacterById(Number(characterId.value)),
    placeholderData: (prev) => prev,
    select: ({ id, images, sayings, name, ...data }) => ({
      name: `${name.first} ${name.middle} ${name.last}`,
      images: images.main,
      ...data,
    }),
  },
  queryClient,
);
</script>

<template>
  <section class="my-10">
    <div v-if="isLoading">Loading...</div>
    <div v-else class="w-full max-w-md">
      <div class="space-y-6 rounded-lg border py-6 shadow-sm bg-white">
        <div class="flex justify-center">
          <span class="relative flex h-32 w-32 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full object-contain" :src="character?.images" />
            <img
              class="aspect-square h-full w-full"
              :alt="character?.name"
              src="/placeholder.svg?height=128&amp;width=128"
            />
          </span>
        </div>
        <div class="space-y-4 px-6">
          <div class="space-y-2 text-center">
            <h2 class="text-2xl font-bold">{{ character?.name }}</h2>
            <p class="text-gray-500 dark:text-gray-400">
              {{ character?.occupation }}
            </p>
          </div>
        
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="space-y-1">
              <p class="font-medium">Age</p>
              <p>{{ character?.age }}</p>
            </div>

            <div class="space-y-1">
              <p class="font-medium">Species</p>
              <p>{{ character?.species }}</p>
            </div>
            <div class="space-y-1">
              <p class="font-medium">Gender</p>
              <p>{{ character?.gender }}</p>
            </div>
            <div v-if="character?.homePlanet" class="space-y-1">
              <p class="font-medium">Home Planet</p>
              <p>{{ character?.homePlanet }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
