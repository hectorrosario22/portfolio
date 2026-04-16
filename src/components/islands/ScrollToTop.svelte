<script lang="ts">
  import { onMount } from "svelte";

  type Props = { ariaLabel: string };
  let { ariaLabel }: Props = $props();

  let visible = $state(false);

  onMount(() => {
    const onScroll = () => {
      visible = window.pageYOffset > 300;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

{#if visible}
  <button
    onclick={scrollToTop}
    aria-label={ariaLabel}
    class="fixed bottom-8 right-8 z-[9999] w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    type="button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-auto" aria-hidden="true">
      <path d="M11.29 3.29a1 1 0 0 1 1.42 0l7 7a1 1 0 1 1-1.42 1.42L13 6.41V20a1 1 0 1 1-2 0V6.41l-5.29 5.3a1 1 0 1 1-1.42-1.42l7-7Z"/>
    </svg>
  </button>
{/if}
