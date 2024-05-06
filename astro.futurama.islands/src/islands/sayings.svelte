<script lang="ts">
  import { client, counterCharacter } from "@store";
  import { getCharacterById } from "@lib/api";
  import { createQuery } from "@tanstack/svelte-query";

  $: characterQuery = createQuery(
    {
      queryKey: ["character", $counterCharacter],
      queryFn: () => getCharacterById(Number($counterCharacter)),
      placeholderData: (prev) => prev,
    },
    client,
  );

  $: sayings = $characterQuery.data?.sayings || [];
</script>

<section class="my-10">
  {#if $characterQuery.isLoading}
    <p>Loading...</p>
  {:else}
    <div class="py-6 lg:py-12">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tight">Most famous sayings</h2>
        <ul class="space-y-4">
          {#each sayings as saying}
            <li>
              <blockquote class="border p-4 bg-white rounded-md">
                {saying}
              </blockquote>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</section>
