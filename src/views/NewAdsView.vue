<script setup>
import { useAdsStore } from "@/store/index.js";
import {ref} from "vue";
import {router} from "@/router/index.js";

const adsStore = useAdsStore();

const name = ref("");
const inn = ref("");
const address = ref("");
const bik = ref(null);
const currentAccount = ref(null);
const correspondentAccount = ref(null);

const resetForm = () => {
  name.value = '';
  inn.value = '';
  address.value = '';
  bik.value = null;
  currentAccount.value = null;
  correspondentAccount.value = null;
}

const handleSubmit = () => {
  adsStore.addAds({
    name: name,
    inn: inn,
    address: address,
    bik: bik,
    currentAccount: currentAccount,
    correspondentAccount: correspondentAccount,
  });

  resetForm();

  router.push('/');
};
</script>

<template>
  <h2 class="text-2xl font-bold">Создание рекламной компании (РК)</h2>

  <form class="mt-16" @submit.prevent="handleSubmit()" @keydown.enter="handleSubmit()">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Наименование</label>
        <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ООО Таргет" required>
      </div>
      <div>
        <label for="inn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ИНН</label>
        <input v-model="inn" type="text" id="inn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
      </div>
      <div>
        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Адрес</label>
        <input v-model="address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
      <div>
        <label for="bik" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">БИК</label>
        <input v-model="bik" type="number" id="bik" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
      </div>
      <div>
        <label for="currentAccount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Расчетный счет</label>
        <input v-model="currentAccount" type="number" id="currentAccount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
      </div>
      <div>
        <label for="correspondentAccount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Корреспондентский счет</label>
        <input v-model="correspondentAccount" type="number" id="correspondentAccount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
      </div>
    </div>
    <button
      type="submit"
      class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Создать РК
    </button>
  </form>
</template>

<style scoped>

</style>
