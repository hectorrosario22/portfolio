<script lang="ts">
  type NavItem = { href: string; label: string };
  type Props = {
    items: NavItem[];
    ariaLabel: string;
    languageLabel: string;
    otherLangHref: string;
    otherLangLabel: string;
    themeAriaLabel: string;
  };
  let {
    items,
    ariaLabel,
    languageLabel,
    otherLangHref,
    otherLangLabel,
    themeAriaLabel,
  }: Props = $props();

  let open = $state(false);

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }
</script>

<button
  onclick={toggle}
  class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300"
  aria-label={ariaLabel}
  aria-expanded={open}
  type="button"
>
  {#if open}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true">
      <path d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12L6.22 7.28a.75.75 0 0 1 0-1.06Z"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true">
      <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
    </svg>
  {/if}
</button>

{#if open}
  <div
    class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md border-b border-secondary-200/50 dark:border-secondary-700/50 shadow-lg"
  >
    <div class="px-4 py-6 space-y-4">
      {#each items as item (item.href)}
        <a
          href={item.href}
          onclick={close}
          class="block py-3 px-4 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium"
        >
          {item.label}
        </a>
      {/each}

      <div
        class="flex items-center justify-between pt-4 border-t border-secondary-200/50 dark:border-secondary-700/50"
      >
        <a
          href={otherLangHref}
          aria-label={languageLabel}
          class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm7.94 9h-3.99a15.57 15.57 0 0 0-.86-4.48A8.03 8.03 0 0 1 19.94 11ZM12 4c.93 1.3 1.66 3.96 1.88 7h-3.76C10.34 7.96 11.07 5.3 12 4ZM4.06 13h3.99c.13 1.57.43 3.08.86 4.48A8.03 8.03 0 0 1 4.06 13ZM4.06 11a8.03 8.03 0 0 1 4.85-4.48A15.57 15.57 0 0 0 8.05 11H4.06ZM12 20c-.93-1.3-1.66-3.96-1.88-7h3.76C13.66 16.04 12.93 18.7 12 20Zm3.09-.52A15.57 15.57 0 0 0 15.95 15h3.99a8.03 8.03 0 0 1-4.85 4.48Z"/>
          </svg>
          <span class="text-sm font-semibold">{otherLangLabel}</span>
        </a>
      </div>
    </div>
  </div>

  <button
    onclick={close}
    aria-label="Close menu"
    class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
  ></button>
{/if}
