<template>
  <div class="relative block w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
      <i class="text-xl text-gray-300 fa-solid fa-magnifying-glass"></i>
    </div>
    <input
      class="block w-full py-2 pr-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder:italic placeholder:text-gray-400 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      :value="inputFilter"
      @input="updateInputFilter"
      type="text"
      name="search"
      placeholder="Procure qualquer coisa..."
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputFilter: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:inputFilter"]);

const updateInputFilter = (event) => {
  emit("update:inputFilter", event.target.value);
};

</script>
