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
      <Input
        label="tela padrão"
        type="text"
        class="col-span-1 row-span-1"
        v-model="formulario.route_default_name"
        id="route_default_name"
        required
      />
    </form>
  </Popup>
</template>

<script setup>
import { ref } from "vue";
import { fetchModules } from "../../../../fetchData";
import Popup from "../../../../components/popup/Popup.vue";
import Input from "../../../../components/input/Input.vue";
import axios from "axios";

const namePopup = "Cadastro de Modulos";

const formulario = ref({
  id: null,
  name: "",
  icon: "",
  route_default_name: "",
});

const save = async () => {
  try {
    const ultimaSequencia = await fetchModules();
    const novaSequencia = ultimaSequencia.length + 1;
    formulario.value.id = novaSequencia;
    const response = await axios.post(
      "http://localhost:3000/modules",
      formulario.value
    );

    console.log("Formulário salvo com sucesso!", response.data);
    location.reload();
  } catch (error) {
    console.error("Erro ao salvar o formulário", error);
  }
};
</script>

<style scoped></style>
