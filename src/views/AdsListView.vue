<script setup>
import {useAdsStore} from "@/store/index.js";
import {computed} from "vue";
import {storeToRefs} from "pinia";

const adsStore = useAdsStore();

const { getAdsList } = storeToRefs(adsStore);

</script>

<template>
  <div>
    <ul class="space-y-6">
      <li class="bg-white px-6 flex py-6 rounded-md border border-slate-300 hover:border-indigo-300">
        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                Medium Stuff Satchel 1
              </h3>
              <p class="ml-4">$32.00</p>
            </div>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <h4 class="mt-4 text-gray-500">
              <span class="font-medium">Дедлайн:</span> до 12.12.2023
            </h4>

            <div class="flex gap-4">
              <router-link to="/edit" tag="a" class="font-medium text-indigo-600 hover:text-indigo-500">Edit</router-link>
            </div>
          </div>
        </div>
      </li>
      <div>------------------</div>
      <li
        v-for="(ads, idx) in getAdsList"
        :key="idx"
        class="bg-white px-6 flex py-6 rounded-md border border-slate-300 hover:border-indigo-300"
      >
        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                {{ ads.name }}
              </h3>
              <p class="ml-4">{{ ads.inn }}</p>
            </div>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <h4 class="mt-4 text-gray-500">
              <span class="font-medium">Адрес:</span> {{ ads.address }}
            </h4>

            <div class="flex gap-4">
              <router-link to="/edit" class="font-medium text-indigo-600 hover:text-indigo-500">Edit</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
