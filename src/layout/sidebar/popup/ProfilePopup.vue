<template>
  <Popup :nameModal="namePopup" @closeModal="closeModal" :buttonSave="true">
    <div class="flex h-full gap-2 p-2">
      <div class="w-1/3 h-full bg-gray-300 rounded-lg"></div>
      <div class="grid w-full grid-cols-2 gap-2 grid-rows-8">
        <Input :disabled="true" label="nome" class="col-span-1 row-span-1" id="name" :valor="user.name"/>
        <Input :disabled="true" label="empresa" class="col-span-1 row-span-1" id="empresa_id" :valor="empresa.name"/>
        <Input :disabled="true" label="Modulo Padrão" class="col-span-2 row-span-1" id="moduledefault_id" :valor="module.name"/>
      </div>
    </div>
  </Popup>
</template>
<script setup>
import { defineEmits, ref, computed, reactive, onMounted } from "vue";
import { fetchCurrentUser } from "../../../fetchData";
import Popup from "../../../components/popup/Popup.vue";
import Input from "../../../components/input/Input.vue";

const namePopup = "Perfil";

const user = ref([]);
const module = ref([]);
const empresa = ref([]);

onMounted(async () => {
  checkFetchData();
});


const checkFetchData = async () => {
  const result = await fetchCurrentUser()
  user.value = result.user || [];
  module.value = result.module || [];
  empresa.value = result.empresa || [];
};
</script>

<style scoped></style>
