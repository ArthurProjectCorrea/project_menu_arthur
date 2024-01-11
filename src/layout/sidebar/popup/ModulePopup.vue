<template>
  <Popup :nameModal="namePopup" @closeModal="closeModal">
    <div class="flex flex-col items-start h-full p-2">
      <SearchInput
        :inputFilter="inputFilter"
        @update:inputFilter="updateInputFilter"
      />
      <div class="w-full h-full overflow-y-auto">
        <div v-for="module in filterList" :key="module.id">
          <div class="flex w-full my-2">
            <router-link
              @click="claseWithValue(module)"
              :to="{ name: module.route_default_name }"
              class="flex items-center w-full gap-2 p-2 text-gray-600 border rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
              <div class="flex items-center justify-center w-8 h-8">
                <i class="fa-solid" :class="module.icon"></i>
              </div>
              <div
                class="flex flex-col items-start justify-between w-full gap-2 text-sm font-medium uppercase"
              >
                <p class="w-full">
                  {{ module.name }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import { defineEmits, ref, computed, reactive, onMounted } from "vue";
import Popup from "../../../components/popup/Popup.vue";
import SearchInput from "../../../components/input/Search.vue";
import { fetchModules } from "../../../fetchData";

const namePopup = "Modulos";

const modules = ref([]);

onMounted(async () => {
  modules.value = await fetchModules();
});

const inputFilter = ref("");
const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};

const filterList = computed(() =>
  modules.value.filter((module) =>
    module.name.toLowerCase().includes(inputFilter.value.toLowerCase())
  )
);

const updateInputFilter = (value) => {
  inputFilter.value = value;
};

const modulesDetails = (module) => {
  emit("moduleDetail", module);
};

const claseWithValue = (module) => {
  modulesDetails(module);
  closeModal();
};
</script>

<style scoped></style>
