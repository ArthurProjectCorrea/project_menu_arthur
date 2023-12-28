<template>
  <div>
    <img
      v-if="empresaLogged.id == 1"
      class="h-12"
      src="../assets/logohpar.svg"
    />
    <img v-if="empresaLogged.id == 2" class="h-10" src="../assets/vue.svg" />
  </div>
</template>

<script setup>
import data from "../DB.js";

const empresa = data.empresas;
const userDefault = 1;
const user = data.users;

let userLogged = user.find((objeto) => objeto.id === userDefault);
const userEmpresa = userLogged.empresa_id;

let empresaLogged = empresa.find((objeto) => objeto.id === userEmpresa);
</script>

<style scoped></style>
