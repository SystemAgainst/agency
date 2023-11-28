import { defineStore } from 'pinia'

export const store = defineStore('adsList', {
    // state
    state: () => ({
        adsList: JSON.parse(localStorage.getItem("my-ads")) ?? [],
        id: 0,
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
