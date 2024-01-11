<template>
  <div class="flex flex-col gap-2">
    <label
      class="block text-sm font-medium text-gray-900 uppercase dark:text-white"
      >{{ label }}</label
    >
    <input
      :disabled="disabled"
      :type="type"
      :value="valor"
      @input="atualizarValor"
      class="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: null,
  },
  modelValue: {
    type: String,
    default: null,
  },
});
const emit = defineEmits();
const valor = ref("");

const atualizarValor = (event) => {
  valor.value = event.target.value;
  emit("update:modelValue", event.target.value);
};
</script>
