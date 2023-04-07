<template>
  <p>Q: {{ prompt }} <button @click="onClick">Prompt</button></p>
  <p v-if="loading">Thinking...</p>
  <p v-if="!loading">A: {{ response }}</p>
</template>

<script setup>
import { useLLMStore } from '@/stores/llm';
import { ref } from 'vue';

const store = useLLMStore();

const prompt = 'Who coined the term "frontend" development?';
const response = ref('');
const loading = ref(false);

async function onClick() {
  loading.value = true;
  response.value = await store.model.call(prompt);
  loading.value = false;
}
</script>
