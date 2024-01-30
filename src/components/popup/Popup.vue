<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">
      <div
        class="relative flex items-center justify-between w-full gap-2 p-2 bg-gray-300 rounded-t-lg"
      >
        <div>
          <h1 class="text-xl font-bold text-gray-600 uppercase">
            {{ nameModal }}
          </h1>
        </div>
        <button @click="closeModal" class="btn-background-gray">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <slot class=""></slot>
      <div
        class="relative flex items-center justify-end w-full gap-2 p-2 bg-gray-300 rounded-b-lg"
      >
        <slot name="baseboard"></slot>
        <button
          @click="save"
          type="submit"
          class="btn-background-blue"
          v-if="buttonSave"
          :disabled="!buttonSave"
        >
          <i class="fa-solid" :class="!loading ? 'fa-floppy-disk' : 'fa-spinner animate-spin'"></i>
          <span class="font-bold uppercase">salvar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showModal: {
    type: Boolean,
    default: null,
  },
  loading: {
    type: Boolean,
    default: null,
  },
  buttonSave: {
    type: Boolean,
    default: null,
  },
  nameModal: {
    type: String,
    default: null,
  },
});

const emit = defineEmits([ "closeModal", "save"]);

const closeModal = () => {
  emit("closeModal");
};

const save = () => {
  emit("save");
};
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50;
}

.modal {
  @apply flex flex-col w-1/2 rounded-lg shadow-lg bg-gray-100 h-4/5 justify-between;
}
</style>
