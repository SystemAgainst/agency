import { defineStore } from 'pinia'

export const useAdsStore = defineStore('adsList', {
    // state
    state: () => ({
        adsList: JSON.parse(localStorage.getItem("adsData")) ?? [],
    }),
    // getters
    getters: {
        getAdsList(state) {
            return state.adsList;
        },
    },
    // actions
    actions: {
        addAds(formData) {
            this.adsList.push(formData);

            localStorage.setItem('adsData', JSON.stringify(this.adsList));
        },
    },
})
