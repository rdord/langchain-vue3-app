<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useLLMStore } from '@/stores/llm';
import { onMounted } from 'vue';

const store = useLLMStore();
onMounted(() => store.setupOpenAI());
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'BasicPrompt' }">Basic prompt</RouterLink>
      <RouterLink :to="{ name: 'PromptTemplate' }">PromptTemplate</RouterLink>
      <RouterLink :to="{ name: 'FewShotPromptTemplate' }">FewShotPromptTemplate</RouterLink>
      <RouterLink :to="{ name: 'Agent' }">Agent</RouterLink>
    </nav>
  </header>

  <main>
    <div>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
