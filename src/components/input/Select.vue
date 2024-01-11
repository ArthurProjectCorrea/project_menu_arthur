<template>
  <div class="flex flex-col gap-2">
    <label
      class="block text-sm font-medium text-gray-900 uppercase dark:text-white"
    >
      {{ label }}
    </label>
    <select
      :value="valor"
      @change="atualizarValor"
      :disabled="disabled"
      class="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="item in items" :value="item.id" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: null,
  },
  items: {
    type: Array,
    default: null,
  },
  modelValue: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits();
const valor = ref("");

const atualizarValor = (event) => {
  valor.value = parseInt(event.target.value, 10);
  emit("update:modelValue", valor.value);
};
</script>
