<template>
  <Popup :nameModal="namePopup" @closeModal="closeModal">
    <div class="flex flex-col items-start h-full p-2">
      <SearchInput
        :inputFilter="inputFilter"
        @update:inputFilter="updateInputFilter"
      />
      <div class="w-full h-full overflow-y-auto">
        <div v-for="page in filterList" :key="page.id">
          <div class="flex w-full my-2">
            <router-link
              @click="closeModal"
              :to="{ name: page.route_name }"
              class="flex items-center w-full gap-2 p-2 text-gray-600 border rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
              <div class="flex items-center justify-center w-8 h-8">
                <i class="fa-solid" :class="page.icon"></i>
              </div>
              <div
                class="flex flex-col items-start justify-between w-full gap-2 text-sm font-medium uppercase"
              >
                <div>
                  <p class="w-full">{{ page.name }}</p>
                </div>
                <div class="flex w-full text-xs" v-if="modules">
                  <div>
                    <span>Modulo:</span>
                  </div>
                  <div v-for="module in modules" :key="module.id">
                    <span
                      v-if="module.id === page.module_id"
                      class="ml-2 italic"
                    >
                      {{ module.name }}
                    </span>
                  </div>
                </div>
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
import { fetchPages, fetchModules } from "../../../fetchData";
import Popup from "../../../components/popup/Popup.vue";
import SearchInput from "../../../components/input/Search.vue";

const namePopup = "Pesquisa de Telas";

const pages = ref([]);
const modules = ref([]);

onMounted(async () => {
  checkFetchData();
});

const checkFetchData = async () => {
  pages.value = await fetchPages();
  modules.value = await fetchModules();
};

const inputFilter = ref("");
const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};

const filterList = computed(() =>
  pages.value.filter((page) =>
    page.name.toLowerCase().includes(inputFilter.value.toLowerCase())
  )
);

const updateInputFilter = (value) => {
  inputFilter.value = value;
};
</script>

<style scoped></style>
