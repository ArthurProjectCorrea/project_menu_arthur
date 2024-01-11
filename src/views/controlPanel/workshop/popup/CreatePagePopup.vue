<template>
  <Popup
    :nameModal="namePopup"
    @closeModal="closeModal"
    :buttonSave="true"
    @save="save"
  >
    <form class="grid w-full grid-cols-2 gap-2 p-2 grid-rows-8">
      <Input
        label="nome"
        type="text"
        class="col-span-1 row-span-1"
        id="name"
        v-model="formulario.name"
        required
      />
      <Input
        label="icone"
        type="text"
        class="col-span-1 row-span-1"
        v-model="formulario.icon"
        required
      />
      <Select
        label="modulo"
        class="col-span-1 row-span-1"
        v-model="formulario.module_id"
        :items="modules"
        required
      />
      <Input
        label="nome da rota"
        type="text"
        class="col-span-1 row-span-1"
        v-model="formulario.route_name"
        id="route_name"
        required
      />
    </form>
  </Popup>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchModules, fetchPages } from "../../../../fetchData";
import Popup from "../../../../components/popup/Popup.vue";
import Input from "../../../../components/input/Input.vue";
import Select from "../../../../components/input/Select.vue";

import axios from "axios";

const modules = ref([]);
const namePopup = "Cadastro de Tela";

const formulario = ref({
  id: null,
  module_id: null,
  name: "",
  icon: "",
  route_name: "",
});

const save = async () => {
  try {
    const ultimaSequencia = await fetchPages();
    const novaSequencia = ultimaSequencia.length + 1;
    formulario.value.id = novaSequencia;
    const response = await axios.post(
      "http://localhost:3000/pages",
      formulario.value
    );
    
    console.log("Formulário salvo com sucesso!", response.data);
    location.reload();
  } catch (error) {
    console.error("Erro ao salvar o formulário", error);
  }
};

onMounted(async () => {
  checkFetchData();
});

const checkFetchData = async () => {
  modules.value = await fetchModules();
};
</script>

<style scoped></style>
