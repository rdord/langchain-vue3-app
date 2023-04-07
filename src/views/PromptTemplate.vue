<template>
  <p>
    Template: {{ questionPart1 }}
    <input type="text" v-model="lang" placeholder="{lang}" @keyup.enter="onClick" />
    {{ questionPart2 }}
    <button @click="onClick">Prompt</button>
  </p>
  <p v-if="lang">Q: {{ template }}</p>
  <p>A: {{ response }}</p>
</template>

<script setup>
import { useLLMStore } from '@/stores/llm';
import { ref, computed } from 'vue';
import { PromptTemplate } from 'langchain/prompts';

const store = useLLMStore();

const questionPart1 = 'When was';
const questionPart2 = 'programming language invented?';
const lang = ref('');
const template = computed(() => `${questionPart1} ${lang.value} ${questionPart2}`);
const response = ref('');

async function onClick() {
  const promptTemplate = new PromptTemplate({ template: template.value, inputVariables: ['lang'] });
  const prompt = await promptTemplate.format({ lang: lang.value });
  response.value = await store.model.call(prompt);
}
</script>

<style scoped>
input {
  width: 100px;
}
</style>
