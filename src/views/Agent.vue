<template>
  <p>
    Q: {{ prompt }}
    <button @click="onClick">Prompt</button>
  </p>
  <p>A: {{ response }}</p>
</template>

<script setup>
import { useLLMStore } from '@/stores/llm';
import { ref } from 'vue';
import { initializeAgentExecutor } from 'langchain/agents';
import { SerpAPI, Calculator } from 'langchain/tools';

const store = useLLMStore();
const response = ref('');
const prompt = "Mutiply Kendrick Lamar's age with the number of Grammy's he won by 2023";

const tools = [new SerpAPI(import.meta.env.VITE_SERPAPI_API_KEY), new Calculator()];

async function onClick() {
  const executor = await initializeAgentExecutor(
    tools,
    store.model,
    'zero-shot-react-description',
    true
  );
  console.log('Agent loaded');

  response.value = await executor.call({ input: prompt });
}
</script>
