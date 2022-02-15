// import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
// import Vue from 'vue'
// import store from '@/store/index'


// @Module({ dynamic: true, name: 'sampleModule', namespaced: true, store })
// class SampleMod extends VuexModule {
//     sampleData!: string

//     get getSampleData(){
//         return this.sampleData
//     }

//     @Mutation
//     public setDataList(data: string) {
//         console.log(`@Mutation setDataList`)
//         if (data) {
//             console.log(`${data}`)
//             Vue.set(this, 'postTestData', data)
//         }
//     }

//     @Action({ commit: 'setTestData' })
//     async getTestList() {
//         console.log(`@Action getTestList`)
//         return await 'test 12345'
//     }

// }

// export const SampleModule = getModule(SampleMod)