<script lang="ts">
  import { onMount } from "svelte";

  type Props = { ariaLabel: string };
  let { ariaLabel }: Props = $props();

  let isDark = $state(false);

  onMount(() => {
    isDark = document.documentElement.classList.contains("dark");

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        isDark = e.matches;
        applyTheme();
      }
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  });

  function applyTheme() {
    document.documentElement.classList.toggle("dark", isDark);
  }

  function toggle() {
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme();
  }
</script>

<button
  onclick={toggle}
  class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300"
  aria-label={ariaLabel}
  type="button"
>
  {#if isDark}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
      <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4.22 4.22a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 1 1-1.41 1.42L4.22 5.64a1 1 0 0 1 0-1.42Zm12.73 12.73a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 1 1-1.41 1.42l-1.42-1.41a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm17 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM4.22 19.78a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.41l-1.41 1.42a1 1 0 0 1-1.42 0Zm12.73-12.73a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.41l-1.42 1.42a1 1 0 0 1-1.41 0ZM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/>
    </svg>
  {/if}
</button>
