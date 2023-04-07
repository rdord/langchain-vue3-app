import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { OpenAI } from 'langchain/llms';

export const useLLMStore = defineStore('llm', () => {
  const model = ref();

  function setupOpenAI() {
    model.value = new OpenAI({
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
      temperature: 0.1
    });
  }

  return { model, setupOpenAI };
});
