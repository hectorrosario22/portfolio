<script lang="ts">
  import { onMount } from "svelte";

  type Props = { titles: string[] };
  let { titles }: Props = $props();

  let text = $state(titles[0] ?? "");
  let index = 0;
  let deleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDelay = 1500;

  onMount(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = titles[index];
      text = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      let nextDelay = deleting ? deletingSpeed : typingSpeed;

      if (!deleting && text === current) {
        nextDelay = pauseDelay;
        deleting = true;
      } else if (deleting && text === "") {
        deleting = false;
        index = (index + 1) % titles.length;
      }

      timer = setTimeout(tick, nextDelay);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  });
</script>

<span class="typing-text inline-block min-h-[1.2em]">{text}</span>
