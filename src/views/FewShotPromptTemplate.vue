<template>
  <p>{{ fewShotPromptTemplate.prefix }}</p>
  <br />
  <template v-for="(homeItem, index) in homeItemsLocations" :key="`${index}-${homeItem.item}`">
    <p>Item: {{ homeItem.item }}</p>
    <p>Location: {{ homeItem.location }}</p>
    <br />
  </template>
  <p>
    Item:
    <input type="text" v-model="inputItem" placeholder="nightstand" @keyup.enter="onClick" />
    <button @click="onClick">Prompt</button>
  </p>
  <p>Location: {{ response }}</p>
</template>

<script setup>
import { useLLMStore } from '@/stores/llm';
import { ref } from 'vue';
import { FewShotPromptTemplate, PromptTemplate } from 'langchain/prompts';

const store = useLLMStore();
const inputItem = ref('bookshelf');
const response = ref('');

const homeItemsLocations = [
  { item: 'stove', location: 'kitchen' },
  { item: 'bed', location: 'bedroom' },
  { item: 'fridge', location: 'kitchen' },
  { item: 'bathtub', location: 'bathroom' },
  { item: 'couch', location: 'living room' }
];
const template = 'Item: {item}\nLocation: {location}\n';
const promptTemplate = new PromptTemplate({ template, inputVariables: ['item', 'location'] });
const fewShotPromptTemplate = new FewShotPromptTemplate({
  examples: homeItemsLocations,
  examplePrompt: promptTemplate,
  prefix: 'Give the location of where the items can be found in a home',
  suffix: 'Item: {input}\nLocation:',
  inputVariables: ['input'],
  exampleSeparator: '\n\n',
  templateFormat: 'f-string'
});
console.log('fewShotPromptTemplate', fewShotPromptTemplate);

async function onClick() {
  const prompt = await fewShotPromptTemplate.format({ input: inputItem.value });
  response.value = await store.model.call(prompt);
}
</script>

<style lang="scss" scoped></style>
